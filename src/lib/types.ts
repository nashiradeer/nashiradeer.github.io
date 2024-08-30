export interface PageLoad {
	language: Language;
	langCode: string;
	languageOptions: LanguageOption[];
}

export interface LanguageOption {
	name: string;
	value: string;
}

export type Languages = Record<string, string | undefined>;

export type Language = Record<string, Record<string, string>>;
