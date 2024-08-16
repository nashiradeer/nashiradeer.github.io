import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Secular One"', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				sirius: '#4078f4',
				'sirius-purple': '#d062ff',
				'sirius-pink': '#ffa5e5',
				sinabar: '#ff0170',
				'sinabar-pink': '#feabc8'
			}
		}
	},
	darkMode: [
		'variant',
		['@media (prefers-color-scheme: dark) { &:not(.light *) }', '&:is(.dark *)']
	],
	plugins: []
};
