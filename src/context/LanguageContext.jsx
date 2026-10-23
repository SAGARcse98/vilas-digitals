import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { TRANSLATIONS } from '../i18n/translations.js';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'vd-lang';

const lookup = (dict, path) => path.split('.').reduce((obj, key) => (obj == null ? undefined : obj[key]), dict);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // storage unavailable (private mode) — ignore
    }
  }, [lang]);

  /** Translate a dotted key; falls back to English, then to the key itself. */
  const t = useCallback(
    (key) => lookup(TRANSLATIONS[lang], key) ?? lookup(TRANSLATIONS.en, key) ?? key,
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}

