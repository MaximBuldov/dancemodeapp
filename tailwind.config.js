/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1677ff',
          dark: '#001529'
        },
        danger: {
          DEFAULT: 'rgb(255, 77, 79)'
        }
      }
    }
  },
  plugins: []
};
