import { useState } from 'react';
import SectionHeading from '../common/SectionHeading.jsx';
import Reveal from '../common/Reveal.jsx';
import { FAQS } from '../../data/extras.js';
import { DEFAULT_STUDIO } from '../../data/studio.js';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { buildWhatsAppUrl } from '../../utils/whatsapp.js';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-20 bg-obsidian border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t('faq.eyebrow')} title={t('faq.title')}>
          {t('faq.desc')}
        </SectionHeading>

        <div className="space-y-3.5">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal
                key={item.q}
                delay={idx * 60}
                className="bg-charcoal border border-white/10 hover:border-gold/40 rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-sm sm:text-base text-white">{item.q}</span>
                  <span
                    className={`w-8 h-8 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-gold text-obsidian' : ''
                    }`}
                  >
                    <i className="fa-solid fa-chevron-down text-xs" />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-3">
                    {item.a}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <a
            href={buildWhatsAppUrl(DEFAULT_STUDIO.waNumber, "Hello Vilas Digital's! I have a question about your photography services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gold bg-gold/10 hover:bg-gold hover:text-obsidian border border-gold/40 px-5 py-3 rounded-xl transition"
          >
            <i className="fa-brands fa-whatsapp text-base" /> {t('faq.askWhatsapp')}
          </a>
        </div>
      </div>
    </section>
  );
}
