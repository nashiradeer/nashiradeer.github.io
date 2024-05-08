<script>
	import { FURSONAS } from '../models/fursonas';
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
		margin: 20px 0;
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

	@media (max-width: 1100px) {
		.fursona {
			margin: 0;
		}
	}

	@media (max-width: 600px) {
		span {
			font-size: 1.5rem;
		}
	}
</style>
