import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Secular One"', ...defaultTheme.fontFamily.sans]
			}
		},
		colors: {
			sirius: '#0059ff',
			sinabar: '#fb0072',
			purrple: '#8400ff',
			...colors
		}
	},
	darkMode: [
		'variant',
		['@media (prefers-color-scheme: dark) { &:not(.light *) }', '&:is(.dark *)']
	],
	plugins: []
};
