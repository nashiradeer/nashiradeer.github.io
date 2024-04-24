<script>
	import { assets } from '$app/paths';
	import Header from '$lib/header.svelte';
	import Contact from '$lib/contact.svelte';
	import Fursonas from '$lib/fursonas.svelte';
	import Footer from '$lib/footer.svelte';
	import Showcase from '$lib/showcase.svelte';
</script>

<svelte:head>
	<title>Nashira Deer</title>
	<meta name="description" content="Nashira Deer's personal website." />
	<meta property="og:title" content="Nashira Deer" />
	<meta property="og:description" content="Nashira Deer's personal website." />
	<meta property="og:url" content="https://www.nashiradeer.com/" />
	<meta property="og:image" content="{assets}/favicon.png" />
	<meta property="og:image:alt" content="Sinabar, a furry of the Protogen specie." />
	<meta name="twitter:card" content="summary" />
	<meta name="theme-color" content="#fb0072" />
</svelte:head>

<Header />
<Contact />
<Fursonas />
<Showcase />
<Footer />

<style>
	:global(body) {
		margin: 0;
		font-family: 'Secular One', sans-serif;
		background-color: #000;
		color: #fff;
	}
</style>
