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
          50: '#f5f1ed',
          100: '#e8dcc8',
          200: '#d4c4a1',
          300: '#c9b896',
          400: '#b5a17d',
          500: '#a18a64',
          600: '#8d734b',
          700: '#6b573a',
          800: '#534228',
          900: '#3b3020',
        },
        navy: {
          900: '#1a3a52',
          800: '#243d54',
          700: '#2e4056',
          600: '#384258',
        },
        neutral: {
          brown: '#9b8b7e',
          taupe: '#b5a89f',
          gray: '#8b8178',
        },
      },
    },
  },
  plugins: [],
}
