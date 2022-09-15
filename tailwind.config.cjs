const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
      },
      fontFamily: {
        display: [
          'Newake',
          ...defaultTheme.fontFamily.sans,
        ]
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
