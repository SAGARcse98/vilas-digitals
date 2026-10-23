import SectionHeading from '../common/SectionHeading.jsx';
import Reveal from '../common/Reveal.jsx';
import { TESTIMONIALS } from '../../data/extras.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 bg-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t('testimonials.eyebrow')} title={t('testimonials.title')}>
          {t('testimonials.desc')}
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <Reveal
              key={item.id}
              delay={idx * 80}
              className="bg-obsidian border border-white/10 hover:border-gold/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-gold text-xs">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <i key={i} className="fa-solid fa-star" />
                    ))}
                  </div>
                  <span className="text-[11px] bg-gold/10 border border-gold/30 text-gold px-3 py-1 rounded-full">
                    {item.occasion}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">“{item.quote}”</p>
              </div>
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-gray-400">📍 {item.location}</p>
                </div>
                <i className="fa-solid fa-quote-right text-gold/30 text-2xl" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
