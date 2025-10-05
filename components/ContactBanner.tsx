'use client';

import { translations } from '@/lib/translations';
import { useLanguage } from './LanguageProvider';

export default function ContactBanner() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="contact"
      className="relative mt-20 overflow-hidden rounded-3xl border border-white/60 bg-white/85 px-6 py-10 shadow-[0_24px_60px_-30px_rgba(59,130,246,0.5)]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-sky-100/70 via-white/80 to-indigo-100/70" />
      <div className="absolute -top-20 -left-16 h-48 w-48 rounded-full bg-blue-200/40 blur-2xl" />
      <div className="absolute -bottom-24 -right-16 h-56 w-56 rounded-full bg-indigo-200/40 blur-2xl" />

      <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{t.contactBanner.title}</h2>
          <p className="mt-2 text-gray-600">{t.footer.location}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:ataberk.karabag@gmail.com"
            className="inline-flex items-center rounded-xl border border-white/60 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-accent hover:text-white"
          >
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 7.5l-8.954 4.477c-.505.252-1.086.252-1.591 0L2.25 7.5m19.5 0A2.25 2.25 0 0019.5 5.25h-15A2.25 2.25 0 002.25 7.5m19.5 0v9a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 16.5v-9"
              />
            </svg>
            {t.contactBanner.email}
          </a>
        </div>
      </div>
    </section>
  );
}

