<script>
	import Header from '$lib/header.svelte';
	import Contact from '$lib/contact.svelte';
	import Fursonas from '$lib/fursonas.svelte';
	import Footer from '$lib/footer.svelte';
	import Showcase from '$lib/showcase.svelte';
</script>

<svelte:head>
	<title>Nashira Deer | Home</title>
	<meta name="description" content="Nashira Deer's personal website." />
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
