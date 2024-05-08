<script>
	import { PROJECTS } from '../models/projects';
	import ShowcaseItem from '../components/item.svelte';
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
