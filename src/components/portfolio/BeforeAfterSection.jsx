import { useState } from 'react';
import SectionHeading from '../common/SectionHeading.jsx';
import Reveal from '../common/Reveal.jsx';
import { BEFORE_AFTER_PAIRS } from '../../data/extras.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

export default function BeforeAfterSection() {
  const [activePair, setActivePair] = useState(BEFORE_AFTER_PAIRS[0]);
  const [pos, setPos] = useState(50);
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-obsidian border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t('beforeAfter.eyebrow')} title={t('beforeAfter.title')}>
          {t('beforeAfter.desc')}
        </SectionHeading>

        {/* Pair Switcher */}
        <div className="flex justify-center gap-3 mb-8">
          {BEFORE_AFTER_PAIRS.map((pair) => (
            <button
              key={pair.id}
              onClick={() => {
                setActivePair(pair);
                setPos(50);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition ${
                activePair.id === pair.id
                  ? 'gold-gradient-bg text-obsidian font-semibold shadow-md'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {pair.label}
            </button>
          ))}
        </div>

        {/* Interactive Slider Container */}
        <Reveal className="relative rounded-3xl overflow-hidden border border-gold/30 shadow-2xl select-none h-[320px] sm:h-[460px] bg-charcoal">
          {/* After (full color graded) */}
          <img
            src={activePair.image}
            alt={activePair.afterLabel}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* Before (clipped to slider position) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <img
              src={activePair.image}
              alt={activePair.beforeLabel}
              style={{ filter: activePair.beforeFilter }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Divider Handle */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-gold shadow-[0_0_15px_rgba(212,175,55,0.9)] pointer-events-none"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full gold-gradient-bg text-obsidian flex items-center justify-center shadow-xl border-2 border-obsidian">
              <i className="fa-solid fa-arrows-left-right text-xs" />
            </div>
          </div>

          {/* Labels */}
          <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-gray-200 border border-white/15">
            {t('beforeAfter.before')} • {activePair.beforeLabel}
          </span>
          <span className="absolute top-4 right-4 text-xs font-semibold px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-gold border border-gold/40">
            {t('beforeAfter.after')} • {activePair.afterLabel}
          </span>

          {/* Accessible Range Input Overlay */}
          <input
            type="range"
            min="5"
            max="95"
            value={pos}
            aria-label="Compare before and after"
            onChange={(e) => setPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
          />
        </Reveal>
      </div>
    </section>
  );
}

