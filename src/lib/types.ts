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
