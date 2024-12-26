<script lang="ts">
	import { localizeUrl, t } from '$lib/i18n';
	import type { IShowcaseItem } from '$lib/types';
	import ShowcaseItem from './showcase-item.svelte';

	interface ShowcaseProps {
		items: IShowcaseItem[];
		categoryKey: string;
	}

	let props: ShowcaseProps = $props();
</script>

<div class="flex flex-wrap flex-row justify-center items-center gap-x-2 gap-y-2 md:mx-5">
	{#each props.items as item}
		<ShowcaseItem
			title={item.title}
			description={t(props.categoryKey, item.descriptionKey)}
			image={item.image}
			href={item.localizeUrl ? localizeUrl(item.url) : item.url}
			target={item.newTab ? '_blank' : undefined}
		/>
	{/each}
</div>
