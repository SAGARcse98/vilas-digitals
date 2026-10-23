/** Marketing template generators — live-updated from the studio customizer. */

export const whatsappTemplate = ({ owner, phone, address }) =>
`Hello! 👋 Thank you for reaching out to *Vilas Digital's, Narasalagi* 📸

Whether it's a grand wedding celebration or a quick studio portrait, we specialize in capturing your best moments with top-tier quality and creativity.

*Our Services Include:*
💍 Wedding & Pre-Wedding Shoots (Candid & Traditional)
🎂 Birthday Parties, Naming Ceremonies & Family Events
👤 Studio Portraits, Maternity & Baby Shoots
🛍️ Product, Commercial & Real Estate Photography
🚁 4K Drone, LED Wall & Cinematic Videography
🪪 Instant 5-Min Passport/Visa Photos, Photo Restoration & Custom Frames

📅 *Bookings are open!* Let us know your event date and occasion, and we’ll share a customized package that fits your budget.

📍 *Address:* ${address}
📞 *Call / WhatsApp:* ${phone} (${owner})`;

export const kannadaTemplate = ({ owner, phone, address }) =>
`📸 *ವಿಲಾಸ್ ಡಿಜಿಟಲ್ಸ್ (VILAS DIGITAL'S) - ನರಸಲಗಿ* ✨
ನಿಮ್ಮ ಜೀವನದ ಅಮೂಲ್ಯ ಕ್ಷಣಗಳನ್ನು ಸುಂದರವಾಗಿ ಸೆರೆಹಿಡಿಯಲು ನಮ್ಮ ಸ್ಟುಡಿಯೋಗೆ ಭೇಟಿ ನೀಡಿ!

*ನಮ್ಮ ವಿಶೇಷ ಸೇವೆಗಳು:*
💍 ಮದುವೆ ಮತ್ತು ಪ್ರೀ-ವೆಡ್ಡಿಂಗ್ ಶೂಟ್ (Candid & Traditional)
🚁 4K ಡ್ರೋನ್ ಶೂಟಿಂಗ್ ಮತ್ತು ಸಿನಿಮಾಟಿಕ್ ವಿಡಿಯೋ (Drone & LED Wall)
🎂 ಹುಟ್ಟುಹಬ್ಬ, ನಾಮಕರಣ ಮತ್ತು ಎಲ್ಲಾ ಶುಭ ಸಮಾರಂಭಗಳ ಫೋಟೋಗ್ರಫಿ
🖼️ ಆಕರ್ಷಕ ಫೋಟೋ ಫ್ರೇಮ್ಗಳು, ಕರಿಜ್ಮಾ ಆಲ್ಬಮ್ ಮತ್ತು ಲ್ಯಾಮಿನೇಷನ್
🪪 5 ನಿಮಿಷದಲ್ಲಿ ಪಾಸ್ಪೋರ್ಟ್ ಫೋಟೋ ಲಭ್ಯ!

📍 *ಸ್ಥಳ:* ${address}
📞 *ಸಂಪರ್ಕಿಸಿ (Call/WhatsApp):* ${phone} (${owner})`;

export const instagramTemplate = ({ phone, address, insta }) =>
`📌 INSTAGRAM BIO:
📸 Vilas Digital's Photography | Narasalagi
✨ Every Moment, Masterfully Framed
💍 Weddings | 👨‍👩‍👧‍👦 Portraits | 🎉 Events | 🚁 4K Drone | 🖼️ Frames
📍 ${address}
📞 Call / WhatsApp: ${phone}

📸 LAUNCH / PROMO POST CAPTION:
Every picture tells a story—let us tell yours! ✨📸
At Vilas Digital's (Narasalagi), we bring passion, precision, and creativity to every frame. From grand emotional moments at weddings to studio portraits, custom LED photo frames, and 4K drone shoots, we cover it all under one roof!

✅ High-Resolution Digital & Luxury Karizma/Canvera Albums
✅ Candid & Traditional Wedding Coverage
✅ 4K Cinematic Videography, Drone & LED Walls
✅ Instant Passport Photos, Lamination & Photo Gifts

📩 DM ${insta} today or call ${phone} to book your dates!
📍 Visit us at: ${address}

#VilasDigitals #Narasalagi #VijayapuraPhotography #BijapurPhotographers #WeddingPhotography #CandidPhotography #StudioShoot`;

export const promptsTemplate = () =>
`✨ SLOGANS FOR VILAS DIGITAL'S (NARASALAGI):
1. Vilas Digital's: Every Moment, Masterfully Framed.
2. From Portraits to Grand Weddings — Captured by Vilas Digital's, Narasalagi.
3. Turning Your Special Moments into Timeless Memories.

📄 BANNER / FLEX TEXT (NARASALAGI):
VILAS DIGITAL'S PHOTOGRAPHY & STUDIO
Weddings • Pre-Wedding • Candid • 4K Drone • LED Wall • Instant Passport Photo • Custom Frames & Karizma Albums
📍 Main Road, Narasalagi | 📞 Call: 93800 61887

🎨 AI LOGO GENERATOR PROMPT:
"Minimalist luxury photography studio logo for 'Vilas Digital's Narasalagi', interlocking letters V and D combined with a sleek camera lens aperture icon, metallic gold and white lines on a dark matte charcoal background, vector graphic."`;

export const MARKETING_TEMPLATES = [
  {
    id: 'whatsapp',
    title: 'WhatsApp Broadcast',
    icon: 'fa-brands fa-whatsapp text-base',
    titleClass: 'text-green-400',
    footnote: 'English greeting & inquiry message for WhatsApp Business.',
    build: whatsappTemplate,
  },
  {
    id: 'kannada',
    title: 'ಕನ್ನಡ + English Promo',
    icon: 'fa-solid fa-language text-base',
    titleClass: 'text-gold',
    footnote: 'Perfect for Narasalagi & Vijayapura local WhatsApp groups!',
    build: kannadaTemplate,
    highlighted: true,
  },
  {
    id: 'instagram',
    title: 'Instagram Bio & Post',
    icon: 'fa-brands fa-instagram text-base',
    titleClass: 'text-pink-400',
    footnote: 'Includes #Narasalagi #Vijayapura #VilasDigitals tags.',
    build: instagramTemplate,
  },
  {
    id: 'prompts',
    title: 'Flyer & Logo Prompts',
    icon: 'fa-solid fa-wand-magic-sparkles text-sm',
    titleClass: 'text-gold',
    footnote: 'Ready for banner/flex printing & AI logo design.',
    build: promptsTemplate,
  },
];

