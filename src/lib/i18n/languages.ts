import type { Language, PageLoad } from '$lib/types';
import fs from 'node:fs/promises';

export async function loadLanguage(lang: string): Promise<Language> {
	return await import(`./langs/${lang}.ts`).then((module) => module.default);
}

export async function loadLanguages(): Promise<Record<string, Language>> {
	const languages: Record<string, Language> = {};

	const files = await fs.readdir('./src/lib/i18n/langs');
	for (const file of files) {
		const content: Language = await import(`./langs/${file.slice(0, -3)}.ts`).then(
			(module) => module.default
		);
		languages[content.metadata.code] = content;
	}

	return languages;
}

export function localizedUrl(data: PageLoad, path: string): string {
	return localizedUrlWithLang(data.languageData.current.metadata.code, path);
}

export function generateAlternateLinks(data: PageLoad, path: string): string {
	return Object.entries(data.languageData.available)
		.map(
			([code]) =>
				`<link rel="alternate" hreflang="${code === 'en' ? 'x-default' : code}" href="https://www.nashiradeer.com${localizedUrlWithLang(code, path)}">`
		)
		.join('\n');
}

export function localizedUrlWithLang(lang: string, path: string): string {
	return lang === 'en' ? path : `/${lang}${path}`;
}

export function t(data: PageLoad, category: string, key: string): string {
	return data.languageData.current[category]?.[key] ?? `${category}.${key}`;
}
