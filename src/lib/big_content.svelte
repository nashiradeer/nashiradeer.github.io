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
		padding: 50px 0;
	}

	h2 {
		text-align: center;
		font-size: 3.5rem;
		margin: 0;
		margin-bottom: 50px;
	}

	@media (max-width: 1100px) {
		section {
			padding: 30px 0;
		}

		h2 {
			margin-bottom: 30px;
		}
	}

	@media (max-width: 768px) {
		section {
			padding: 10px 0;
		}

		h2 {
			margin-bottom: 10px;
		}
	}
</style>
