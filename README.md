# Ata KARABAG — Portfolio Overview

Welcome to the source of my personal portfolio at [atakarabag.com](https://atakarabag.com).  

---

## What You’ll Find on the Site
- **Overview / Home** – A snapshot of my background as a Master’s student in Data Science & AI, plus the capabilities and tools I rely on.
- **Projects Index** – Curated highlights from the projects I’ve shipped (LLM products, geospatial analytics, forecasting systems, and more) with quick context and technology tags.
- **Curriculum Vitae** – An embedded PDF viewer and a direct download link to my most recent CV.
- **Contact & Socials** – Direct links to reach me via email, GitHub, and LinkedIn.

The layout intentionally mimics a sleek terminal interface: grouped sections, repeating vertical blocks for a “fake endless scroll,” and tooltip-enriched project tags so acronyms (e.g., `py`, `geo`, `ts`) are easy to decode at a glance.

---

## Experience Highlights
- Hands-on work with machine learning, LLM alignment, geospatial analytics, forecasting, and explainable AI.
- Building data products end-to-end: scoping pipelines, evaluating models with stakeholder-friendly explainability, and presenting insights via lightweight interfaces.
- Comfortable moving between Python (PyTorch, scikit-learn, GeoPandas), modern web stacks (Next.js, Dash, Flask), and classic tools (SQL, Bash, Git).

---

## Technology Stack
- **Framework**: Next.js 14 (App Router) for hybrid static/server rendering and fast routing.
- **Language**: TypeScript for type safety across components and data models.
- **Styling**: Tailwind CSS plus custom CSS for the terminal-inspired aesthetic and responsive layout.
- **UI Enhancements**: Inline SVG icons, custom tooltips, and a reusable `ProjectsList` component for the endless-scroll effect.
- **Assets**: Next.js `<Image>` optimization, PDF embedding via standard HTML `<iframe>`.

---

## Hosting & Deployment
- **Hosting Platform**: Vercel – ideal for Next.js, enabling zero-config builds, edge caching, and automatic HTTPS.
- **Build Pipeline**: GitHub → Vercel continuous deployment. Every push to the main branch triggers a build and redeploy.
- **Static Assets**: Served via Vercel’s CDN (including the CV PDF and brand imagery).

---

## Repository Guide
While this README targets viewers rather than contributors, here is a quick reference if you want to explore the code:

```
app/
  layout.tsx      # Shared shell with navigation & footer
  page.tsx        # Home / overview page
  projects/page.tsx
  cv/page.tsx     # Embedded CV + download link
components/
  ProjectsList.tsx   # Tag tooltips & reusable rows
  ContactBanner.tsx  # Contact call-to-action
  Navigation.tsx / Footer.tsx
lib/
  projects.ts     # Centralised structured project data
public/
  AtaKARABAG_CV.pdf  # Latest CV served on the site
```

---

## Stay in Touch
- **Website**: [atakarabag.com](https://atakarabag.com)
- **GitHub**: [github.com/karabagata](https://github.com/karabagata)
- **LinkedIn**: [linkedin.com/in/ata-berk-karabag-011619220](https://www.linkedin.com/in/ata-berk-karabag-011619220/)
- **Email**: ataberk.karabag@gmail.com

Thanks for taking the time to learn about the portfolio—feel free to explore the site and reach out if you’d like to collaborate or discuss a project.
