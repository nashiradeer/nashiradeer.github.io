<script>
	import ContentBox from './content_box.svelte';
	import { PROJECTS } from './projects';
	import ShowcaseItem from './showcase_item.svelte';
</script>

<div>
	{#each PROJECTS as project}
		<ShowcaseItem {...project} />
	{/each}
</div>

<style>
	div {
		padding: 0 2px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
	}
</style>
