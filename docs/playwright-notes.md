# Playwright Setup And Run Notes

## Installation

Install project dependencies:

```bash
npm install
```

Install Chromium for Playwright:

```bash
npm run install:browsers
```

Install every Playwright browser, if needed:

```bash
npm run install:browsers:all
```

## Configuration

This repo uses `playwright.config.ts`.

Current settings:

- Tests live in `tests/`
- Browser is Chromium
- Test report is generated as terminal output and HTML
- Trace is recorded on the first retry
- Tests can run in parallel

Useful config fields:

```ts
use: {
  browserName: 'chromium',
  trace: 'on-first-retry'
}
```

## Commands

Run typecheck and tests:

```bash
npm run typecheck
npm test
```

Run tests in headed Chromium:

```bash
npm run test:headed
```

Open Playwright UI mode:

```bash
npm run test:ui
```

Open the HTML report:

```bash
npm run show-report
```

Generate browser actions and selectors:

```bash
npm run codegen -- "https://www.google.com/maps"
```

## Lead Collection

```bash
npm run collect:maps -- --query "cafes in Surat" --limit 10 --out data/leads.csv
npm run collect:maps -- --query "gyms in Ahmedabad" --limit 20 --out data/ahmedabad-gyms.csv
```

Use headed Chromium when you want to watch the browser:

```bash
npm run collect:maps:headed -- --query "salons in Vadodara" --limit 10 --out data/vadodara-salons.csv
```

## CSV Export

The collector writes CSV files through `src/storage/csv.ts`.

Output example:

```bash
data/leads.csv
data/ahmedabad-gyms.csv
data/vadodara-salons.csv
```

The default generated lead CSV is ignored by git:

```text
data/leads.csv
```

Keep sample or template files in git, such as:

```text
data/leads.sample.csv
```

## Recommended Add-ons

- Playwright Test for VS Code
- GitHub Actions VS Code extension
- CSV viewer extension
- Markdown preview extension

## Good Practices

- Keep collection volume small and human-like.
- Verify leads manually before outreach.
- Store the source URL for every lead.
- Avoid collecting private personal information.
- Do not automate spam or bulk unsolicited messaging.
