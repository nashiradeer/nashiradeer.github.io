<script lang="ts">
	import { assets } from '$app/paths';

	export let wrapped: boolean = false;
	export let image: string = `${assets}/placeholder.svg`;
	export let forceRound: boolean = false;
	export let tech: string;
	export let name: string;
	export let badge: string | undefined = undefined;

	let parentClass = wrapped ? 'wrapped' : '';
</script>

<div class={parentClass}>
	{#if forceRound}
		<img class="logo rounded" src={image} alt={name} style="border-radius: 10px;" />
	{:else}
		<img class="logo" src={image} alt={name} />
	{/if}
	<span class="name">{name}</span>
	<div class="tech-badge">
		{#if badge}
			<img class="badge" src={badge} alt="Badge" />
		{/if}
		<span class="tech">{tech}</span>
	</div>
</div>

<style>
	div {
		display: block;
		padding: 1% 2%;
		margin: 2%;
		text-align: center;
	}

	div.wrapped {
		padding: 0;
		margin: 0;
	}

	span.name {
		display: block;
		text-wrap: nowrap;
		font-size: 2rem;
		margin: 0;
	}

	img.logo {
		display: block;
		width: 400px;
	}

	div.tech-badge {
		display: inline-flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-bottom: 5%;
		background-color: #000;
		width: fit-content;
		margin: auto;
		border-radius: 10px;
		padding: 2% 4%;
	}

	span.tech {
		display: block;
		text-wrap: nowrap;
		font-size: 1.2rem;
		margin: 0;
		margin-left: 8%;
	}

	img.badge {
		display: block;
		height: 25px;
	}
</style>
