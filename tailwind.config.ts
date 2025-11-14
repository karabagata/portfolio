import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050608',
        'background-alt': '#0b0d10',
        text: '#f5f5f5',
        muted: '#8a8f98',
        accent: '#ffde57',
        'accent-soft': '#ffd95e',
        'status-active': '#38ef7d',
        'status-archived': '#ff5c5c',
        'status-experimental': '#ffd95e',
      },
      fontFamily: {
        mono: ['SF Mono', 'Menlo', 'Consolas', 'Fira Code', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
