export interface PageLoad {
	language: Language;
	langCode: string;
}

export type Languages = Record<string, string | undefined>;

export type Language = Record<string, Record<string, string>>;
