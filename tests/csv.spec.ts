import { expect, test } from '@playwright/test';
import { leadsToCsv } from '../src/storage/csv.js';
import { Lead } from '../src/types.js';

test('exports leads with stable CSV headers', () => {
  const lead: Lead = {
    id: 'lead_0001',
    business_name: 'Demo Cafe',
    category: 'Cafe',
    sub_category: '',
    contact_person: 'Owner',
    phone_number: '9876543210',
    alternate_phone: '',
    email: '',
    website: '',
    address: 'Ring Road, Surat',
    area: 'Ring Road',
    city: 'Surat',
    state: 'Gujarat',
    pincode: '395002',
    google_maps_link: '',
    latitude: '',
    longitude: '',
    rating: '4.5',
    review_count: '120',
    source: 'Manual',
    source_url: '',
    business_type: 'service',
    gst_number: '',
    instagram_link: '',
    facebook_link: '',
    linkedin_link: '',
    whatsapp_number: '9876543210'
  };

  const csv = leadsToCsv([lead]);

  expect(csv).toContain('id,business_name,category');
  expect(csv).toContain('"Ring Road, Surat"');
});
