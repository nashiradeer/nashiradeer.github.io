<script lang="ts">
	import { mount, onMount } from 'svelte';
	import LanguageSwitch from './language-switch.svelte';
	import ThemeSwitch from './theme-switch.svelte';

	interface ConfigProps {
		languageMenuClass?: string;
	}

	let props: ConfigProps = $props();

	onMount(() => {
		mount(ThemeSwitch, {
			target: document.getElementById('config')!
		});
	});
</script>

<div class="h-12 flex justify-end p-2" id="config">
	<LanguageSwitch languageMenuClass={props.languageMenuClass} />
</div>
