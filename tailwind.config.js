const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    /*colors: {*/
      //orange: colors.amber
    /*},*/
    extend: {}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
