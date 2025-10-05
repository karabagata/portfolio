'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/lib/translations';

/**
 * CV Page
 * Displays embedded CV PDF and provides download option
 */
export default function CV() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-white/80" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_65%)]" />
      <div className="absolute top-6 -right-16 h-56 w-56 rounded-full bg-blue-200/40 blur-[120px] -z-30" />
      <div className="absolute bottom-4 left-0 h-60 w-60 rounded-full bg-indigo-200/40 blur-[120px] -z-30" />
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {t.cvPage.title}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {t.cvPage.subtitle}
        </p>

        {/* Download Button */}
        <a
          href="/AtaKARABAG_CV.pdf"
          download="AtaKARABAG_CV.pdf"
          className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg font-medium shadow-md hover:bg-blue-600 transition-all hover:shadow-lg"
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
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          {t.cvPage.download}
        </a>
      </motion.div>

      {/* PDF Embed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <iframe
          src="/AtaKARABAG_CV.pdf"
          className="w-full h-[800px] md:h-[1000px]"
          title="Ata KARABAG CV"
        />
        
        {/* Fallback message if PDF doesn't load */}
        <div className="p-8 text-center border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            {t.cvPage.fallback}
          </p>
          <a
            href="/AtaKARABAG_CV.pdf"
            download="AtaKARABAG_CV.pdf"
            className="inline-flex items-center text-accent hover:text-blue-600 font-medium"
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
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            {t.cvPage.fallbackDownload}
          </a>
        </div>
      </motion.div>
    </div>
  );
}
