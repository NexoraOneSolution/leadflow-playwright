export type BusinessType = 'retail' | 'service' | 'manufacturer' | '';

export interface Lead {
  id: string;
  business_name: string;
  category: string;
  sub_category: string;
  contact_person: string;
  phone_number: string;
  alternate_phone: string;
  email: string;
  website: string;
  address: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  google_maps_link: string;
  latitude: string;
  longitude: string;
  rating: string;
  review_count: string;
  source: string;
  source_url: string;
  business_type: BusinessType;
  gst_number: string;
  instagram_link: string;
  facebook_link: string;
  linkedin_link: string;
  whatsapp_number: string;
}

export const leadHeaders: Array<keyof Lead> = [
  'id',
  'business_name',
  'category',
  'sub_category',
  'contact_person',
  'phone_number',
  'alternate_phone',
  'email',
  'website',
  'address',
  'area',
  'city',
  'state',
  'pincode',
  'google_maps_link',
  'latitude',
  'longitude',
  'rating',
  'review_count',
  'source',
  'source_url',
  'business_type',
  'gst_number',
  'instagram_link',
  'facebook_link',
  'linkedin_link',
  'whatsapp_number'
];
