import { loadLanguages } from '$lib/i18n/languages';
import type { PageLoad } from '$lib/types';

export async function load({ params }): Promise<PageLoad> {
	const allLanguages = await loadLanguages();

	return {
		languageData: {
			current: allLanguages[params.lang ?? 'en'],
			available: Object.fromEntries(
				Object.entries(allLanguages).map(([code, lang]) => [code, lang.metadata.name])
			)
		}
	};
}

export const prerender = true;
