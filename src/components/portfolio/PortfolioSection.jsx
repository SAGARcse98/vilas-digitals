import { useCallback, useMemo, useState } from 'react';
import SectionHeading from '../common/SectionHeading.jsx';
import PortfolioCard from './PortfolioCard.jsx';
import Lightbox from './Lightbox.jsx';
import { PORTFOLIO_FILTERS, PORTFOLIO_ITEMS } from '../../data/portfolio.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

const ACTIVE_TAB = 'gold-gradient-bg text-obsidian shadow-md font-semibold';
const INACTIVE_TAB = 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 font-medium';

export default function PortfolioSection() {
  const [filter, setFilter] = useState('all');
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useLanguage();

  const items = useMemo(
    () => (filter === 'all' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((i) => i.category === filter)),
    [filter]
  );

  const handleOpen = useCallback(
    (item) => {
      const idx = items.findIndex((i) => i.id === item.id);
      setActiveIndex(idx >= 0 ? idx : 0);
    },
    [items]
  );

  const handlePrev = useCallback(() => {
    setActiveIndex((idx) => (idx == null ? null : (idx - 1 + items.length) % items.length));
  }, [items.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((idx) => (idx == null ? null : (idx + 1) % items.length));
  }, [items.length]);

  const activeItem = activeIndex != null ? items[activeIndex] : null;

  return (
    <section id="portfolio" className="py-20 bg-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t('portfolio.eyebrow')} title={t('portfolio.title')}>
          {t('portfolio.desc')}
        </SectionHeading>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {PORTFOLIO_FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => {
                setFilter(f.id);
                setActiveIndex(null);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm transition ${filter === f.id ? ACTIVE_TAB : INACTIVE_TAB}`}
            >
              {t(`portfolio.filters.${f.id}`)}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <PortfolioCard key={item.id} item={item} onOpen={handleOpen} />
          ))}
        </div>
      </div>

      <Lightbox
        item={activeItem}
        currentIndex={activeIndex}
        total={items.length}
        onPrev={handlePrev}
        onNext={handleNext}
        onClose={() => setActiveIndex(null)}
      />
    </section>
  );
}
