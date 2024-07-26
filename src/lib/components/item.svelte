<script lang="ts">
	import { assets } from '$app/paths';
	import type { IBadge } from '$lib/types';
	import Badge from './badge.svelte';

	export let id: string;
	export let title: string;
	export let image: string = `${assets}/placeholder.svg`;
	export let link: string | undefined = undefined;
	export let link_text: string = 'View project';
	export let description: string | undefined = undefined;
	export let badges: IBadge[] = [];
	export let oneLineDescription: boolean = false;
	export let invertColors: boolean = false;
	export let enableBorder: boolean = true;
	export let smallTitle: boolean = false;
</script>

<div class="showcase-item">
	<input {id} type="checkbox" />
	<label for={id}>
		<div class={invertColors ? 'showcase-content inverted' : 'showcase-content'}>
			<img width="270" height="200" src={image} alt={title} class={enableBorder ? 'border' : ''} />
			{#if smallTitle}
				<span style="font-size: 1.3rem;">{title}</span>
			{:else}
				<span style="font-size: 1.8rem;">{title}</span>
			{/if}
			{#if badges.length > 0}
				<div class="showcase-badges">
					{#each badges as badge}
						<Badge {...badge} />
					{/each}
				</div>
			{/if}
		</div>
		{#if description || link}
			<div
				class={oneLineDescription
					? 'description one-line-description'
					: 'description multi-line-description'}
			>
				{#if description}
					<p>{description}</p>
				{/if}
				{#if link}
					<a href={link} target="_blank" rel="noopener noreferrer">{link_text}</a>
				{/if}
			</div>
		{/if}
	</label>
</div>

<style>
	input {
		display: none;
	}

	.showcase-content {
		background-color: #000;
		padding: 20px;
		border-radius: 10px;
	}

	.inverted {
		background-color: #d80061;
	}

	@keyframes blinking {
		0% {
			background-color: #000;
		}

		100% {
			background-color: #4b0a28;
		}
	}

	@keyframes blinking-inverted {
		0% {
			background-color: #d80061;
		}

		100% {
			background-color: #ff5fa7;
		}
	}

	.showcase-content:hover {
		animation: blinking 1s;
		animation-direction: alternate;
		animation-iteration-count: infinite;
		cursor: pointer;
	}

	.inverted:hover {
		animation: blinking-inverted 1s;
		animation-direction: alternate;
		animation-iteration-count: infinite;
	}

	label {
		background-color: #94174f;
		display: block;
		width: 310px;
		border-radius: 10px;
	}

	span {
		margin-top: 10px;
		line-height: 43px;
		display: block;
		text-align: center;
	}

	img {
		display: block;
		margin: 0;
		border-radius: 10px;
	}

	.border {
		border: #fff solid 2px;
	}

	.showcase-badges {
		display: flex;
		justify-content: center;
		margin-top: 10px;
	}

	.showcase-badges :global(> *) {
		margin-left: 7px;
	}

	.showcase-badges :global(> :first-child) {
		margin-left: 0;
	}

	.description {
		overflow: hidden;
		height: 0;
		transition: height 0.5s ease-out;
	}

	input:checked + label .multi-line-description {
		height: 150px;
		transition: height 0.5s ease-in;
	}

	input:checked + label .one-line-description {
		height: 100px;
		transition: height 0.5s ease-in;
	}

	.description p {
		margin: 20px 20px 0 20px;
		text-align: center;
		height: 55px;
		font-size: 0.8rem;
		word-break: break-word;
	}

	.one-line-description p {
		margin-top: 15px;
		height: 20px;
	}

	.description a {
		width: fit-content;
		display: block;
		padding: 5px 8px;
		margin: 20px auto 20px auto;
		background-color: #000;
		color: #fff;
		text-decoration: none;
		border-radius: 5px;
	}

	.one-line-description a {
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.description a:hover {
		background-color: #3a081f;
	}
</style>
