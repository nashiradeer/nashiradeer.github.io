import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE, loadLanguage } from '$lib/i18n';
import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ params }) => {
	if (params.lang && !Object.keys(AVAILABLE_LANGUAGES).includes(params.lang)) {
		return error(404, {
			message: 'Not Found'
		});
	}

	return {
		i18n: await loadLanguage(params.lang || DEFAULT_LANGUAGE)
	};
};
