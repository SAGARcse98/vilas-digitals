import { useEffect, useState } from 'react';
import FallbackImage from '../common/FallbackImage.jsx';
import Reveal from '../common/Reveal.jsx';
import { DEFAULT_STUDIO } from '../../data/studio.js';
import { HERO_PILLS } from '../../data/services.js';
import { HERO_SHOWCASE } from '../../data/portfolio.js';
import { HERO_BG_SLIDES } from '../../data/extras.js';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { buildWhatsAppUrl } from '../../utils/whatsapp.js';

function ShowcaseTile({ tile, label }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden ${tile.height} group`}>
      <FallbackImage
        src={tile.img}
        alt={tile.alt}
        fallbackText={tile.fallback}
        bg="1c1c22"
        loading="eager"
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
      />
      <span className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-[11px] text-gold px-2.5 py-1 rounded-md">
        {label || tile.label}
      </span>
    </div>
  );
}

export default function HeroSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const { t } = useLanguage();
  const pillLabels = t('hero.pills');
  const showcaseLabels = t('hero.showcase');

  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % HERO_BG_SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden">
      {/* Crossfading Hero Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {HERO_BG_SLIDES.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt="Vilas Digital's Wedding & Studio Background"
            loading={idx === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-[1800ms] ${
              idx === slideIndex ? 'opacity-30 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/85 to-obsidian/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Copy */}
          <Reveal className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs uppercase tracking-widest font-medium">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                {t('hero.badge')}
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs">
                🇮🇳 ಕನ್ನಡ • मराठी • हिंदी • English
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.12] tracking-tight text-white">
              {t('hero.titlePre')}
              <span className="gold-gradient-text italic">{t('hero.titleHighlight')}</span>
              {t('hero.titlePost')}
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">{t('hero.desc')}</p>

            {/* Service Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {HERO_PILLS.map((pill, i) => (
                <span key={pill.label} className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-gray-300">
                  <i className={`fa-solid ${pill.icon} text-gold mr-1.5`} />
                  {Array.isArray(pillLabels) ? pillLabels[i] : pill.label}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <a
                href={buildWhatsAppUrl(DEFAULT_STUDIO.waNumber, "Hello Vilas Digital's (Narasalagi)! I would like to inquire about booking a shoot.")}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-bg text-obsidian font-semibold px-6 py-4 rounded-xl shadow-xl hover:scale-[1.02] transition flex items-center gap-2.5"
              >
                <i className="fa-brands fa-whatsapp text-lg" /> WhatsApp: {DEFAULT_STUDIO.phoneShort}
              </a>
              <a
                href={DEFAULT_STUDIO.telHref}
                className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium px-6 py-4 rounded-xl transition flex items-center gap-2.5"
              >
                <i className="fa-solid fa-phone text-gold" /> {t('hero.call')} {DEFAULT_STUDIO.phone}
              </a>
              <a
                href="#quote-calculator"
                className="bg-charcoal hover:bg-white/10 text-gold border border-gold/40 font-medium px-5 py-4 rounded-xl transition flex items-center gap-2 text-sm"
              >
                <i className="fa-solid fa-calculator" /> {t('hero.quote')}
              </a>
            </div>
          </Reveal>

          {/* Right Column: Featured Visual Showcase Card */}
          <Reveal delay={150} className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-gold/40 via-transparent to-gold/40 blur-lg opacity-70" />
              <div className="relative bg-charcoal border border-white/15 rounded-3xl p-4 shadow-2xl">
                <div className="grid grid-cols-2 gap-3">
                  {HERO_SHOWCASE.map((column, colIdx) => (
                    <div key={colIdx} className={`space-y-3 ${colIdx === 1 ? 'pt-4' : ''}`}>
                      {column.map((tile, rowIdx) => {
                        const flatIdx = colIdx * 2 + rowIdx;
                        return (
                          <ShowcaseTile
                            key={tile.label}
                            tile={tile}
                            label={Array.isArray(showcaseLabels) ? showcaseLabels[flatIdx] : tile.label}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>

                {/* Bottom Floating Badge inside Hero Card */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between px-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold">
                      <i className="fa-solid fa-location-dot" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Main Road, Narasalagi (Vijayapura)</p>
                      <p className="text-sm font-semibold text-white">Call / WhatsApp: {DEFAULT_STUDIO.phoneShort}</p>
                    </div>
                  </div>
                  <a href="#booking" className="text-xs font-semibold text-gold hover:underline">
                    {t('hero.bookDate')}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
