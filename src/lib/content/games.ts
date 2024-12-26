import type { IShowcaseItem } from '$lib/types';

/** A game in the showcase */
export interface IShowcaseGame extends IShowcaseItem {
	/** Whether the game is only published by me */
	onlyPublished?: boolean;
}

/** Games in the showcase */
export const GAMES: IShowcaseGame[] = [
	{
		title: 'Demaintenance Tool',
		descriptionKey: 'demaintenanceToolDescription',
		url: 'https://globalgamejam.org/games/2024/demaintenance-tool-7',
		image: '/images/placeholder.svg',
		newTab: true
	},
	{
		title: "Jekyll'n'Hyde",
		descriptionKey: 'jekyllNHydeDescription',
		url: 'https://v3.globalgamejam.org/2022/games/jekyll-e-hyde-5',
		image: '/images/placeholder.svg',
		newTab: true
	},
	{
		title: 'The Legend of Baiana',
		descriptionKey: 'theLegendOfBaianaDescription',
		url: 'https://gamejolt.com/games/thelegendofbaiana/653596',
		image: '/images/placeholder.svg',
		newTab: true
	},
	{
		title: 'Loptama',
		descriptionKey: 'loptamaDescription',
		url: 'https://gamejolt.com/games/loptama/650358',
		image: '/images/placeholder.svg',
		newTab: true
	}
];
