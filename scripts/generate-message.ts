import { renderOutreachMessage } from '../src/messages/templates.js';
import { Lead } from '../src/types.js';

function readArg(name: string, fallback = ''): string {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] ?? fallback : fallback;
}

const lead = {
  business_name: readArg('name', 'Demo Business'),
  category: readArg('category', 'local'),
  city: readArg('city', 'Surat'),
  contact_person: readArg('person', 'there')
} satisfies Pick<Lead, 'business_name' | 'category' | 'city' | 'contact_person'>;

const yourName = readArg('from', process.env.YOUR_NAME || 'NexoraOne');

console.log(renderOutreachMessage({ lead, yourName }));
