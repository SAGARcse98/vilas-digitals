import { DEFAULT_STUDIO } from '../../data/studio.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

export default function FooterBar() {
  const { t } = useLanguage();

  return (
    <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
      <p>
        © {new Date().getFullYear()}{' '}
        <strong className="text-gray-300">Vilas Digital's Photography Studio, Narasalagi</strong> (📞 {DEFAULT_STUDIO.phone}).{' '}
        {t('footer.rights')}
      </p>
      <div className="flex items-center gap-5 text-gray-400">
        <a href="#home" className="hover:text-gold transition">
          {t('footer.top')}
        </a>
        <a href="#portfolio" className="hover:text-gold transition">
          {t('nav.portfolio')}
        </a>
        <a href="#packages" className="hover:text-gold transition">
          {t('nav.packages')}
        </a>
        <a
          href="#/kit"
          title="Studio Owner's Branding & Visiting Card Kit"
          className="text-gray-600 hover:text-gold transition flex items-center gap-1"
        >
          <i className="fa-solid fa-lock text-[10px]" /> Studio Kit
        </a>
      </div>
    </div>
  );
}
