import type { Language } from '../../types';

const lang: Language = {
	metadata: {
		name: 'English',
		code: 'en'
	},
	openGraph: {
		home: 'Nashira Deer',
		homeDescription:
			'My personal website features her contact information, fursonas, certificates, projects, and a blog.',
		games: 'Nashira Deer // Games',
		gamesDescription: 'A collection of games developed or published by me.',
		projects: 'Nashira Deer // Projects',
		projectsDescription: 'A collection of active and deprecated projects by me.',
		imageAlt: 'Sinabar, the protogen.'
	},
	config: {
		toggleTheme: 'Toggle theme',
		changeLanguage: 'Change language'
	},
	header: {
		menu: 'Menu',
		blog: 'Blog',
		fursonas: 'Fursonas',
		certificates: 'Certificates',
		projects: 'Projects',
		games: 'Games',
		logoAlt: 'Sinabar, the protogen.'
	},
	home: {
		title: 'Nashira Deer',
		description:
			"Nashira Deer's personal website features her contact information, fursonas, certificates, projects, and a blog."
	},
	games: {
		title: 'Nashira Deer // Games',
		description: 'A collection of games developed or published by Nashira Deer.',
		developedGames: 'Developed Games',
		demaintenanceToolDescription:
			"A game about a maintenance tool that doesn't want to work. Created to the Global Game Jam 2024.",
		jekyllNHydeDescription:
			'A terror game about a Jekyll and Hyde-like character. Created to the Global Game Jam 2022.',
		theLegendOfBaianaDescription:
			'A game about the culture of Bahia, Brazil. Created to conclude the Game Development course at Senac Bahia.',
		loptamaDescription: 'A bullet hell game created during Senac Bahia Game Development course.'
	},
	projects: {
		title: 'Nashira Deer // Projects',
		description: 'A collection of active and deprecated projects by Nashira Deer.',
		activeProjects: 'Active Projects',
		deprecatedProjects: 'Deprecated Projects',
		nashiraDeerDescription:
			'This website, created to be my personal website and blog with SvelteKit and Tailwind CSS.',
		hydrogenBotDescription: 'A Discord music bot created with Lavalink, Rust and Serenity.',
		hydrogenI18nDescription: 'Internationalization library used by Hydrogen Bot.',
		hydrolinkDescription: 'A Lavalink client for Rust.',
		skyerBuilderDescription: 'A multi-target build system for Unity.',
		lavalinkOpenJ9Description: 'A Lavalink Docker image using OpenJ9 JVM.',
		deerlinForJekyllDescription: 'Deerlin theme implemented for Jekyll.',
		brasilCoVDescription: 'A Qt application to monitor COVID-19 cases in Brazil and the world.',
		sexyNameCalculatorDescription: 'A calculator to find out how sexy your name is.'
	}
};

export default lang;
