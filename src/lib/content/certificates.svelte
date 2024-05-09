<script lang="ts">
	import Item from "$lib/components/item.svelte";
	import { CERTIFICATES } from "$lib/models/certificates";


</script>

<div class="certificates-wrapper">
	<div class="certificates-content">
	{#each CERTIFICATES as certificate}
		<Item link_text="View Certificate" invertColors={true} oneLineDescription={true} {...certificate} />
	{/each}
	</div>
</div>

<style>
	.certificates-wrapper {
        padding-right: 50px;
		display: flex;
		justify-content: center;
        align-items: center;
		height: 80vh;
	}

	.certificates-content {
		height: 465px;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 20px;
	}

    @media (max-width: 1150px) {
        .certificates-wrapper {
			height: auto;
        }

		.certificates-content {
			height: auto;
		}
    }

    @media (max-width: 1100px) {
		.certificates-wrapper {
            padding-right: 0;
		}
    }
</style>