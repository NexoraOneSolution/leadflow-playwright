# LeadFlow Playwright

Playwright-powered toolkit for local business lead research, CSV lead databases, and personalized outreach messaging.

Suggested GitHub repo name:

```text
leadflow-playwright
```

Suggested GitHub description:

```text
Playwright-powered toolkit for local business lead research, CSV lead databases, and personalized outreach messaging.
```

## Coverage Area

Primary city:

- Surat

Top 5 additional cities to cover:

- Ahmedabad
- Vadodara
- Rajkot
- Mumbai
- Vapi / Daman

## What This Repo Includes

- Playwright setup for browser-based lead research
- Google Maps collector starter script
- CSV lead database format
- Outreach message template engine
- Sample lead data
- Tests for CSV export and message rendering
- Documentation for sources, categories, workflow, and database fields

## Quick Start

```bash
npm install
npm run install:browsers
npm test
```

Create a message from sample lead data:

```bash
npm run message -- --name "Demo Cafe" --category "Cafe" --city "Surat" --person "Owner"
```

Collect leads from Google Maps:

```bash
npm run collect:maps -- --query "cafes in Surat" --limit 10 --out data/leads.csv
```

Use browser automation responsibly. Only collect publicly available business information, respect platform terms, avoid aggressive request volume, and do not send unsolicited spam.

## Lead Source Platforms

### Business Listing Platforms

- Google Maps
- Justdial
- IndiaMART
- TradeIndia
- Sulekha

Data you can collect:

- Business name
- Phone number
- Address
- Reviews
- Category

Best for:

- Cafes
- Gyms
- Salons
- Traders
- SMEs

### Professional / Company Databases

- LinkedIn
- Startup India
- Crunchbase
- MSME Samadhaan

Data you can collect:

- Founders / decision makers
- Company size
- Industry

Best for:

- B2B companies
- Startups
- Agencies

### Government & Official Sources

- Udyam Registration
- GST Portal India
- Ministry of Corporate Affairs

Data you can collect:

- Registered businesses
- Legal company information
- Addresses

Best for:

- Verified businesses

### Social Media Platforms

- Instagram
- Facebook
- WhatsApp Business

Data you can collect:

- Active businesses
- Contact information, when available
- Engagement level

Best for:

- Cafes
- Salons
- Gyms

### E-commerce & Local Marketplaces

- Amazon seller profiles
- Flipkart
- Meesho
- Shopify store directories

Best for:

- D2C brands
- Online sellers
- Product-based businesses

## Master List For Surat

### Food & Hospitality

- Cafe
- Restaurant
- Fast Food Outlet
- Cloud Kitchen
- Bakery
- Juice Bar
- Ice Cream Shop
- Sweet Shop / Mithai Shop
- Catering Service
- Tiffin Service

### Fitness & Wellness

- Gym
- Yoga Studio
- Fitness Center
- Personal Trainer
- Zumba / Dance Class
- CrossFit Studio
- Spa
- Massage Center

### Beauty & Personal Care

- Salon
- Barber Shop
- Beauty Parlour
- Nail Studio
- Skin Clinic
- Hair Studio

### Retail Shops

- Clothing Store
- Saree Shop
- Footwear Shop
- Mobile Shop
- Electronics Store
- Gift Shop
- Toy Shop
- Cosmetic Store
- Jewelry Shop
- Watch Store

### Traders & Distributors

- FMCG Distributor
- Textile Trader
- Wholesale Merchant
- Kirana Wholesale
- Hardware Supplier
- Electrical Goods Trader

### Education & Training

- Coaching Class
- Tuition Center
- Computer Institute
- Language Class
- Music Class
- Dance Academy
- Skill Training Center

### Transport & Logistics

- Transport Company
- Truck Owner
- Fleet Owner
- Courier Service
- Packers & Movers
- Delivery Service

### Real Estate & Construction

- Property Dealer
- Real Estate Broker
- Builder
- Construction Company
- Interior Designer

### Professional Services

- Chartered Accountant / CA
- Tax Consultant
- Lawyer
- Business Consultant
- Financial Advisor

### Manufacturing / Small Business / MSME

- Textile Unit
- Garment Manufacturer
- Plastic Factory
- Packaging Unit
- Printing Press
- Engineering Workshop

### Travel & Hospitality

- Hotel
- Guest House
- Travel Agency
- Tour Operator

### Local Service Businesses

- Car Garage
- Bike Service Center
- Repair Shop
- Electronics Repair
- AC Service
- Electrician Service
- Plumber Service

### Offices & Others

- Startup Office
- IT Company
- Marketing Agency
- Call Center
- Freelancers / Small Offices

## Basic Leads Database Fields

| Field | Purpose |
| --- | --- |
| id | Unique lead ID |
| business_name | Business or company name |
| category | Main business category |
| sub_category | More specific business type |
| contact_person | Owner, founder, manager, or decision maker |
| phone_number | Primary phone number |
| alternate_phone | Secondary phone number |
| email | Business email |
| website | Website URL |
| address | Full address |
| area | Local area or neighborhood |
| city | City name |
| state | State name |
| pincode | Postal code |
| google_maps_link | Google Maps business/profile link |
| latitude | Map latitude |
| longitude | Map longitude |
| rating | Public rating |
| review_count | Number of reviews |
| source | Platform or source name |
| source_url | Original source URL |
| business_type | Retail / service / manufacturer |
| gst_number | GST number, if available |
| instagram_link | Instagram profile |
| facebook_link | Facebook page |
| linkedin_link | LinkedIn profile/company page |
| whatsapp_number | WhatsApp contact number |

## Suggested Lead Workflow

1. Select one city and one category.
2. Search the category across Google Maps, Justdial, IndiaMART, and social media.
3. Collect all must-have database fields that are publicly available.
4. Verify phone number, address, category, and business activity.
5. Add the lead source and source URL for traceability.
6. Prioritize leads with active reviews, active social media, and clear contact details.
7. Prepare a short personalized message before outreach.

## Basic Outreach Message Template

```text
Hello {{contact_person}},

I found {{business_name}} while searching for {{category}} businesses in {{city}}. We help local businesses improve lead generation, customer follow-up, and online visibility.

Would you be open to a quick conversation to see if we can help you get more inquiries from platforms like Google Maps, WhatsApp, Instagram, and local listing sites?

Thank you,
{{your_name}}
```

## Client Conversation Notes

Use the first call or chat to understand:

- What services or products they sell
- Their main customer type
- How they currently get leads
- Whether they use Google Maps, WhatsApp, Instagram, or a website
- Their biggest issue with lead generation or follow-up
- Whether they want more calls, walk-ins, WhatsApp inquiries, or online orders

## GitHub Publishing

This folder is ready to become a GitHub repository. After installing and logging in to GitHub CLI:

```bash
gh auth login
gh repo create leadflow-playwright --public --description "Playwright-powered toolkit for local business lead research, CSV lead databases, and personalized outreach messaging." --source . --remote origin --push
```

Run that command from inside the `Lead` folder.
