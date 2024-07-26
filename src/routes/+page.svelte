<svelte:head>
	<title>Nashira Deer - Home</title>
	<meta
		name="description"
		content="Nashira Deer's personal website containing contact information, about me, fursonas, certificates, and projects."
	/>
	<meta property="og:title" content="Nashira Deer" />
	<meta
		property="og:description"
		content="My personal website containing contact information, about me, fursonas, certificates, and projects."
	/>
	<meta property="og:url" content="https://www.nashiradeer.com/" />
	<meta property="og:image" content="https://www.nashiradeer.com/protogen.png" />
	<meta property="og:image:alt" content="Sinabar, a furry of the Protogen specie." />
	<meta name="theme-color" content="#fb0072" />
</svelte:head>

<div>
	<header>
		<img
			width="250"
			height="250"
			src="protogen.svg"
			alt="Sinabar, a furry of the Protogen specie."
		/>
		<h1>Nashira Deer</h1>
	</header>
	<ul>
		<li><a href="/about">About</a></li>
		<li><a href="/blog">Blog</a></li>
		<li><a href="/fursonas">Fursonas</a></li>
		<li><a href="/certificates">Certificates</a></li>
		<li><a href="/projects">Projects</a></li>
		<li><a href="/contact">Contact</a></li>
	</ul>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: 'Secular One', sans-serif;
		background-color: #000;
		color: #fff;
	}

	div {
		display: flex;
		justify-content: center;
		flex-direction: column;
		height: 95vh;
	}

	header {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		margin-bottom: 5vh;
	}

	h1 {
		font-size: 8vw;
		margin: 0;
	}

	img {
		width: 12vw;
	}

	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		flex-wrap: wrap;
		list-style: none;
		padding: 0 40px;
	}

	li {
		margin: 0.25vw;
	}

	a {
		display: block;
		padding: 15px 30px;
		font-size: 1.6rem;
		color: #fff;
		background-color: #0077ff;
		border-radius: 10px;
		text-decoration: none;
		transition: background-color 0.15s;
	}

	a:hover {
		background-color: #ff008c;
		transition: background-color 0.15s;
	}

	@media (max-width: 768px) {
		div {
			padding-top: 20px;
			height: 95vh;
			justify-content: flex-start;
		}

		header {
			margin-bottom: 0;
		}

		h1 {
			font-size: 10vw;
		}

		img {
			width: 18vw;
			height: 18vw;
		}

		ul {
			flex-direction: column;
			padding: 0;
		}

		a {
			width: 70vw;
			padding: 20px 0;
			text-align: center;
			font-size: 2rem;
		}
	}

	@media (max-width: 360px) {
		li {
			margin: 3px;
		}

		a {
			width: 80vw;
			font-size: 1.5rem;
		}
	}
</style>
