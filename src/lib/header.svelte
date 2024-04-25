<script>
	import { assets } from '$app/paths';
</script>

<header>
	<img width="192" height="192" src="{assets}/protogen.svg" alt="Nashira Deer" />
	<h1>Nashira Deer // Kitsu'ne</h1>
</header>

<style>
	header {
		padding: 30px 0;
		display: flex;
		align-items: center;
	}

	h1 {
		font-family: 'Secular One', sans-serif;
		font-size: 5rem;
		font-weight: bolder;
		margin: 0;
		margin-left: 20px;
	}

	img {
		margin-left: 80px;
	}

	@media (max-width: 1300px) {
		h1 {
			font-size: 3rem;
			margin-left: 1%;
		}

		img {
			margin-left: 4%;
			width: 128px;
			height: 128px;
		}
	}

	@media (max-width: 800px) {
		header {
			padding: 1.5% 0;
		}

		h1 {
			font-size: 1.8rem;
		}

		img {
			margin-left: 2%;
			width: 64px;
			height: 64px;
		}
	}

	@media (max-width: 480px) {
		h1 {
			font-size: 1.2rem;
		}

		img {
			width: 48px;
			height: 48px;
		}
	}
</style>
