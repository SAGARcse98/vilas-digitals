import SectionHeading from '../common/SectionHeading.jsx';
import ServiceGroup from './ServiceGroup.jsx';
import Reveal from '../common/Reveal.jsx';
import { OUTDOOR_SERVICES, STUDIO_SERVICES } from '../../data/services.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-obsidian border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-14" eyebrow={t('services.eyebrow')} title={t('services.title')}>
          {t('services.desc')}
        </SectionHeading>

        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <ServiceGroup
              eyebrow="On-Location & Production"
              title="Events, Weddings & Commercial"
              icon="fa-camera-retro"
              services={OUTDOOR_SERVICES}
            />
          </Reveal>
          <Reveal delay={120}>
            <ServiceGroup eyebrow="Walk-In Studio & Lab" title="In-Studio & Custom Print Hub" icon="fa-print" services={STUDIO_SERVICES} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
