<script>
	import { FURSONAS } from './fursonas';
</script>

<div class="fursona">
	{#each FURSONAS as fursona}
		<div class="fursona-item">
			<img
				width="310"
				height={fursona.image?.height ?? 310}
				src={fursona.image?.url}
				alt={fursona.name}
			/>
			<span>{fursona.name}</span>
		</div>
	{/each}
</div>

<style>
	.fursona {
		display: flex;
		flex-wrap: wrap;
		align-items: end;
		justify-content: center;
		gap: 20px;
	}

	span {
		font-size: 2.2rem;
		display: block;
		text-align: center;
		width: 310px;
	}
</style>
