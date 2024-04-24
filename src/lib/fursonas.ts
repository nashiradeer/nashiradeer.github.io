import { assets } from '$app/paths';

export interface IFursonaImage {
	url: string;
	height?: number;
}

export interface IFursona {
	name: string;
	image?: IFursonaImage;
}

export const FURSONAS: IFursona[] = [
	{
		name: 'Sirius Liansheko',
		image: {
			url: `${assets}/fursonas/sirius.webp`
		}
	},
	{
		name: 'Sinabar',
		image: {
			url: `${assets}/fursonas/sinabar.webp`
		}
	},
	{
		name: 'Hellion Warden',
		image: {
			url: `${assets}/fursonas/hellion.webp`,
			height: 233
		}
	},
	{
		name: "Kitsu'ne",
		image: { url: `${assets}/fursonas/kitsune.webp` }
	},
	{
		name: 'Hirsuan Zoroark',
		image: { url: `${assets}/fursonas/hirsuan_zoroark.webp` }
	}
];
