import { assets } from '$app/paths';
import type { IFursona } from '$lib/types';

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
		name: "Kitsu'ne",
		image: { url: `${assets}/fursonas/kitsune.webp` }
	},
	{
		name: 'Aiyra Ysmir',
		image: {
			url: `${assets}/fursonas/aiyra.webp`,
			height: 219
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
		name: 'Hisuian Zoroark',
		image: { url: `${assets}/fursonas/hirsuan_zoroark.webp` }
	}
];
