<script lang="ts">
	import Item from "$lib/components/item.svelte";
	import { CERTIFICATES } from "$lib/models/certificates";


</script>

<div>
	{#each CERTIFICATES as certificate}
		<Item link_text="View Certificate" invertColors={true} oneLineDescription={true} {...certificate} />
	{/each}
</div>

<style>
	div {
        padding-right: 50px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
        align-items: center;
		gap: 20px;
		height: 80vh;
	}

    @media (max-width: 1150px) {
        div {
			height: auto;
        }
    }

    @media (max-width: 1100px) {
		div {
            padding-right: 0;
		}
    }
</style>