import type { Language } from '$lib/types';
import { getContext, setContext } from 'svelte';

/** Context key for the current language */
export const I18N_KEY = Symbol('i18n');

/** Default language code */
export const DEFAULT_LANG = 'en';

/** Load a language file */
export async function loadLanguage(lang: string): Promise<Language> {
	return (await import(`./languages/${lang}.ts`)).default;
}

/** Set the current language */
export async function setLanguage(lang: string): Promise<void> {
	setContext(I18N_KEY, await loadLanguage(lang));
}

/** Get the current language */
export function getLanguage(): Language {
	return getContext(I18N_KEY);
}

/** Translate a string */
export function t(category: string, key: string): string {
	return getLanguage()[category]?.[key] ?? `${category}.${key}`;
}

/** Localize a URL */
export function localizeUrl(path: string): string {
	const lang = getLanguage().metadata.code;
	return lang === DEFAULT_LANG ? path : `/${lang}${path}`;
}
