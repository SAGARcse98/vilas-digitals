import CountUp from '../common/CountUp.jsx';
import Reveal from '../common/Reveal.jsx';
import { DEFAULT_STUDIO } from '../../data/studio.js';
import { EQUIPMENT, STATS } from '../../data/services.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

export default function AboutSection() {
  const { t } = useLanguage();
  const statLabels = t('about.stats');

  return (
    <section id="about" className="py-20 bg-obsidian border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Story & Stats */}
          <Reveal className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">{t('about.eyebrow')}</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              {t('about.titlePre')}
              <span className="gold-gradient-text">{t('about.titleHighlight')}</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Located in the heart of <strong className="text-white">Narasalagi (Dist. Vijayapura, Karnataka)</strong>,{' '}
              <strong className="text-white">Vilas Digital's</strong> is built on a passion for turning fleeting moments into lifelong
              treasures. We pride ourselves on being an all-round studio capable of handling every occasion with creativity and warmth.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              From grand wedding muhurthams, engagements, naming ceremonies, and pre-wedding shoots across Vijayapura district to walk-in
              studio portraits, instant passport/visa photos, and custom LED photo frames, call us anytime at{' '}
              <a href={DEFAULT_STUDIO.telHref} className="text-gold underline font-medium">
                {DEFAULT_STUDIO.phone}
              </a>
              .
            </p>

            {/* Key Statistics with Animated Counter */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {STATS.map((s, idx) => (
                <div key={s.label} className="bg-charcoal border border-white/10 p-4 rounded-2xl text-center">
                  <CountUp value={s.value} className="font-serif text-2xl sm:text-3xl font-bold gold-gradient-text block" />
                  <span className="text-xs text-gray-400 mt-1 block">{Array.isArray(statLabels) ? statLabels[idx] : s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right Equipment & Technology Arsenal */}
          <Reveal delay={150} className="lg:col-span-6">
            <div className="bg-charcoal border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">Our Cinema & Studio Arsenal</h3>
                  <p className="text-xs text-gray-400">Powered by industry-leading imaging technology</p>
                </div>
                <i className="fa-solid fa-microchip text-gold text-2xl" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {EQUIPMENT.map((e) => (
                  <div key={e.title} className="p-4 rounded-2xl bg-obsidian border border-white/5 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold flex items-center justify-center shrink-0">
                      <i className={`fa-solid ${e.icon}`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{e.title}</h4>
                      <p className="text-xs text-gray-400 mt-1">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
