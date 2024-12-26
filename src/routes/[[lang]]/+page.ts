import { AVAILABLE_LANGUAGES } from '$lib/i18n';
import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
	return Object.keys(AVAILABLE_LANGUAGES).map((lang) => ({ lang }));
};
