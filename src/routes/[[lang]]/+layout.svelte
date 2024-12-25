<script lang="ts">
	import { I18N_KEY } from '$lib/i18n';
	import { setContext } from 'svelte';

	const { data, children } = $props();

	setContext(I18N_KEY, () => data.i18n);
</script>

{@render children()}
