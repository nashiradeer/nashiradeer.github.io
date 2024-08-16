<script lang="ts">
	import Config from '$lib/components/home/config.svelte';
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
	<meta property="og:image" content="https://www.nashiradeer.com/protogen.png" />
	<meta property="og:image:alt" content={data.language['Home']['OgImageAlt']} />
	<meta name="theme-color" content="#fb0072" />
</svelte:head>

<div class="h-screen flex flex-col">
	<div class="h-12 flex justify-end p-2" id="config" />
	<div class="m-auto">
		<header class="flex flex-row items-center justify-center">
			<img width="200" height="200" src="protogen.svg" alt={data.language['Home']['LogoAlt']} />
			<h1 class="dark:text-white text-black text-9xl">
				<span class="text-sinabar">Nashira</span> <span>Deer</span>
			</h1>
		</header>
		<ul class="flex flex-row gap-x-2 justify-center mt-4 *:home-button">
			<li><a href="/about">{data.language['Home']['About']}</a></li>
			<li><a href="/blog">{data.language['Home']['Blog']}</a></li>
			<li><a href="/fursonas">{data.language['Home']['Fursonas']}</a></li>
			<li><a href="/certificates">{data.language['Home']['Certificates']}</a></li>
			<li><a href="/projects">{data.language['Home']['Projects']}</a></li>
			<li><a href="/contact">{data.language['Home']['Contact']}</a></li>
		</ul>
	</div>
	<footer class="h-12 p-2" />
</div>
