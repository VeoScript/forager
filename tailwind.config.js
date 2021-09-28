const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'pure-white': '#FFFFFF',
        'ghost-white': '#FAFAFA',
        'black-matt': '#1E1E1E',
        'black-dim': '#393939',
        'dark-gray': '#4F4F4F',
        'light-gray': '#7F7F7F',
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.serif],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}