import { assets } from '$app/paths';
import {
	CPP,
	CSHARP,
	DART,
	DOCKER,
	FLUTTER,
	HTML,
	JEKYLL,
	QT,
	RUST,
	SVELTE,
	TYPESCRIPT,
	UNITY,
	type IBadge
} from './badges';

export interface IProject {
	id: string;
	title: string;
	image?: string;
	link?: string;
	description?: string;
	badges: IBadge[];
}

export const PROJECTS: IProject[] = [
	{
		id: 'nashira-website',
		title: "Nashira's Website",
		description: "You're looking at it! My personal website.",
		link: 'https://www.nashiradeer.com',
		badges: [SVELTE, TYPESCRIPT]
	},
	{
		id: 'mexanyd-desktop',
		title: 'Mexanyd Desktop',
		description: 'A desktop application for auto parts store management.',
		badges: [FLUTTER, DART]
	},
	{
		id: 'hydrogen',
		title: 'Hydrogen',
		description: 'A Discord bot for managing RPG campaigns and music playback.',
		link: 'https://github.com/nashiradeer/hydrogen',
		image: `${assets}/projects/hydrogen.svg`,
		badges: [RUST]
	},
	{
		id: 'hydrogen-i18n',
		title: 'Hydrogen: I18n',
		description: 'Server-side internationalization for bots and services.',
		link: 'https://github.com/nashiradeer/hydrogen-i18n',
		image: `${assets}/projects/hydrogen.svg`,
		badges: [RUST]
	},
	{
		id: 'hydrolink',
		title: 'Hydrolink',
		description: 'A Lavalink client for Rust.',
		link: 'https://github.com/nashiradeer/hydrolink',
		image: `${assets}/projects/hydrogen.svg`,
		badges: [RUST]
	},
	{
		id: 'ggj24-game',
		title: 'Demaintenance Tool',
		description:
			"A game about a maintenance tool that doesn't want to work. Created to the Global Game Jam 2024.",
		link: 'https://github.com/nashiradeer/ggj24-game',
		badges: [RUST]
	},
	{
		id: 'ggj22-game',
		title: "Jekyll'n'Hyde",
		description:
			'A terror game about a Jekyll and Hyde-like character. Created to the Global Game Jam 2022.',
		link: 'https://github.com/nashiradeer/jekyll-n-hyde',
		image: `${assets}/projects/jekyll-n-hyde.svg`,
		badges: [UNITY, CSHARP]
	},
	{
		id: 'the-legend-of-baiana',
		title: 'The Legend of Baiana',
		description:
			'A game about the culture of Bahia, Brazil. Created to conclude the Game Development course at Senac Bahia.',
		link: 'https://gamejolt.com/games/thelegendofbaiana/653596',
		image: `${assets}/projects/the-legend-of-baiana.webp`,
		badges: [UNITY, CSHARP]
	},
	{
		id: 'loptama',
		title: 'Loptama',
		description: 'A bullet hell game created during Senac Bahia Game Development course.',
		link: 'https://gamejolt.com/games/loptama/650358',
		image: `${assets}/projects/loptama.webp`,
		badges: [UNITY, CSHARP]
	},
	{
		id: 'skyer-builder',
		title: 'Skyer Builder',
		description: 'A tool for building Unity games to multiple platforms at once.',
		link: 'https://github.com/nashiradeer/skyer-builder',
		badges: [UNITY, CSHARP]
	},
	{
		id: 'hellion',
		title: 'Hellion',
		description: 'A music Discord bot.',
		badges: [TYPESCRIPT]
	},
	{
		id: 'lavalink-openj9',
		title: 'Lavalink OpenJ9',
		description: 'A Lavalink server with OpenJ9 JVM.',
		link: 'https://github.com/nashiradeer/lavalink-openj9',
		badges: [DOCKER]
	},
	{
		id: 'deerlin-for-jekyll',
		title: 'Deerlin for Jekyll',
		description: 'A Jekyll theme for personal websites.',
		link: 'https://github.com/nashiradeer/deerlin-for-jekyll',
		badges: [JEKYLL, HTML]
	},
	{
		id: 'brasil-cov',
		title: 'Brasil CoV',
		description: 'A COVID-19 data visualization tool for Brazil.',
		link: 'https://github.com/nashiradeer/brasil-cov',
		badges: [QT, CPP]
	},
	{
		id: 'sexy-name-calculator',
		title: 'Sexy Name Calculator',
		description: 'A calculator that tells you how sexy your name is based on a meme image.',
		link: 'https://github.com/nashiradeer/sexy-name-calculator',
		badges: [HTML]
	}
];
