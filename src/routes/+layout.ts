import { loadLanguage } from '$lib/i18n/languages';
import type { PageLoad } from '$lib/types';

export async function load({ params }): Promise<PageLoad> {
	const langCode = params.lang ?? 'en';

	return {
		language: await loadLanguage(langCode),
		langCode
	};
}

export const prerender = true;
