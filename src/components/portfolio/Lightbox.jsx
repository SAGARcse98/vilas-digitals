import { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext.jsx';

export default function Lightbox({ item, currentIndex, total, onPrev, onNext, onClose }) {
  const { t } = useLanguage();
  const touchStartX = useRef(null);

  // Keyboard navigation: Escape, ArrowLeft, ArrowRight
  useEffect(() => {
    if (!item) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev?.();
      if (e.key === 'ArrowRight') onNext?.();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 45) {
      if (delta > 0) onPrev?.();
      else onNext?.();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        onClick={onClose}
        aria-label="Close preview"
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-gold hover:text-obsidian text-white flex items-center justify-center text-xl transition z-10"
      >
        <i className="fa-solid fa-xmark" />
      </button>

      {total > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-gold hover:text-obsidian text-white flex items-center justify-center transition z-10"
          >
            <i className="fa-solid fa-chevron-left" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next photo"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-gold hover:text-obsidian text-white flex items-center justify-center transition z-10"
          >
            <i className="fa-solid fa-chevron-right" />
          </button>
        </>
      )}

      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-5xl w-full flex flex-col md:flex-row bg-charcoal border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="md:w-2/3 bg-black flex items-center justify-center max-h-[75vh] relative">
          <img src={item.img} alt={item.title} className="max-h-[75vh] w-auto object-contain" />
          {total > 1 && (
            <span className="absolute bottom-3 left-3 text-[11px] px-2.5 py-1 rounded-full bg-black/70 text-gray-300 border border-white/10">
              {currentIndex + 1} / {total}
            </span>
          )}
        </div>
        <div className="md:w-1/3 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <span className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-gold/20 text-gold border border-gold/30 mb-3">
              {item.badge}
            </span>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>
            <div className="space-y-3 border-t border-white/10 pt-4 text-xs text-gray-300">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-camera text-gold w-4" />
                <span>{item.gear}</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-wand-magic-sparkles text-gold w-4" />
                <span>{t('portfolio.retouched')}</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-white/10">
            <a
              href="#booking"
              onClick={onClose}
              className="w-full gold-gradient-bg text-obsidian font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-95 transition"
            >
              <i className="fa-regular fa-calendar-check" /> {t('portfolio.bookSimilar')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
