'use client';

/**
 * Footer component with contact information and social links
 */

import { useLanguage } from './LanguageProvider';
import { translations } from '@/lib/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="relative mt-20 bg-white/80 backdrop-blur-xl border-t border-white/60">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-100/60 via-transparent to-indigo-100/60" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <p className="text-gray-600">
              <a 
                href="mailto:ataberk.karabag@gmail.com" 
                className="hover:text-accent transition-colors"
              >
                ataberk.karabag@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {t.footer.location}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href={t.footer.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-white/60 text-center">
          <p className="text-sm text-gray-500">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
