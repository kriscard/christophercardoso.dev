const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.mdx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        dark: '#0B0F1A',
        lightGray: '#EEEEEE',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
}
