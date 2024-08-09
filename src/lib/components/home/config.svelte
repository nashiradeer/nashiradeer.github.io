<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let darkMode = writable(true);

	function isDarkMode() {
		return (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		);
	}

	onMount(() => {
		if (isDarkMode()) {
			document.documentElement.classList.add('dark');
			document.documentElement.classList.remove('light');
			darkMode.set(true);
		} else {
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
			darkMode.set(false);
		}
	});

	function switchTheme() {
		if (isDarkMode()) {
			localStorage.theme = 'light';
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
			darkMode.set(false);
		} else {
			localStorage.theme = 'dark';
			document.documentElement.classList.add('dark');
			document.documentElement.classList.remove('light');
			darkMode.set(true);
		}
	}
</script>

<button
	on:click={switchTheme}
	class="size-8 bg-[url('/icons/light-mode.svg')] hover:bg-[url('/icons/light-mode-hover.svg')] dark:bg-[url('/icons/dark-mode.svg')] dark:hover:bg-[url('/icons/dark-mode-hover.svg')] bg-no-repeat bg-center bg-contain transition-all"
/>
