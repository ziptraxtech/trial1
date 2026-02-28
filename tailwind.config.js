/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        navy: {
          900: '#05050f',
          800: '#090918',
          700: '#0e0e22',
          600: '#13132e',
        },
        neutral: {
          brown: '#818cf8',
          taupe: '#a5b4fc',
          gray: '#6366f1',
        },
        neon: {
          purple: '#a855f7',
          blue: '#3b82f6',
          violet: '#8b5cf6',
          pink: '#e879f9',
        },
      },
    },
  },
  plugins: [],
}
