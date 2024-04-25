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
			font-size: 4rem;
			margin-left: 10px;
		}

		img {
			margin-left: 60px;
			width: 128px;
			height: 127px;
		}
	}

	@media (max-width: 1100px) {
		header {
			padding: 10px 0;
		}

		h1 {
			font-size: 3rem;
			margin-left: 10px;
		}

		img {
			margin-left: 20px;
			width: 96px;
			height: 96px;
		}
	}

	@media (max-width: 720px) {
		h1 {
			font-size: 2.5rem;
		}

		img {
			width: 64px;
			height: 64px;
		}
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 2rem;
		}

		img {
			width: 48px;
			height: 48px;
		}
	}

	@media (max-width: 520px) {
		h1 {
			font-size: 1.5rem;
		}

		img {
			width: 40px;
			height: 40px;
		}
	}

	@media (max-width: 480px) {
		header {
			padding: 5px 0;
		}

		h1 {
			margin-left: 5px;
			font-size: 1.2rem;
		}

		img {
			margin-left: 10px;
			width: 32px;
			height: 32px;
		}
	}
</style>
