import { expect, test } from '@playwright/test';
import { renderOutreachMessage } from '../src/messages/templates.js';

test('renders a personalized outreach message', () => {
  const message = renderOutreachMessage({
    lead: {
      business_name: 'Demo Cafe',
      category: 'Cafe',
      city: 'Surat',
      contact_person: 'Owner'
    },
    yourName: 'NexoraOne'
  });

  expect(message).toContain('Hello Owner');
  expect(message).toContain('Demo Cafe');
  expect(message).toContain('Cafe businesses in Surat');
  expect(message).toContain('NexoraOne');
});
