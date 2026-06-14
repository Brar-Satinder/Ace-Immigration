/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f1419',
        'dark-secondary': '#1a1f2e',
        'accent-blue': '#0ea5e9',
      },
    },
  },
  plugins: [],
}
