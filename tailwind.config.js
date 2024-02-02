/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        green: '#84cc16',
        slate: '#6b7280',
        dark: '#0f172a',
        abu: '#e2e8f0',
        slay: '#f1f5f9',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

