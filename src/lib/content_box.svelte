<script lang="ts">
	export let title: string;
	export let color: string = '#000';
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
	}

	.big-content h2 {
		text-align: center;
		font-size: 3.5rem;
		margin: 0;
		margin-bottom: 50px;
	}

	.small-content {
		padding: 50px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.small-content h2 {
		font-size: 2.5rem;
		margin: 0;
		margin-left: 60px;
	}

	.small-content div {
		max-width: 60%;
	}

	@media (max-width: 1100px) {
		.small-content {
			display: block;
			padding: 50px 10px;
		}

		.small-content h2 {
			text-align: center;
			font-size: 3.5rem;
			margin: 0;
			margin-bottom: 50px;
		}

		.small-content div {
			max-width: 100%;
		}

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
