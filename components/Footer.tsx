import type { ReactNode } from 'react'

type SocialLink = {
  label: string
  href: string
  icon: ReactNode
}

const socials: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ata-berk-karabag-011619220/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5Zm-11 19H5V9h3v10Zm-1.5-11.4a1.74 1.74 0 1 1 0-3.48 1.74 1.74 0 0 1 0 3.48ZM20 19h-3v-5.4c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.82V19h-3V9h2.88v1.37h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.56 1.98 3.56 4.55V19Z"
        />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/karabagata',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .3a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.36-1.32-1.72-1.32-1.72-1.08-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.06 1.83 2.8 1.3 3.48.99.1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3Z"
        />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl">
        <div className="footer-grid">
          <div className="footer-meta">
            <span>Strasbourg (soon to be Paris), France</span>
            <a href="mailto:ataberk.karabag@gmail.com">ataberk.karabag@gmail.com</a>
          </div>
          <div className="footer-links">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                <span className="footer-link-icon" aria-hidden="true">
                  {social.icon}
                </span>
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">© 2025 Ata Karabag. All rights reserved.</div>
      </div>
    </footer>
  )
}
