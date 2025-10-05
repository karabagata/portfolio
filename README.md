# Ata KARABAG - Personal Portfolio Website

A modern, minimalist portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Features

- ✨ Clean and professional design
- 📱 Fully responsive layout
- 🎨 Smooth animations with Framer Motion
- 🚀 Fast performance with Next.js 14
- 📄 Embedded CV with PDF viewer
- 🎯 Three main sections: Home, Projects, and CV

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: SVG inline icons

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. **Important**: Replace the placeholder CV file with your actual CV:
   - Add your CV PDF file to `/public/AtaKARABAG_CV.pdf`
   - The placeholder file is just for demonstration

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx          # Root layout with Navigation and Footer
│   ├── page.tsx            # Home/About page
│   ├── projects/
│   │   └── page.tsx        # Projects page
│   ├── cv/
│   │   └── page.tsx        # CV page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar component
│   ├── Footer.tsx          # Footer component
│   └── ProjectCard.tsx     # Project card component
├── public/
│   └── AtaKARABAG_CV.pdf  # CV file (replace with actual CV)
└── Configuration files...
```

## Customization

### Update Social Links

Edit the social links in `/components/Footer.tsx`:
- GitHub: Replace `https://github.com` with your GitHub profile URL
- LinkedIn: Replace `https://linkedin.com` with your LinkedIn profile URL

### Add More Projects

Edit the `projects` array in `/app/projects/page.tsx`:
```typescript
const projects = [
  {
    title: 'Your Project Title',
    description: 'Your project description',
    tags: ['Tag1', 'Tag2', 'Tag3'],
  },
  // Add more projects...
];
```

### Change Colors

Modify colors in `/tailwind.config.ts`:
```typescript
colors: {
  background: '#f9fafb',
  accent: '#3b82f6',  // Change this to your preferred accent color
}
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

This is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Any platform supporting Node.js

## License

© 2025 Ata KARABAG. All rights reserved.

## Contact

- **Email**: ataberk.karabag@gmail.com
- **Location**: Strasbourg, France
