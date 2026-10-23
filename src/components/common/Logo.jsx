/** VD monogram + aperture rings logo mark. */
export default function Logo({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="28" stroke="url(#goldGrad)" strokeWidth="2" strokeDasharray="4 2" />
      <circle cx="32" cy="32" r="22" stroke="url(#goldGrad)" strokeWidth="1.5" strokeOpacity="0.5" />
      {/* Stylized VD Monogram */}
      <path d="M18 22L26 42L34 22" stroke="url(#goldGrad)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M35 22H42C46.4183 22 50 25.5817 50 30V34C50 38.4183 46.4183 42 42 42H35V22Z"
        stroke="url(#goldGrad)"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f3e5ab" />
          <stop offset="0.5" stopColor="#d4af37" />
          <stop offset="1" stopColor="#aa8529" />
        </linearGradient>
      </defs>
    </svg>
  );
}

