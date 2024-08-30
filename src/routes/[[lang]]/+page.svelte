<script lang="ts">
	import Config from '$lib/components/home/config.svelte';
	import I18nLink from '$lib/i18n/link.svelte';
	import { buildUrl, LANGUAGES, loadLanguage } from '$lib/i18n/languages';
	import type { PageLoad } from '$lib/types';
	import { onMount } from 'svelte';

	export let data: PageLoad;

	onMount(() => {
		new Config({ target: document.getElementById('config')! });
	});
</script>

<svelte:head>
	<title>{data.language['Home']['HeadTitle']}</title>
	<meta name="description" content={data.language['Home']['HeadDescription']} />
	<meta property="og:title" content={data.language['Home']['OgTitle']} />
	<meta property="og:description" content={data.language['Home']['OgDescription']} />
	<meta property="og:url" content="https://www.nashiradeer.com/" />
	<meta property="og:image" content="https://www.nashiradeer.com/logo/protogen.png" />
	<meta property="og:image:alt" content={data.language['Home']['OgImageAlt']} />
	<meta name="theme-color" content="#fb0072" />
</svelte:head>

<div class="h-screen flex flex-col">
	<div class="h-12 flex justify-end p-2" id="config">
		<input type="checkbox" id="lang-menu" class="hidden peer" />
		<label for="lang-menu" class="mr-1 px-1 flex flex-row items-center cursor-pointer select-none">
			{data.language['Metadata']['Code'].toUpperCase()}
		</label>
		<ul
			class="absolute right-3 top-12 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-md hidden peer-checked:block"
		>
			{#each data.languageOptions as lang}
				<li>
					<a href={(lang.name == 'en' ? '' : lang.name) + '/'} class="block p-2">
						{lang.value}
					</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="m-auto">
		<header class="flex flex-row items-center justify-center">
			<img
				width="160"
				height="160"
				src="logo/protogen.svg"
				alt={data.language['Home']['LogoAlt']}
				class="lg:w-40 lg:h-40 sm:w-20 sm:h-20 h-16 w-16"
			/>
			<h1 class="dark:text-white text-black lg:text-9xl sm:text-6xl text-4xl">
				<span class="text-sinabar">Nashira</span> <span>Deer</span>
			</h1>
		</header>
		<ul
			class="flex lg:flex-row flex-col lg:gap-x-2 lg:gap-y-0 gap-y-2 justify-center mt-4 *:home-button"
		>
			<li><I18nLink {data} href="/about" category="Home" key="About" /></li>
			<li><I18nLink {data} href="/blog" category="Home" key="Blog" /></li>
			<li><I18nLink {data} href="/fursonas" category="Home" key="Fursonas" /></li>
			<li><I18nLink {data} href="/certificates" category="Home" key="Certificates" /></li>
			<li><I18nLink {data} href="/projects" category="Home" key="Projects" /></li>
			<li><I18nLink {data} href="/contact" category="Home" key="Contact" /></li>
		</ul>
	</div>
	<footer class="h-12 p-2" />
</div>
