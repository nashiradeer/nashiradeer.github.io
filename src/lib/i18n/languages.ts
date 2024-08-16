import type { Languages, Language } from '$lib/types';

export const LANGUAGES: Languages = {
	English: undefined,
	Português: 'pt'
};

export async function loadLanguage(lang: string): Promise<Language> {
	return await import(`./langs/${lang}.ts`).then((module) => module.default);
}
