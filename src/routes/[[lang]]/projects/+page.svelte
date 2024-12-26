<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Showcase from '$lib/components/showcase.svelte';
	import { PROJECTS } from '$lib/content/projects';
	import { generateAlternateLinks, localizeUrl, t } from '$lib/i18n';
</script>

<svelte:head>
	<title>{t('projects', 'title')}</title>
	<meta name="description" content={t('projects', 'description')} />
	<meta property="og:title" content={t('openGraph', 'projects')} />
	<meta property="og:description" content={t('openGraph', 'projectsDescription')} />
	<meta property="og:url" content={'https://www.nashiradeer.com' + localizeUrl('/projects')} />
	<meta property="og:image" content="https://www.nashiradeer.com/logo/protogen.png" />
	<meta property="og:image:alt" content={t('openGraph', 'imageAlt')} />
	<meta name="theme-color" content="#fb0072" />
	<link rel="canonical" href={'https://www.nashiradeer.com' + localizeUrl('/projects')} />
	{@html generateAlternateLinks('/projects')}
</svelte:head>

<Header selected="projects" />
<h2 class="text-center text-4xl font-bold my-2">{t('projects', 'activeProjects')}</h2>
<Showcase categoryKey="projects" items={PROJECTS.filter((v) => v.activeProject)} />
<h2 class="text-center text-4xl font-bold my-2">{t('projects', 'deprecatedProjects')}</h2>
<Showcase categoryKey="projects" items={PROJECTS.filter((v) => !v.activeProject)} />
