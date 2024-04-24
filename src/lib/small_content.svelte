<script lang="ts">
	export let title: string;
	export let color: string = '#000';
</script>

<section style="background-color: {color};">
	<h2>{title}</h2>
	<div>
		<slot />
	</div>
</section>

<style>
	section {
		padding: 30px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h2 {
		font-size: 2.5rem;
		margin: 0;
		margin-left: 60px;
	}

	div {
		max-width: 60%;
	}

	@media (max-width: 1100px) {
		section {
			display: block;
			padding: 30px 10px;
		}

		h2 {
			text-align: center;
			font-size: 3.5rem;
			margin: 0;
			margin-bottom: 30px;
		}

		div {
			max-width: 100%;
		}
	}

	@media (max-width: 600px) {
		section {
			padding: 20px 10px;
		}

		h2 {
			font-size: 2.5rem;
			margin-bottom: 20px;
		}
	}
</style>
