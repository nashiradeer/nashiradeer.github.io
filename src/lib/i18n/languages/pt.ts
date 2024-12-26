import type { Language } from '../../types';

const lang: Language = {
	metadata: {
		name: 'Português',
		code: 'pt'
	},
	openGraph: {
		home: 'Nashira Deer',
		homeDescription:
			'Meu site pessoal com informações de contato, fursonas, certificados, projetos e um blog.',
		games: 'Nashira Deer // Jogos',
		gamesDescription: 'Uma coleção de jogos desenvolvidos ou publicados por mim.',
		projects: 'Nashira Deer // Projetos',
		projectsDescription: 'Uma coleção de projetos ativos e descontinuados por mim.',
		imageAlt: 'Sinabar, o protogen.'
	},
	config: {
		toggleTheme: 'Alternar tema',
		changeLanguage: 'Mudar idioma'
	},
	header: {
		menu: 'Menu',
		blog: 'Blog',
		fursonas: 'Fursonas',
		certificates: 'Certificados',
		projects: 'Projetos',
		games: 'Jogos',
		logoAlt: 'Sinabar, o protogen.'
	},
	home: {
		title: 'Nashira Deer',
		description:
			'O site pessoal de Nashira Deer com informações de contato, fursonas, certificados, projetos e um blog.'
	},
	games: {
		title: 'Nashira Deer // Games',
		description: 'Uma coleção de jogos desenvolvidos ou publicados por Nashira Deer.',
		developedGames: 'Jogos Desenvolvidos',
		demaintenanceToolDescription:
			'Um jogo sobre uma ferramenta de manutenção que não quer funcionar. Criado para a Global Game Jam 2024.',
		jekyllNHydeDescription:
			'Um jogo de terror sobre um personagem semelhante a Jekyll e Hyde. Criado para a Global Game Jam 2022.',
		theLegendOfBaianaDescription:
			'Um jogo sobre a cultura da Bahia, Brasil. Criado para concluir o curso de Desenvolvimento de Jogos no Senac Bahia.',
		loptamaDescription:
			'Um jogo bullet hell criado durante o curso de Desenvolvimento de Jogos no Senac Bahia.'
	},
	projects: {
		title: 'Nashira Deer // Projetos',
		description: 'Uma coleção de projetos ativos e descontinuados por Nashira Deer.',
		activeProjects: 'Projetos Ativos',
		deprecatedProjects: 'Projetos Descontinuados',
		nashiraDeerDescription:
			'Este site, criado para ser meu site pessoal e blog com SvelteKit e Tailwind CSS.',
		hydrogenBotDescription: 'Um bot de música para Discord criado com Lavalink, Rust e Serenity.',
		hydrogenI18nDescription: 'Biblioteca de internacionalização usada pelo Hydrogen Bot.',
		hydrolinkDescription: 'Um cliente Lavalink para Rust.',
		skyerBuilderDescription: 'Um sistema de compilação multi alvo para Unity.',
		lavalinkOpenJ9Description: 'Uma imagem Docker Lavalink usando OpenJ9 JVM.',
		deerlinForJekyllDescription: 'Tema Deerlin implementado para Jekyll.',
		brasilCoVDescription:
			'Um aplicativo em Qt para visualizar dados da COVID-19 no Brasil e no mundo.',
		sexyNameCalculatorDescription: 'Uma calculadora para descobrir o quão sexy é o seu nome.'
	}
};

export default lang;
