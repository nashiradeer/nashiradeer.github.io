import type { IShowcaseItem } from '$lib/types';

/** A project in the showcase */
export interface IShowcaseProject extends IShowcaseItem {
	activeProject?: boolean;
}

/** Projects in the showcase */
export const PROJECTS: IShowcaseProject[] = [
	{
		title: "Nashira's Website",
		descriptionKey: 'nashiraDeerDescription',
		url: '/',
		image: '/images/placeholder.svg',
		activeProject: true,
		localizeUrl: true
	},
	{
		title: 'Hydrogen Bot',
		descriptionKey: 'hydrogenBotDescription',
		url: 'https://github.com/nashiradeer/hydrogen',
		image: '/images/placeholder.svg',
		newTab: true,
		activeProject: true
	},
	{
		title: 'Hydrogen I18n',
		descriptionKey: 'hydrogenI18nDescription',
		url: 'https://github.com/nashiradeer/hydrogen-framework',
		image: '/images/placeholder.svg',
		newTab: true
	},
	{
		title: 'Hydrolink',
		descriptionKey: 'hydrolinkDescription',
		url: 'https://github.com/nashiradeer/hydrogen-framework',
		image: '/images/placeholder.svg',
		newTab: true,
		activeProject: true
	},
	{
		title: 'Skyer Builder',
		descriptionKey: 'skyerBuilderDescription',
		url: 'https://github.com/nashiradeer/skyer-builder',
		image: '/images/placeholder.svg',
		newTab: true
	},
	{
		title: 'Lavalink OpenJ9',
		descriptionKey: 'lavalinkOpenJ9Description',
		url: 'https://github.com/nashiradeer/lavalink-openj9',
		image: '/images/placeholder.svg',
		newTab: true
	},
	{
		title: 'Deerlin for Jekyll',
		descriptionKey: 'deerlinForJekyllDescription',
		url: 'https://github.com/nashiradeer/deerlin-for-jekyll',
		image: '/images/placeholder.svg',
		newTab: true
	},
	{
		title: 'Brasil CoV',
		descriptionKey: 'brasilCoVDescription',
		url: 'https://github.com/nashiradeer/brasil-cov',
		image: '/images/placeholder.svg',
		newTab: true
	},
	{
		title: 'Sexy Name Calculator',
		descriptionKey: 'sexyNameCalculatorDescription',
		url: 'https://github.com/nashiradeer/sexy-name-calculator',
		image: '/images/placeholder.svg',
		newTab: true
	}
];
