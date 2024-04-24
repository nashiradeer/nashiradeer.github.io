<script>
	import ContentBox from './content_box.svelte';
	import { PROJECTS } from './projects';
	import ShowcaseItem from './showcase_item.svelte';
</script>

<ContentBox title="Projects" color="#fb0072" big_content={true}>
	<div>
		{#each PROJECTS as project}
			<ShowcaseItem {...project} />
		{/each}
	</div>
</ContentBox>

<style>
	div {
		padding: 0 2px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
	}
</style>
