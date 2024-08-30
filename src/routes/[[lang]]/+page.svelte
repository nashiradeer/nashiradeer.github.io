<script lang="ts">
	import Config from '$lib/components/home/config.svelte';
	import { generateAlternateLinks, localizedUrl, t } from '$lib/i18n/languages';
	import type { PageLoad } from '$lib/types';
	import { onMount } from 'svelte';
	import LanguageSwitch from '$lib/components/common/languageSwitch.svelte';

	export let data: PageLoad;

	onMount(() => {
		new Config({ target: document.getElementById('config')! });
	});
</script>

<svelte:head>
	<title>{t(data, 'home', 'title')}</title>
	<meta name="description" content={t(data, 'home', 'description')} />
	<meta property="og:title" content={t(data, 'openGraph', 'home')} />
	<meta property="og:description" content={t(data, 'openGraph', 'homeDescription')} />
	<meta property="og:url" content={'https://www.nashiradeer.com' + localizedUrl(data, '/')} />
	<meta property="og:image" content="https://www.nashiradeer.com/logo/protogen.png" />
	<meta property="og:image:alt" content={t(data, 'openGraph', 'imageAlt')} />
	<meta name="theme-color" content="#fb0072" />
	<link rel="canonical" href={'https://www.nashiradeer.com' + localizedUrl(data, '/')} />
	{@html generateAlternateLinks(data, '/')}
</svelte:head>

<div class="h-screen flex flex-col">
	<div class="h-12 flex justify-end p-2" id="config">
		<LanguageSwitch {data} />
	</div>
	<div class="m-auto">
		<header class="flex flex-row items-center justify-center">
			<img
				width="160"
				height="160"
				src="logo/protogen.svg"
				alt={t(data, 'home', 'logoAlt')}
				class="lg:w-40 lg:h-40 sm:w-20 sm:h-20 h-16 w-16"
			/>
			<h1 class="dark:text-white text-black lg:text-9xl sm:text-6xl text-4xl">
				<span class="text-sinabar">Nashira</span> <span>Deer</span>
			</h1>
		</header>
		<ul
			class="flex lg:flex-row flex-col lg:gap-x-2 lg:gap-y-0 gap-y-2 justify-center mt-4 *:home-button"
		>
			<li><a href={localizedUrl(data, '/blog')}>{t(data, 'home', 'blog')}</a></li>
			<li><a href={localizedUrl(data, '/fursonas')}>{t(data, 'home', 'fursonas')}</a></li>
			<li><a href={localizedUrl(data, '/certificates')}>{t(data, 'home', 'certificates')}</a></li>
			<li><a href={localizedUrl(data, '/projects')}>{t(data, 'home', 'projects')}</a></li>
		</ul>
	</div>
	<footer class="h-12 p-2" />
</div>
