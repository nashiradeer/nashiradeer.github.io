<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import { generateAlternateLinks, localizeUrl, t } from '$lib/i18n';
</script>

<svelte:head>
	<title>{t('games', 'title')}</title>
	<meta name="description" content={t('games', 'description')} />
	<meta property="og:title" content={t('openGraph', 'games')} />
	<meta property="og:description" content={t('openGraph', 'gamesDescription')} />
	<meta property="og:url" content={'https://www.nashiradeer.com' + localizeUrl('/games')} />
	<meta property="og:image" content="https://www.nashiradeer.com/logo/protogen.png" />
	<meta property="og:image:alt" content={t('openGraph', 'imageAlt')} />
	<meta name="theme-color" content="#fb0072" />
	<link rel="canonical" href={'https://www.nashiradeer.com' + localizeUrl('/games')} />
	{@html generateAlternateLinks('/games')}
</svelte:head>

<Header selected="games" />
