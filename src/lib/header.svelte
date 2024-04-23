<script>
	import { assets } from '$app/paths';
</script>

<header>
	<img src="{assets}/protogen.svg" alt="Nashira Deer" />
	<h1>Nashira Deer // Kitsu'ne</h1>
</header>

<style>
	header {
		padding: 2% 0;
		display: flex;
		align-items: center;
	}

	h1 {
		font-family: 'Secular One', sans-serif;
		font-size: 5rem;
		font-weight: bolder;
		margin: 0;
		margin-left: 2%;
	}

	header img {
		width: 10%;
		margin-left: 3%;
	}

	@media (max-width: 1140px) {
		header {
			padding: 0.5% 0;
		}

		h1 {
			font-size: 2.5rem;
			margin-left: 3%;
		}

		header img {
			width: 5rem;
			margin-left: 3%;
		}
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 1.5rem;
		}

		header img {
			width: 3rem;
		}
	}
</style>
