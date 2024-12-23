<script lang="ts">
	export let name: string | undefined = undefined;
	export let image: string | undefined = undefined;

	let badgeClass = 'badge-empty';
	if (name && image) {
		badgeClass = 'badge-text-and-image';
	} else if (image) {
		badgeClass = 'badge-image-only';
	} else if (name) {
		badgeClass = 'badge-text-only';
	}
</script>

<div class={badgeClass}>
	{#if image}
		<img loading="lazy" width="20" height="20" src={image} alt="Badge" />
	{/if}
	{#if name}
		<span>{name}</span>
	{/if}
</div>

<style>
	div {
		display: inline;
		background-color: #6b113a;
		color: #fff;
		font-size: 1rem;
		padding: 5px 6px;
		width: fit-content;
		border-radius: 8px;
	}

	.badge-image-only {
		padding: 5px 6.9px;
	}

	.badge-empty {
		display: none;
	}

	img {
		vertical-align: middle;
	}

	.badge-text-and-image img {
		margin-right: 1px;
	}

	span {
		vertical-align: middle;
	}
</style>
