<script lang="ts">
	import Config from '$lib/components/config.svelte';
	import Button from '$lib/components/button.svelte';
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
	<Config languageMenuClass="right-3 top-12" />

	<div class="flex flex-row items-center justify-center sm:mt-[30vh]">
		<img
			width="160"
			height="160"
			src="logo/protogen.svg"
			alt={t('header', 'logoAlt')}
			class="lg:w-40 lg:h-40 sm:w-32 sm:h-32 h-16 w-16"
		/>
		<h1 class="dark:text-white text-black lg:text-8xl sm:text-6xl text-4xl">
			<span class="text-sinabar">Nashira</span> <span>Deer</span>
		</h1>
	</div>
</header>
<nav>
	<ul
		class="flex flex-col sm:flex-row sm:gap-x-2 gap-y-2 sm:gap-y-0 mx-5 justify-center items-center"
	>
		<li class="max-sm:w-[284px]">
			<Button href={localizeUrl('/blog')} class="text-white text-center text-lg px-3">
				{t('header', 'blog')}
			</Button>
		</li>
		<li class="max-sm:w-[284px]">
			<Button href={localizeUrl('/games')} class="text-white text-center text-lg px-3">
				{t('header', 'games')}
			</Button>
		</li>
		<li class="max-sm:w-[284px]">
			<Button href={localizeUrl('/projects')} class="text-white text-center text-lg px-3">
				{t('header', 'projects')}
			</Button>
		</li>
		<li class="max-sm:w-[284px]">
			<Button href={localizeUrl('/certificates')} class="text-white text-center text-lg px-3">
				{t('header', 'certificates')}
			</Button>
		</li>
		<li class="max-sm:w-[284px]">
			<Button href={localizeUrl('/fursonas')} class="text-white text-center text-lg px-3">
				{t('header', 'fursonas')}
			</Button>
		</li>
	</ul>
</nav>
<section id="social-media" class="mt-3 mb-10">
	<ul class="flex flex-row flex-wrap mx-4 gap-x-2 lg:gap-y-0 gap-y-2 justify-center mt-4">
		<li>
			<Button
				href="mailto:nashiradeer@gmail.com"
				class="bg-sinabar hover:bg-sinabar border-sinabar border"
				target="_blank"
			>
				<img src="/icons/email.svg" alt="Email" height="24" width="24" />
			</Button>
		</li>
		<li>
			<Button
				href="https://www.github.com/nashiradeer"
				class="bg-black hover:bg-black border-black dark:border-white border"
				target="_blank"
			>
				<img src="/icons/github.svg" alt="GitHub" height="24" width="24" />
			</Button>
		</li>
		<li>
			<Button
				href="https://bsky.app/profile/nashiradeer.com"
				class="bg-[#0285ff] hover:bg-[#0285ff] border-[#0285ff] border"
				target="_blank"
			>
				<img src="/icons/bluesky.svg" alt="Bluesky" height="24" width="24" />
			</Button>
		</li>
		<li>
			<Button
				href="https://youtube.com/nashiradder"
				class="bg-[#ff0000] hover:bg-[#ff0000] border-[#ff0000] border"
				target="_blank"
			>
				<img class="" src="/icons/youtube.svg" alt="YouTube" height="24" width="24" />
			</Button>
		</li>
		<li>
			<Button
				href="https://linkedin.com/in/nashiradeer"
				class="bg-[#0a66c2] hover:bg-[#0a66c2] border-[#0a66c2] border"
				target="_blank"
			>
				<img src="/icons/linkedin.svg" alt="LinkedIn" height="24" width="24" /></Button
			>
		</li>
	</ul>
</section>
