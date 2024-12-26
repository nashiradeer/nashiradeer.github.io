/** Metadata for a language */
export interface LanguageMetadata {
	/** The name of the language */
	name: string;
	/** The code of the language */
	code: string;
}

/** A language file */
export type Language = Record<'metadata', LanguageMetadata> &
	Record<string, Record<string, string>>;

/** Base interface for a item in the showcase */
export interface IShowcaseItem {
	/** The title of the item */
	title: string;
	/** The translation key for the description of the item */
	descriptionKey: string;
	/** The image of the item */
	image: string;
	/** The URL of the item */
	url: string;
	/** Whether the URL should be localized */
	localizeUrl?: boolean;
	/** Whether the URL should be opened in a new tab */
	newTab?: boolean;
}
