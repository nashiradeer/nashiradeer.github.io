<script lang="ts">
	import type { PageLoad } from '$lib/types';
	import { buildUrl } from './languages';

	export let data: PageLoad;
	export let href: string;
	export let category: string;
	export let key: string;
</script>

<a href={buildUrl(data.langCode, href)}>{data.language[category][key]}</a>
