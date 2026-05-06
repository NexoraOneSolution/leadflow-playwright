import { chromium, Page } from 'playwright';
import { saveLeadsCsv } from '../storage/csv.js';
import { Lead } from '../types.js';

interface CollectorOptions {
  query: string;
  limit: number;
  out: string;
  headless: boolean;
}

function readArg(name: string, fallback = ''): string {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] ?? fallback : fallback;
}

function readOptions(): CollectorOptions {
  const query = readArg('query');

  if (!query) {
    throw new Error('Missing --query. Example: npm run collect:maps -- --query "cafes in Surat"');
  }

  return {
    query,
    limit: Number(readArg('limit', '10')),
    out: readArg('out', 'data/leads.csv'),
    headless: readArg('headed') !== 'true'
  };
}

function cleanText(text: string | null | undefined): string {
  return (text ?? '').replace(/\s+/g, ' ').trim();
}

function makeLeadId(index: number): string {
  return `lead_${String(index + 1).padStart(4, '0')}`;
}

async function textFromLocator(page: Page, selector: string): Promise<string> {
  const locator = page.locator(selector).first();
  if ((await locator.count()) === 0) {
    return '';
  }

  return cleanText(await locator.textContent());
}

async function collectVisiblePlaceLinks(page: Page, limit: number): Promise<string[]> {
  const feed = page.locator('[role="feed"]').first();
  const links = new Set<string>();

  for (let attempt = 0; attempt < 8 && links.size < limit; attempt += 1) {
    const hrefs = await page.locator('a[href*="/maps/place/"]').evaluateAll((anchors) =>
      anchors.map((anchor) => (anchor as HTMLAnchorElement).href).filter(Boolean)
    );

    hrefs.forEach((href) => links.add(href));

    if ((await feed.count()) > 0) {
      await feed.evaluate((element) => element.scrollBy(0, element.scrollHeight));
    } else {
      await page.mouse.wheel(0, 1200);
    }

    await page.waitForTimeout(1200);
  }

  return [...links].slice(0, limit);
}

async function collectLeadFromPlace(page: Page, url: string, index: number, query: string): Promise<Lead> {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45_000 });
  await page.waitForTimeout(2000);

  const businessName = await textFromLocator(page, 'h1');
  const ratingText = await textFromLocator(page, '[role="img"][aria-label*="stars"]');
  const reviewText = await textFromLocator(page, 'button[aria-label*="reviews"], button[aria-label*="review"]');
  const address = await textFromLocator(page, 'button[data-item-id="address"], [data-item-id="address"]');
  const phone = await textFromLocator(page, 'button[data-item-id^="phone"], [data-item-id^="phone"]');
  const website = await page
    .locator('a[data-item-id="authority"], a[aria-label*="Website"]')
    .first()
    .getAttribute('href')
    .catch(() => '');

  const rating = ratingText.match(/\d+(\.\d+)?/)?.[0] ?? '';
  const reviewCount = reviewText.match(/[\d,]+/)?.[0]?.replaceAll(',', '') ?? '';

  return {
    id: makeLeadId(index),
    business_name: businessName,
    category: query,
    sub_category: '',
    contact_person: '',
    phone_number: phone,
    alternate_phone: '',
    email: '',
    website: website ?? '',
    address,
    area: '',
    city: '',
    state: '',
    pincode: '',
    google_maps_link: url,
    latitude: '',
    longitude: '',
    rating,
    review_count: reviewCount,
    source: 'Google Maps',
    source_url: url,
    business_type: '',
    gst_number: '',
    instagram_link: '',
    facebook_link: '',
    linkedin_link: '',
    whatsapp_number: phone
  };
}

async function main(): Promise<void> {
  const options = readOptions();
  const browser = await chromium.launch({ headless: options.headless });
  const page = await browser.newPage();

  try {
    await page.goto(`https://www.google.com/maps/search/${encodeURIComponent(options.query)}?hl=en`, {
      waitUntil: 'domcontentloaded',
      timeout: 45_000
    });

    await page.waitForTimeout(3000);
    const placeLinks = await collectVisiblePlaceLinks(page, options.limit);
    const leads: Lead[] = [];

    for (const [index, link] of placeLinks.entries()) {
      const lead = await collectLeadFromPlace(page, link, index, options.query);
      if (lead.business_name) {
        leads.push(lead);
      }
    }

    await saveLeadsCsv(options.out, leads);
    console.log(`Saved ${leads.length} leads to ${options.out}`);
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
