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

<div class="flex h-screen">
	<div class="m-auto">
		<header class="flex flex-row items-center justify-center">
			<img
				width="200"
				height="200"
				src="protogen.svg"
				alt="Sinabar, a furry of the Protogen specie."
			/>
			<h1 class="text-white text-9xl">
				<span class="text-sinabar">Nashira</span> <span>Deer</span>
			</h1>
		</header>
		<ul class="flex flex-row gap-x-2 justify-center mt-4 *:home-button">
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/blog">Blog</a>
			</li>
			<li>
				<a href="/fursonas">Fursonas</a>
			</li>
			<li>
				<a href="/certificates">Certificates</a>
			</li>
			<li>
				<a href="/projects">Projects</a>
			</li>
			<li>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</div>
</div>
