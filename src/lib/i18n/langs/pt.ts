import type { Language } from '../../types';

const lang: Language = {
	metadata: {
		name: 'Português',
		code: 'pt'
	},
	openGraph: {
		home: 'Nashira Deer',
		homeDescription:
			'Meu site pessoal contendo meus contatos, fursonas, certificados e projetos, além de um blog e um pouco da minha jornada.',
		imageAlt: 'Sinabar, o protogen.'
	},
	home: {
		title: 'Nashira Deer',
		description:
			'Site pessoal de Nashira Deer contendo informações de contato, seus fursonas, certificados e projetos, além de um blog e um pouco sobre sua jornada.',
		logoAlt: 'Sinabar, o protogen.',
		blog: 'Blog',
		fursonas: 'Fursonas',
		certificates: 'Certificados',
		projects: 'Projetos',
		about: `Olá! Meu nome é Deyvid da Silva Costa, mas você também pode me chamar de Nashira Deer ou Kitsu'ne. Eu
amo programar e fazer quase qualquer coisa, ainda mais em Rust, Elixir, Go e Typescript. Atualmente,
minha stack é Elixir e Go para o back end, Svelte e React para o front end, Flutter para
mobile, e Rust para qualquer outra coisa.`
	}
};

export default lang;
