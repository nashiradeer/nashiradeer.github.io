<script>
	import HorizontalSection from '$lib/components/sections/horizontal.svelte';
	import VerticalSection from '$lib/components/sections/vertical.svelte';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Contact from '$lib/content/contact.svelte';
	import Fursonas from '$lib/content/fursonas.svelte';
	import Projects from '$lib/content/projects.svelte';
</script>

<svelte:head>
	<title>Nashira Deer</title>
	<meta
		name="description"
		content="Nashira Deer's personal website containing contact information, about me, fursonas, and projects."
	/>
	<meta property="og:title" content="Nashira Deer" />
	<meta
		property="og:description"
		content="My personal website containing contact information, about me, fursonas, and projects."
	/>
	<meta property="og:url" content="https://www.nashiradeer.com/" />
	<meta property="og:image" content="https://www.nashiradeer.com/protogen.png" />
	<meta property="og:image:alt" content="Sinabar, a furry of the Protogen specie." />
	<meta name="theme-color" content="#fb0072" />
</svelte:head>

<Header />
<HorizontalSection title="Contact" color="#0059ff">
	<Contact />
</HorizontalSection>
<HorizontalSection title="About Me">
	<div>
		<p>
			Hello, I'm Deyvid da Silva Costa (Brazilian, 19y, she/her), or Kitsu'ne on the internet. You
			can find me using the name of Nashira Deer, but it's a "legacy" name. I prefer Kitsu'ne to my
			real name or Nashira. I'm a software developer who loves to code back-ends, games, or
			system-related things, using Rust or C# with Unity in these projects, but I also code
			front-end in TypeScript and mobile/desktop in Flutter. My favorite programming languages are
			Rust, Elixir, Go, C, C#, and TypeScript.
		</p>
	</div>
</HorizontalSection>
<HorizontalSection title="Fursonas" color="#8400ff">
	<Fursonas />
</HorizontalSection>
<VerticalSection title="Projects" color="#fb0072">
	<Projects />
</VerticalSection>
<Footer />

<style>
	:global(body) {
		margin: 0;
		font-family: 'Secular One', sans-serif;
		background-color: #000;
		color: #fff;
	}

	div {
		height: 40vh;
		display: flex;
		align-items: center;
	}

	p {
		font-size: 1.4rem;
		max-width: 70%;
		vertical-align: middle;
		margin: 0 40px 0 auto;
	}

	@media (max-width: 1100px) {
		div {
			height: auto;
		}

		p {
			max-width: 100%;
			margin: 0 60px;
			text-align: center;
		}
	}

	@media (max-width: 600px) {
		p {
			font-size: 1.2rem;
			margin: 0 10px 20px;
		}
	}

	@media (max-width: 400px) {
		p {
			font-size: 1rem;
		}
	}
</style>
