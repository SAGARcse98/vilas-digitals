export const PORTFOLIO_FILTERS = [
  { id: 'all', label: 'All Works' },
  { id: 'weddings', label: '💍 Weddings & Pre-Wedding' },
  { id: 'portraits', label: '👤 Portraits, Kids & Maternity' },
  { id: 'events', label: '🎂 Events & Birthdays' },
  { id: 'commercial', label: '🛍️ Commercial & Products' },
  { id: 'drone', label: '🚁 Drone & 4K Cinematic' },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    category: 'weddings',
    badge: 'Weddings & Pre-Wedding',
    title: 'Royal Muhurtham & Candid Vows',
    desc: 'Captured raw emotions, vibrant floral rituals, and golden-hour couple portraits with dual full-frame cameras.',
    gear: 'Full-Frame Mirrorless • 50mm f/1.2 GM',
    img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    category: 'weddings',
    badge: 'Pre-Wedding',
    title: 'Sunset Heritage Pre-Wedding Shoot',
    desc: 'Cinematic wide-angle storytelling with dramatic off-camera flash and matching save-the-date 4K reel.',
    gear: 'Full-Frame • 35mm f/1.4 + Drone Aerial',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    category: 'portraits',
    badge: 'Studio Portraits',
    title: 'Fine-Art Studio Lighting Portrait',
    desc: 'Controlled 3-point softbox lighting inside Vilas Digital’s studio with natural skin-texture retouching.',
    gear: 'Studio Strobe Array • 85mm f/1.4',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    category: 'portraits',
    badge: 'Kids & Maternity',
    title: 'Joyful Childhood & Family Milestone',
    desc: 'Warm, relaxed indoor and garden portrait session with custom props and instant framed prints.',
    gear: '85mm Prime • Natural + Fill Reflector',
    img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    category: 'events',
    badge: 'Events & Celebrations',
    title: 'Grand Birthday & Ring Ceremony',
    desc: 'Dynamic stage coverage, guest candids, cake-cutting highlights, and same-day social media teaser.',
    gear: '24-70mm f/2.8 GM II • On-Camera Bounce',
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    category: 'commercial',
    badge: 'Commercial & Product',
    title: 'Luxury Jewellery & Brand Catalog',
    desc: 'High-sharpness macro and product styling shoot tailored for e-commerce, billboards, and social ads.',
    gear: '90mm Macro f/2.8 • Diffused Light Tent',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 7,
    category: 'drone',
    badge: 'Drone & 4K Cinematic',
    title: 'Aerial Venue & Destination Overview',
    desc: '4K 60fps overhead drone cinematography showcasing grand wedding venues and baraat processions.',
    gear: '4K Pro Cinema Drone • ND16 Filter',
    img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 8,
    category: 'events',
    badge: 'Cultural & Family Events',
    title: 'Traditional Naming & Festive Rituals',
    desc: 'Authentic cultural moments documented in vivid color and compiled into a tear-proof Karizma album.',
    gear: 'Dual Camera Setup • 35mm & 85mm',
    img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 9,
    category: 'commercial',
    badge: 'In-Studio Lab & Frames',
    title: 'Custom Acrylic Prints & Pro Framing',
    desc: 'Museum-grade archival prints, LED backlit frames, and restored vintage portraits crafted in-house.',
    gear: 'High-DPI Color Calibrated Studio Lab',
    img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80',
  },
];

export const HERO_SHOWCASE = [
  [
    { img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=700&q=80', alt: 'Wedding Photography', label: '💍 Royal Weddings', fallback: 'Weddings', height: 'h-48' },
    { img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80', alt: 'Pro Studio Camera', label: '🎥 4K Cinema & Drone', fallback: '4K+Cinema', height: 'h-36' },
  ],
  [
    { img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80', alt: 'Portrait Shoot', label: '✨ Studio Portraits', fallback: 'Portraits', height: 'h-36' },
    { img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=700&q=80', alt: 'Candid Moments', label: '🎉 Candid Celebrations', fallback: 'Events', height: 'h-48' },
  ],
];

