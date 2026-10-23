import { useRef } from 'react';
import SectionHeading from '../common/SectionHeading.jsx';
import PackageTierCard from './PackageTierCard.jsx';
import QuoteCalculator from './QuoteCalculator.jsx';
import { PACKAGE_TIERS } from '../../data/packages.js';
import { useQuote } from '../../hooks/useQuote.js';
import { useToast } from '../../context/ToastContext.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';

export default function PackagesSection() {
  const quote = useQuote();
  const showToast = useToast();
  const { t } = useLanguage();
  const calculatorRef = useRef(null);

  const handleSelectPreset = (type) => {
    quote.selectPreset(type);
    calculatorRef.current?.scrollIntoView({ behavior: 'smooth' });
    showToast('Package loaded into Custom Quote Calculator!');
  };

  return (
    <section id="packages" className="py-20 bg-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-14" eyebrow={t('packages.eyebrow')} title={t('packages.title')}>
          {t('packages.desc')}
        </SectionHeading>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {PACKAGE_TIERS.map((tier) => (
            <PackageTierCard key={tier.id} tier={tier} onSelect={handleSelectPreset} />
          ))}
        </div>

        <QuoteCalculator ref={calculatorRef} quote={quote} />
      </div>
    </section>
  );
}
