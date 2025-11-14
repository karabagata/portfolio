export default function CV() {
  return (
    <div className="terminal-page">
      <section className="terminal-section">
        <div className="terminal-section-label">CV</div>
        <div className="terminal-section-body">
          <p className="terminal-paragraph">
            This is the live CV I keep up to date while exploring applied machine learning roles.
            Download it, share it, or grab highlights for your team. If you prefer a PDF handoff,
            the link below always points to the current version.
          </p>
          <a
            href="/AtaKARABAG_CV.pdf"
            download="AtaKARABAG_CV.pdf"
            className="text-sm uppercase tracking-[0.24em] text-muted hover:text-accent"
          >
            Download the PDF ->
          </a>
          <div className="border border-white/10 bg-background-alt/40">
            <iframe
              src="/AtaKARABAG_CV.pdf"
              className="h-[780px] w-full md:h-[960px]"
              title="Ata Karabag CV"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
