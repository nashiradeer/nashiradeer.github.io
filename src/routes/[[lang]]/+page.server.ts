import { loadLanguages } from '$lib/i18n/languages';

export async function entries() {
	return Object.keys(await loadLanguages()).map((lang) => ({ lang: lang }));
}
