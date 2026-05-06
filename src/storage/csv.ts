import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { Lead, leadHeaders } from '../types.js';

function escapeCsv(value: string): string {
  if (/[",\n\r]/.test(value)) {
    return `"${value.replaceAll('"', '""')}"`;
  }

  return value;
}

export function leadsToCsv(leads: Lead[]): string {
  const rows = [
    leadHeaders.join(','),
    ...leads.map((lead) => leadHeaders.map((field) => escapeCsv(String(lead[field] ?? ''))).join(','))
  ];

  return `${rows.join('\n')}\n`;
}

export async function saveLeadsCsv(filePath: string, leads: Lead[]): Promise<void> {
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, leadsToCsv(leads), 'utf8');
}
