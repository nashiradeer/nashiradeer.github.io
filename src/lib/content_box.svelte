<script lang="ts">
	export let title: string;
	export let color: string = 'black';
</script>

<section style="background-color: {color};">
	<h2>{title}</h2>
	<div>
		<slot />
	</div>
</section>

<style>
	section {
		padding: 40px 30px;
		padding-right: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	h2 {
		font-size: 3.5rem;
		margin: 0;
		margin-left: 20px;
		color: #fff;
		min-width: 320px;
	}

	@media (max-width: 1024px) {
		section {
			flex-direction: column;
			align-items: center;
		}

		h2 {
			margin-left: 0;
			text-align: center;
		}
	}

	@media (max-width: 800px) {
		section {
			padding: 40px 0;
		}
	}
</style>
