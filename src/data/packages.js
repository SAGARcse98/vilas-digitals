export const PACKAGE_TIERS = [
  {
    id: 'studio',
    tier: 'Tier 01',
    duration: '1–2 Hours',
    title: 'Studio & Mini Session',
    subtitle: 'Ideal for Portraits, Kids, Maternity, Small Pooja & Family Shoots',
    price: '₹4,999',
    features: [
      '1–2 Hours Studio or Local Outdoor Coverage',
      'Professional Portrait & Traditional Photography',
      '15 High-End Retouched Digital Masterpieces',
      'All High-Res Soft Copies via Google Drive',
      '1 Complimentary 12x18" Laminated Framed Print',
    ],
    cta: 'Customize in Calculator ↓',
  },
  {
    id: 'event',
    tier: 'Tier 02',
    duration: '4–5 Hours',
    title: 'Event & Celebration',
    subtitle: 'Ideal for Birthdays, Engagements, Naming Ceremonies & Housewarmings',
    price: '₹18,500',
    features: [
      '1 Senior Traditional Photographer',
      '1 Full HD / 4K Traditional Videographer',
      '300+ Color-Corrected High-Res Digital Photos',
      'Full Edited Event Video + 3-Min Cinematic Reel',
      '20-Sheet Premium Karizma Photo Album + Bag',
    ],
    cta: 'Select & Customize ↓',
    highlighted: true,
    ribbon: 'Most Popular for Events',
  },
  {
    id: 'wedding',
    tier: 'Tier 03',
    duration: 'Full Multi-Day',
    title: 'Grand Wedding Suite',
    subtitle: 'Complete Luxury Coverage for Weddings, Receptions & Pre-Wedding',
    price: '₹65,000',
    features: [
      'Candid Photographer + Cinematic Videographer',
      'Traditional Photo & Video Team for All Rituals',
      '4K Drone Aerial Shots + Cinematic Wedding Teaser',
      '2 Luxury 35-Sheet Canvera/Karizma Albums',
      'Complimentary Outdoor Pre-Wedding Shoot + 2 Frames',
    ],
    cta: 'Customize in Calculator ↓',
  },
];

export const BASE_OPTIONS = [
  { value: 'studio', price: 4999, name: 'Studio Portrait / Baby / Maternity Session (2 Hrs)', label: 'Studio Portrait / Baby / Maternity Session' },
  { value: 'commercial', price: 8500, name: 'Commercial Product / Brand Shoot (Half Day)', label: 'Commercial Product / E-Commerce Shoot' },
  { value: 'prewedding', price: 15000, name: 'Outdoor Pre-Wedding Photo & Cinematic Reel Shoot', label: 'Outdoor Pre-Wedding Photo & Video Shoot' },
  { value: 'event', price: 18500, name: 'Birthday / Engagement / Family Event Package', label: 'Birthday / Engagement / Naming Ceremony' },
  { value: 'wedding', price: 65000, name: 'Grand Wedding & Reception Complete Suite', label: 'Grand Wedding & Reception Complete Suite' },
];

export const DEFAULT_BASE = 'event';
export const EXTRA_SHIFT_PRICE = 5000;
export const MAX_EXTRA_SHIFTS = 5;

export const ADDONS = [
  { id: 'candid', name: 'Candid Specialist Photographer', label: 'Candid Photographer', price: 8000 },
  { id: 'drone', name: '4K Drone Aerial Cinematography', label: '4K Drone Aerial Shoot', price: 7500 },
  { id: 'film', name: '4K Cinematic Film & Reels Edit', label: '4K Cinematic Film & Reels', price: 10000 },
  { id: 'album', name: 'Premium 30-Sheet Canvera Album', label: '30-Sheet Luxury Album', price: 9500 },
  { id: 'led', name: '8x12 Ft Live LED Wall + Mixing', label: '8x12 Ft Live LED Wall', price: 14000 },
  { id: 'frames', name: '2 Custom LED Backlit Photo Frames', label: '2 LED Backlit Frames', price: 3500 },
];

