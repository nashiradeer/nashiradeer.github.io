import { LANGUAGES } from '$lib/i18n/languages';

export function entries() {
	return Object.values(LANGUAGES).map((lang) => ({ lang: lang }));
}
