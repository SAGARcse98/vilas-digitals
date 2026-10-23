import { DEFAULT_STUDIO } from '../../data/studio.js';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { buildWhatsAppUrl } from '../../utils/whatsapp.js';

/** Floating quick WhatsApp & Call action bar (bottom-left). */
export default function FloatingContactBar() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-5 left-5 z-40 flex items-center gap-2.5 no-print">
      <a
        href={buildWhatsAppUrl(DEFAULT_STUDIO.waNumber, "Hello Vilas Digital's (Narasalagi)! I want to inquire about a photography shoot.")}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 transition transform hover:scale-105"
      >
        <i className="fa-brands fa-whatsapp text-xl" />
        <span className="text-xs sm:text-sm font-bold">
          {t('floating.chat')}: {DEFAULT_STUDIO.phoneShort}
        </span>
      </a>
      <a
        href={DEFAULT_STUDIO.telHref}
        className="gold-gradient-bg text-obsidian font-bold px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 transition transform hover:scale-105"
      >
        <i className="fa-solid fa-phone-volume text-sm" />
        <span className="text-xs sm:text-sm hidden sm:inline">{t('floating.call')}</span>
      </a>
    </div>
  );
}
