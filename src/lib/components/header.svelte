<script lang="ts">
	import { localizeUrl, t } from '$lib/i18n';
	import { twMerge } from 'tailwind-merge';
	import Button from './ui/button.svelte';
	import { mount, onMount } from 'svelte';
	import HeaderSidebar from './header-sidebar.svelte';

	interface HeaderProps {
		selected?: 'blog' | 'games' | 'projects' | 'certificates' | 'fursonas';
	}

	let props: HeaderProps = $props();

	let sidebar = $state(false);

	function toggleSidebar() {
		sidebar = !sidebar;
	}

	onMount(() => {
		mount(HeaderSidebar, {
			props: { onclick: toggleSidebar },
			target: document.querySelector('header')!
		});
	});
</script>

<div class="flex lg:flex-row flex-col items-center justify-around sm:my-5">
	<header class="flex flex-row justify-between max-sm:w-full">
		<a class="flex flex-row items-center justify-center sm:ml-5 ml-2" href={localizeUrl('/')}>
			<img
				width="80"
				height="80"
				src="/logo/protogen.svg"
				alt={t('home', 'logoAlt')}
				class="sm:h-20 sm:w-20 h-12 w-12"
			/>
			<h1 class="dark:text-white text-black sm:text-5xl text-3xl flex flex-row sm:gap-x-2 gap-x-1">
				<span class="text-sinabar">Nashira</span> <span>Deer</span>
			</h1>
		</a>
	</header>
	<nav
		class={twMerge(
			'max-h-0 sm:max-h-full max-sm:w-full overflow-hidden transition-all duration-500',
			sidebar ? 'max-h-[250px]' : undefined
		)}
	>
		<ul
			class="flex sm:flex-row flex-col gap-x-2 gap-y-1 sm:mr-5 max-sm:mx-2 justify-center items-center *:max-sm:w-full"
		>
			<li>
				{#if props.selected !== 'blog'}
					<Button href={localizeUrl('/blog')} class="text-white text-center text-lg px-3">
						{t('header', 'blog')}
					</Button>
				{:else}
					<span
						class="block p-2 rounded-lg text-white text-center text-lg px-3 select-none bg-sinabar"
						>{t('header', 'blog')}</span
					>
				{/if}
			</li>
			<li>
				{#if props.selected !== 'games'}
					<Button href={localizeUrl('/games')} class=" text-white text-center text-lg px-3">
						{t('header', 'games')}
					</Button>
				{:else}
					<span
						class="block p-2 rounded-lg text-white text-center text-lg px-3 select-none bg-sinabar"
						>{t('header', 'games')}</span
					>
				{/if}
			</li>
			<li>
				{#if props.selected !== 'projects'}
					<Button href={localizeUrl('/projects')} class="text-white text-center text-lg px-3">
						{t('header', 'projects')}
					</Button>
				{:else}
					<span
						class="block p-2 rounded-lg text-white text-center text-lg px-3 select-none bg-sinabar"
						>{t('header', 'projects')}</span
					>
				{/if}
			</li>
			<li>
				{#if props.selected !== 'certificates'}
					<Button href={localizeUrl('/certificates')} class="text-white text-center text-lg px-3">
						{t('header', 'certificates')}
					</Button>
				{:else}
					<span
						class="block p-2 rounded-lg text-white text-center text-lg px-3 select-none bg-sinabar"
						>{t('header', 'certificates')}</span
					>
				{/if}
			</li>
			<li>
				{#if props.selected !== 'fursonas'}
					<Button href={localizeUrl('/fursonas')} class="text-white text-center text-lg px-3">
						{t('header', 'fursonas')}
					</Button>
				{:else}
					<span
						class="block p-2 rounded-lg text-white text-center text-lg px-3 select-none bg-sinabar"
						>{t('header', 'fursonas')}</span
					>
				{/if}
			</li>
		</ul>
	</nav>
</div>
