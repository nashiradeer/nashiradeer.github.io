<script lang="ts">
	import { page } from '$app/state';
	import ThemeSwitch from '$lib/components/theme-switch.svelte';
	import Button from '$lib/components/ui/button.svelte';
	import { I18N_KEY } from '$lib/i18n';
	import en from '$lib/i18n/languages/en';
	import { mount, onMount, setContext } from 'svelte';

	setContext(I18N_KEY, () => en);

	onMount(() => {
		mount(ThemeSwitch, {
			target: document.getElementById('config')!
		});
	});
</script>

<svelte:head>
	<title>Nashira Deer // Not Found</title>
	<meta
		name="description"
		content="Nashira Deer's personal website features her contact information, fursonas, certificates, projects, and a blog."
	/>
	<meta property="og:title" content="Nashira Deer" />
	<meta
		property="og:description"
		content="My personal website features her contact information, fursonas, certificates, projects, and a blog."
	/>
	<meta property="og:url" content="https://www.nashiradeer.com/" />
	<meta property="og:image" content="https://www.nashiradeer.com/logo/protogen.png" />
	<meta property="og:image:alt" content="Sinabar, the protogen." />
	<meta name="theme-color" content="#fb0072" />
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="h-12 flex justify-end p-2" id="config"></div>
<div class="flex flex-col items-center justify-center h-[90vh] space-y-4">
	<header>
		<h1 class="md:text-6xl text-4xl text-center">
			<span class="text-red-600">{page.status}</span> - {page.error?.message && 'Not Found'}
		</h1>
	</header>
	<Button href="/" class="text-white">Go to Home</Button>
</div>
