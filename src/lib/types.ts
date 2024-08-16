export interface PageLoad {
	language: Language;
	langCode: string;
}

export type Languages = Record<string, string | undefined>;

export type Language = Record<string, Record<string, string>>;

export interface IBadge {
	name: string;
	image: string;
}

export interface IItem {
	id: string;
	title: string;
	image?: string;
	link?: string;
	link_text?: string;
	description?: string;
	enableBorder?: boolean;
	smallTitle?: boolean;
	badges: IBadge[];
}

export interface IFursonaImage {
	url: string;
	height?: number;
}

export interface IFursona {
	name: string;
	image?: IFursonaImage;
}
