const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
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
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">© 2025 Ata Karabag. All rights reserved.</div>
      </div>
    </footer>
  )
}
