'use client';

import { useLanguage } from './LanguageProvider';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  const nextLanguage = language === 'en' ? 'fr' : 'en';

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="inline-flex items-center rounded-lg border border-white/60 bg-white/80 px-3 py-1 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-sky-100"
      aria-label={language === 'en' ? 'Passer en français' : 'Switch to English'}
    >
      {nextLanguage.toUpperCase()}
    </button>
  );
}

