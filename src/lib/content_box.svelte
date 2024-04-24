<script lang="ts">
	export let title: string;
	export let color: string = 'black';
	export let big_content: boolean = false;
</script>

<section style="background-color: {color};" class={big_content ? 'big-content' : 'small-content'}>
	<h2>{title}</h2>
	<div>
		<slot />
	</div>
</section>

<style>
	.big-content {
		padding: 50px 0;
		flex-direction: column;
		align-items: center;
	}

	.big-content h2 {
		text-align: center;
		font-size: 3.5rem;
		margin: 0;
		margin-bottom: 50px;
	}

	@media (max-width: 1024px) {
		.big-content {
			padding: 30px 0;
		}

		.big-content h2 {
			margin-bottom: 30px;
		}
	}

	@media (max-width: 768px) {
		.big-content {
			padding: 10px 0;
		}

		.big-content h2 {
			margin-bottom: 10px;
		}
	}
</style>
