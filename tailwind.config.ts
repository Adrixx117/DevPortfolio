import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        graphite: '#111111',
        silver: '#d1d1d1',
      },
      fontFamily: {
        sf: [
          'SF Pro Display',
          'SF Pro Text',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
} satisfies Config



