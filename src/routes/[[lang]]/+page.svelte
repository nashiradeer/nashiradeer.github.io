<script lang="ts">
	import Config from '$lib/components/common/config.svelte';
	import About from '$lib/components/home/about.svelte';
	import Navbar from '$lib/components/home/navbar.svelte';
	import SocialMedia from '$lib/components/home/socialMedia.svelte';
	import Title from '$lib/components/home/title.svelte';
	import { generateAlternateLinks, localizeUrl, t } from '$lib/i18n';
</script>

<svelte:head>
	<title>{t('home', 'title')}</title>
	<meta name="description" content={t('home', 'description')} />
	<meta property="og:title" content={t('openGraph', 'home')} />
	<meta property="og:description" content={t('openGraph', 'homeDescription')} />
	<meta property="og:url" content={'https://www.nashiradeer.com' + localizeUrl('/')} />
	<meta property="og:image" content="https://www.nashiradeer.com/logo/protogen.png" />
	<meta property="og:image:alt" content={t('openGraph', 'imageAlt')} />
	<meta name="theme-color" content="#fb0072" />
	<link rel="canonical" href={'https://www.nashiradeer.com' + localizeUrl('/')} />
	{@html generateAlternateLinks('/')}
</svelte:head>

<header>
	<Config />

	<Title />
</header>
<About />
<SocialMedia />
<Navbar />
