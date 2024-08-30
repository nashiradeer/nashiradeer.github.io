import { LANGUAGES, loadLanguage } from '$lib/i18n/languages';
import type { PageLoad } from '$lib/types';

export async function load({ params }): Promise<PageLoad> {
	const langCode = params.lang ?? 'en';

	const langCodes = Object.values(LANGUAGES).map((lang) => lang ?? 'en');
	const languageOptions = [];
	for (const lang of langCodes) {
		languageOptions.push({
			name: lang,
			value: (await loadLanguage(lang))['Metadata']['Name']
		});
	}

	return {
		language: await loadLanguage(langCode),
		languageOptions,
		langCode
	};
}

export const prerender = true;
