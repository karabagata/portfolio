'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Overview' },
  { href: '/projects', label: 'Projects' },
  { href: '/cv', label: 'CV' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.4em] text-muted transition-colors hover:text-accent"
        >
          ATA KARABAG
        </Link>
        <div className="flex items-center gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.7rem] uppercase tracking-[0.28em] transition-colors ${
                  isActive ? 'text-accent' : 'text-muted hover:text-text'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <a
            href="mailto:ataberk.karabag@gmail.com"
            className="hidden text-[0.7rem] uppercase tracking-[0.28em] text-muted transition-colors hover:text-accent sm:inline-flex"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
