'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from './LanguageProvider';
import { translations } from '@/lib/translations';

/**
 * Navigation component - sticky header with page links
 * Highlights the current active page
 */
export default function Navigation() {
  const pathname = usePathname();
  const { language } = useLanguage();

  const t = translations[language];

  const links = [
    { href: '/', label: t.navigation.home },
    { href: '/projects', label: t.navigation.projects },
    { href: '/cv', label: t.navigation.cv },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/60 shadow-[0_6px_30px_-24px_rgba(59,130,246,0.6)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Name */}
          <Link 
            href="/" 
            className="text-xl font-bold text-gray-900 hover:text-accent transition-colors"
          >
            Ata KARABAG
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-accent to-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-sky-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center rounded-lg border border-accent/20 bg-white px-4 py-2 text-sm font-semibold text-accent shadow-sm transition hover:bg-accent hover:text-white"
            >
              {t.navigation.contact}
            </Link>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
