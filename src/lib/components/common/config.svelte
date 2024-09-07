<script lang="ts">
	import type { PageLoad } from '$lib/types';
	import LanguageSwitch from './languageSwitch.svelte';
	import { onMount } from 'svelte';
	import ThemeSwitch from './themeSwitch.svelte';

	export let data: PageLoad;

	onMount(() => {
		new ThemeSwitch({ target: document.getElementById('config')! });
	});
</script>

<div class="h-12 flex justify-end p-2" id="config">
	<LanguageSwitch {data} />
</div>
