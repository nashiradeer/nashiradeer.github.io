export interface IBadge {
	name: string;
	image: string;
}

export interface IItem {
	id: string;
	title: string;
	image?: string;
	link?: string;
	description?: string;
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