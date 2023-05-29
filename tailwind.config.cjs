const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['col-span-2', 'col-span-3', 'col-span-4', 'col-span-6'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Alegreya', ...defaultTheme.fontFamily.serif],
				display: ['Newake', ...defaultTheme.fontFamily.sans]
			},
			screens: {
				footer: { raw: `(min-width: ${defaultTheme.screens.md}) and (min-height: 800px)` }
			}
		},
		container: {
			center: true
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
