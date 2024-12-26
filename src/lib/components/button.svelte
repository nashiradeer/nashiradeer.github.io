<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	interface ButtonProps {
		href?: string;
		onclick?: () => void;
		class?: string;
		children?: Snippet;
		'aria-label'?: string;
		'aria-labelledby'?: string;
		target?: '_blank' | '_self' | '_parent' | '_top' | string;
	}

	let props: ButtonProps = $props();

	if (props.href && props.onclick) {
		throw new Error('You can only provide one of href or onclick');
	} else if (!props.href && !props.onclick) {
		throw new Error('You must provide either href or onclick');
	}
</script>

{#if props.onclick}
	<button
		onclick={props.onclick}
		aria-label={props['aria-label']}
		aria-labelledby={props['aria-labelledby']}
		class={twMerge('p-2 rounded-lg', props.class)}
	>
		{@render props.children?.()}
	</button>
{:else}
	<a
		href={props.href}
		class={twMerge(
			'block p-2 rounded-lg bg-sirius hover:bg-sinabar transition-colors',
			props.class
		)}
		aria-label={props['aria-label']}
		aria-labelledby={props['aria-labelledby']}
		target={props.target}
	>
		{@render props.children?.()}
	</a>
{/if}
