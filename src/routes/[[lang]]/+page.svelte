<script lang="ts">
	import Config from '$lib/components/common/config.svelte';
	import About from '$lib/components/home/about.svelte';
	import Navbar from '$lib/components/home/navbar.svelte';
	import SocialMedia from '$lib/components/home/socialMedia.svelte';
	import Title from '$lib/components/home/title.svelte';
	import { generateAlternateLinks, localizedUrl, t } from '$lib/i18n/languages';
	import type { PageLoad } from '$lib/types';

	export let data: PageLoad;
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

<header>
	<Config {data} />

	<Title {data} />
</header>
<About {data} />
<SocialMedia />
<Navbar {data} />
