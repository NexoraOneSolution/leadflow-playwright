# Playwright Notes

## Commands

```bash
npm run collect:maps -- --query "cafes in Surat" --limit 10 --out data/leads.csv
npm run collect:maps -- --query "gyms in Ahmedabad" --limit 20 --out data/ahmedabad-gyms.csv
```

Use `--headed true` when you want to watch the browser:

```bash
npm run collect:maps -- --query "salons in Vadodara" --headed true
```

## Good Practices

- Keep collection volume small and human-like.
- Verify leads manually before outreach.
- Store the source URL for every lead.
- Avoid collecting private personal information.
- Do not automate spam or bulk unsolicited messaging.
