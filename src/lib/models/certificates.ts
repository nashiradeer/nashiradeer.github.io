import type { IItem } from '$lib/types';
import { assets } from '$app/paths';
import { AWS, CSHARP, ELIXIR, PHOENIX, PYTHON, QT, UNITY } from './badges';

export let CERTIFICATES: IItem[] = [
	{
		id: 'aws',
		title: 'Amazon Web Services',
		description: '10/2024 | 37 hours',
		link: `${assets}/certificates/aws.pdf`,
		image: `${assets}/certificates/udemy.svg`,
		enableBorder: false,
		smallTitle: true,
		badges: [AWS]
	},
	{
		id: 'elixir',
		title: 'Elixir and Phoenix',
		description: '06/2024 | 14.5 hours',
		link: `${assets}/certificates/elixir.pdf`,
		image: `${assets}/certificates/udemy.svg`,
		enableBorder: false,
		smallTitle: true,
		badges: [ELIXIR, PHOENIX]
	},
	{
		id: 'system-programmer',
		title: 'System Programmer',
		description: '06/2022-09/2022 | 200 hours',
		link: `${assets}/certificates/system-programmer.pdf`,
		image: `${assets}/certificates/senac.svg`,
		enableBorder: false,
		smallTitle: true,
		badges: [QT, PYTHON]
	},
	{
		id: 'game-developer',
		title: 'Game Developer',
		description: '07/2021-10/2021 | 240 hours',
		link: `${assets}/certificates/game-developer.pdf`,
		image: `${assets}/certificates/senac.svg`,
		enableBorder: false,
		badges: [UNITY, CSHARP]
	}
];
