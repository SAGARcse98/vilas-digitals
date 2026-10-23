import { useState } from 'react';
import Logo from '../common/Logo.jsx';
import { DEFAULT_STUDIO, NAV_LINKS } from '../../data/studio.js';
import { LANGUAGES } from '../../i18n/translations.js';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { useScrollSpy } from '../../hooks/useScrollSpy.js';
import { buildWhatsAppUrl } from '../../utils/whatsapp.js';

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const activeSection = useScrollSpy(SECTION_IDS);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-nav border-b border-white/10 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-charcoal to-obsidian border border-gold/50 flex items-center justify-center shadow-lg group-hover:border-gold transition">
            <Logo />
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white block leading-none">
              VILAS <span className="gold-gradient-text">DIGITAL'S</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-gray-400 block mt-1">
              Narasalagi • {DEFAULT_STUDIO.phoneShort}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-gray-300">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-1 transition ${isActive ? 'text-gold font-semibold' : 'hover:text-gold'}`}
              >
                {t(link.key)}
                {isActive && <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full gold-gradient-bg" />}
              </a>
            );
          })}
        </nav>

        {/* Language Toggle + Action CTA */}
        <div className="hidden sm:flex items-center gap-2.5">
          <div className="flex items-center rounded-xl bg-white/5 border border-white/10 p-0.5 text-xs">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2.5 py-1.5 rounded-lg font-semibold transition ${
                  lang === l.code ? 'gold-gradient-bg text-obsidian' : 'text-gray-300 hover:text-white'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a
            href={DEFAULT_STUDIO.telHref}
            className="bg-white/5 hover:bg-white/10 text-white border border-white/15 font-medium text-xs px-3.5 py-2.5 rounded-xl transition flex items-center gap-1.5"
          >
            <i className="fa-solid fa-phone text-gold" /> {DEFAULT_STUDIO.phoneShort}
          </a>
          <a
            href={buildWhatsAppUrl(DEFAULT_STUDIO.waNumber, "Hello Vilas Digital's Narasalagi! I would like to book a shoot.")}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient-bg text-obsidian font-semibold text-sm px-4 py-2.5 rounded-xl shadow-lg hover:opacity-90 transition flex items-center gap-2"
          >
            <i className="fa-brands fa-whatsapp text-base" /> {t('nav.bookNow')}
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={() => setLang(lang === 'en' ? 'kn' : 'en')}
            className="sm:hidden px-2.5 py-2 rounded-xl bg-white/5 border border-white/10 text-gold text-xs font-semibold"
          >
            {lang === 'en' ? 'ಕನ್ನಡ' : 'EN'}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold text-lg"
          >
            <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="xl:hidden bg-charcoal border-b border-white/10 px-4 pt-3 pb-6 space-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-lg hover:bg-white/5 ${
                activeSection === link.id ? 'text-gold font-semibold bg-white/5' : 'text-gray-200'
              }`}
            >
              {t(link.key)}
            </a>
          ))}
          <div className="grid grid-cols-2 gap-2 pt-2">
            <a
              href={DEFAULT_STUDIO.telHref}
              className="text-center bg-white/10 text-white font-semibold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-phone text-gold" /> {t('nav.callNow')}
            </a>
            <a
              href={buildWhatsAppUrl(DEFAULT_STUDIO.waNumber)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center gold-gradient-bg text-obsidian font-semibold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2"
            >
              <i className="fa-brands fa-whatsapp" /> {t('nav.whatsapp')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
