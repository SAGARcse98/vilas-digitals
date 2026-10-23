import { useStudio } from '../../context/StudioContext.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { DEFAULT_STUDIO } from '../../data/studio.js';

export default function ContactInfo() {
  const { studio } = useStudio();
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">{t('booking.eyebrow')}</span>
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">{t('booking.title')}</h2>
      <p className="text-gray-400 text-sm leading-relaxed">{t('booking.desc')}</p>

      <div className="space-y-4 pt-2">
        <a
          href={DEFAULT_STUDIO.telHref}
          className="flex items-start gap-4 p-4 rounded-2xl bg-charcoal border border-white/10 hover:border-gold/50 transition group"
        >
          <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-obsidian transition">
            <i className="fa-solid fa-phone-volume" />
          </div>
          <div>
            <p className="text-xs text-gray-400">{t('booking.callLabel')}</p>
            <p className="text-base font-semibold text-white group-hover:text-gold transition">{studio.phone}</p>
          </div>
        </a>

        <a
          href={DEFAULT_STUDIO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-4 rounded-2xl bg-charcoal border border-white/10 hover:border-gold/50 transition group"
        >
          <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-obsidian transition">
            <i className="fa-solid fa-location-dot" />
          </div>
          <div>
            <p className="text-xs text-gray-400">{t('booking.locationLabel')}</p>
            <p className="text-sm font-medium text-white group-hover:text-gold transition">
              Vilas Digital's Studio, {studio.address}, Karnataka
            </p>
          </div>
        </a>

        <div className="flex items-start gap-4 p-4 rounded-2xl bg-charcoal border border-white/10">
          <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold flex items-center justify-center shrink-0">
            <i className="fa-regular fa-clock" />
          </div>
          <div>
            <p className="text-xs text-gray-400">{t('booking.timingsLabel')}</p>
            <p className="text-sm font-medium text-white">{t('booking.timings')}</p>
          </div>
        </div>
      </div>

      {/* Live Google Maps Embed for Narasalagi */}
      <div className="rounded-2xl overflow-hidden border border-white/10 h-48 bg-charcoal">
        <iframe
          title={t('booking.mapTitle')}
          src={DEFAULT_STUDIO.mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0 grayscale contrast-125 opacity-85 hover:grayscale-0 hover:opacity-100 transition duration-500"
        />
      </div>
    </div>
  );
}
