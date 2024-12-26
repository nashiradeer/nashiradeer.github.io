import type { Language } from '$lib/types';
import { getContext } from 'svelte';

/** Available languages */
export const AVAILABLE_LANGUAGES: Record<string, string> = {
	en: 'English',
	pt: 'Português'
};

/** Default language */
export const DEFAULT_LANGUAGE = 'en';

/** Context key for the current language */
export const I18N_KEY = Symbol('i18n');

/** Load a language file */
export async function loadLanguage(lang: string): Promise<Language> {
	if (!Object.keys(AVAILABLE_LANGUAGES).includes(lang)) {
		throw new Error(`Language ${lang} is not available`);
	}

	return (await import(`./languages/${lang}.ts`)).default;
}

/** Get the current language */
export function getLanguage(): Language {
	return getContext<() => Language>(I18N_KEY)();
}

/** Translate a string */
export function t(category: string, key: string): string {
	return getLanguage()[category]?.[key] ?? `${category}.${key}`;
}

/** Localize a URL */
export function localizeUrl(path: string): string {
	const lang = getLanguage().metadata.code;
	return lang === DEFAULT_LANGUAGE ? path : `/${lang}${path}`;
}

/** Generate alternate links */
export function generateAlternateLinks(path: string): string {
	return Object.keys(AVAILABLE_LANGUAGES)
		.map((lang) => {
			if (lang === DEFAULT_LANGUAGE) {
				return `<link rel="alternate" hreflang="x-default" href="${path}" />`;
			}

			const href = localizeUrl(path);
			return `<link rel="alternate" hreflang="${lang}" href="${href}" />`;
		})
		.join('\n');
}
