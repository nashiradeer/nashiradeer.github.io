<script lang="ts">
	export let image: string;
	export let name: string;
</script>

<div>
	<img src={image} alt={name} />
	<span>{name}</span>
</div>

<style>
	div {
		display: block;
		padding: 1% 2%;
		text-align: center;
	}

	span {
		display: block;
		font-size: 1.5rem;
		margin: 0;
		margin-bottom: 5%;
	}

	img {
		height: 210px;
	}

	@media (max-width: 768px) {
		img {
			height: 300px;
		}
	}
</style>
