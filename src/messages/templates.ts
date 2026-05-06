import { Lead } from '../types.js';

export interface MessageInput {
  lead: Pick<Lead, 'business_name' | 'category' | 'city' | 'contact_person'>;
  yourName: string;
}

export function renderOutreachMessage({ lead, yourName }: MessageInput): string {
  const contact = lead.contact_person || 'there';
  const business = lead.business_name || 'your business';
  const category = lead.category || 'local';
  const city = lead.city || 'your city';

  return [
    `Hello ${contact},`,
    '',
    `I found ${business} while searching for ${category} businesses in ${city}. We help local businesses improve lead generation, customer follow-up, and online visibility.`,
    '',
    'Would you be open to a quick conversation to see if we can help you get more inquiries from platforms like Google Maps, WhatsApp, Instagram, and local listing sites?',
    '',
    'Thank you,',
    yourName
  ].join('\n');
}
