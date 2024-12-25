import { loadLanguage } from '$lib/i18n';
import { DEFAULT_LANGUAGE } from '$lib/i18n/languages';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ params }) => {
	return {
		i18n: await loadLanguage(params.lang || DEFAULT_LANGUAGE)
	};
};
