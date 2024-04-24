<script>
	import { assets } from '$app/paths';
	import Header from '$lib/header.svelte';
	import Contact from '$lib/contact.svelte';
	import Fursonas from '$lib/fursona.svelte';
	import Footer from '$lib/footer.svelte';
	import Showcase from '$lib/showcase.svelte';
	import ContentBox from '$lib/content_box.svelte';
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
<ContentBox title="Contact" color="#0059ff">
	<Contact />
</ContentBox>
<ContentBox title="About Me">
	<p>
		Hello! I'm Nashira Deer, a furry artist and web developer. I'm a Protogen, a species created by
		Malice-Risu. I'm a non-binary person who uses they/them pronouns. I'm a hobbyist artist who
		enjoys drawing furries and other anthropomorphic characters. I'm also a web developer who enjoys
		creating websites and web applications. I'm currently learning SvelteKit, a framework for
		building web applications with Svelte.
	</p>
</ContentBox>
<ContentBox title="Fursonas" color="#8400ff">
	<Fursonas />
</ContentBox>
<ContentBox title="Projects" color="#fb0072" big_content={true}>
	<Showcase />
</ContentBox>
<Footer />

<style>
	:global(body) {
		margin: 0;
		font-family: 'Secular One', sans-serif;
		background-color: #000;
		color: #fff;
	}
</style>
