<script lang="ts">
	import { mount, onMount } from 'svelte';
	import LanguageSwitch from './languageSwitch.svelte';
	import ThemeSwitch from './themeSwitch.svelte';

	onMount(() => {
		mount(ThemeSwitch, {
			target: document.getElementById('config')!
		});
	});
</script>

<div class="h-12 flex justify-end p-2" id="config">
	<LanguageSwitch />
</div>
