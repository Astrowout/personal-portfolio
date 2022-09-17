const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: [
          'Alegreya',
          ...defaultTheme.fontFamily.serif,
        ],
        display: [
          'Newake',
          ...defaultTheme.fontFamily.sans,
        ],
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
