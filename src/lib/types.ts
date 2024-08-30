export interface PageLoad {
	languageData: LanguageData;
}

export interface LanguageData {
	current: Language;
	available: Record<string, string>;
}

export type Language = Record<string, Record<string, string>>;
