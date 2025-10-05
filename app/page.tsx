'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactBanner from '@/components/ContactBanner';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/lib/translations';

/**
 * Home / About Page
 * Presents Ata KARABAG's introduction, summary, and contact banner
 */
export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mb-20 overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-8 md:p-12 shadow-[0_20px_45px_-24px_rgba(59,130,246,0.7)] backdrop-blur"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 120% at 20% 10%, rgba(59,130,246,0.18) 0%, rgba(255,255,255,0) 60%), radial-gradient(130% 130% at 85% 15%, rgba(56,189,248,0.16) 0%, rgba(255,255,255,0) 65%), radial-gradient(110% 110% at 15% 90%, rgba(129,140,248,0.2) 0%, rgba(255,255,255,0) 60%), linear-gradient(140deg, rgba(255,255,255,0.97) 0%, rgba(248,250,252,0.92) 100%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-70"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.35) 1.2px, transparent 1.2px)',
            backgroundSize: '22px 22px',
          }}
        />
        <div className="absolute -top-24 -right-32 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-blue-200/40 via-blue-100/20 to-indigo-200/40 blur-3xl" />
        <div className="absolute -bottom-36 -left-28 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-indigo-200/40 via-sky-100/20 to-blue-200/40 blur-[110px]" />
        <div className="absolute inset-x-0 -bottom-16 h-40 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.28),transparent_70%)]" />

        <div className="relative">
          {/* Introduction Text */}
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              {t.hero.greeting}{' '}<span className="text-accent">Ata KARABAG</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-3 leading-relaxed"
            >
              {t.hero.intro}{' '}
              {t.hero.passion}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-500 mb-6 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {t.hero.location}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link
                href="/projects"
                className="px-6 py-3 bg-accent text-white rounded-lg font-medium shadow-md hover:bg-blue-600 transition-all hover:shadow-lg"
              >
                {t.hero.actions.projects}
              </Link>
              <Link
                href="/cv"
                className="px-6 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-lg font-medium hover:border-accent hover:text-accent transition-all shadow-sm hover:shadow-md"
              >
                {t.hero.actions.cv}
              </Link>
              <a
                href="mailto:ataberk.karabag@gmail.com"
                className="px-6 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-lg font-medium hover:border-accent hover:text-accent transition-all shadow-sm hover:shadow-md"
              >
                {t.hero.actions.contact}
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Profile Summary Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-br from-white/80 via-sky-50/90 to-blue-100/80 p-8 md:p-10 shadow-[0_30px_60px_-40px_rgba(59,130,246,0.9)]"
      >
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_60%)]" />
        <div className="absolute -top-16 -right-20 h-36 w-36 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="relative">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.about.title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {t.about.summary}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{t.about.skills.mlTitle}</h3>
                <p className="text-sm text-gray-600">{t.about.skills.mlText}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{t.about.skills.daTitle}</h3>
                <p className="text-sm text-gray-600">{t.about.skills.daText}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{t.about.skills.devTitle}</h3>
                <p className="text-sm text-gray-600">{t.about.skills.devText}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="mt-20">
        <ContactBanner />
      </div>
    </div>
  );
}

