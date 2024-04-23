<script>
	import { assets } from '$app/paths';
	import Project from './components/project.svelte';
</script>

<section>
	<h2>Projects</h2>
	<div>
		<a href="https://github.com/nashiradeer/nashiradeer.github.io">
			<Project
				name="Nashira's Website"
				tech="Svelte"
				badge="{assets}/langs/svelte.svg"
				wrapped={true}
			/>
		</a>
		<Project name="Mexanyd Desktop" tech="Flutter/Dart" badge="{assets}/langs/flutter.svg" />
		<a href="https://github.com/nashiradeer/hydrogen">
			<Project
				name="Hydrogen"
				image="{assets}/projects/hydrogen.svg"
				tech="Rust"
				badge="{assets}/langs/rust.svg"
				wrapped={true}
			/>
		</a>
		<Project name="Hellion Discord Bot" tech="TypeScript" badge="{assets}/langs/typescript.svg" />
		<a href="https://github.com/nashiradeer/lavalink-openj9">
			<Project
				name="Lavalink OpenJ9"
				tech="Docker"
				badge="{assets}/langs/docker.svg"
				wrapped={true}
			/>
		</a>
		<a href="https://github.com/nashiradeer/hydrogen-i18n">
			<Project
				name="Hydrogen: I18n"
				image="{assets}/projects/hydrogen.svg"
				tech="Rust"
				badge="{assets}/langs/rust.svg"
				wrapped={true}
			/>
		</a>
		<a href="https://github.com/nashiradeer/hydrolink">
			<Project
				name="Hydrolink"
				image="{assets}/projects/hydrogen.svg"
				tech="Rust"
				badge="{assets}/langs/rust.svg"
				wrapped={true}
			/>
		</a>
		<a href="https://github.com/nashiradeer/ggj24-game"
			><Project
				name="Demaintenance Tool"
				tech="Rust"
				badge="{assets}/langs/rust.svg"
				wrapped={true}
			/>
		</a>
		<a href="https://github.com/nashiradeer/jekyll-n-hyde">
			<Project
				name="Jekyll'N'Hyde"
				image="{assets}/projects/jekyll-n-hyde.svg"
				tech="Unity/C#"
				badge="{assets}/langs/unity.svg"
				wrapped={true}
			/>
		</a>
		<a href="https://github.com/nashiradeer/skyer-builder">
			<Project
				name="Skyer Builder"
				tech="Unity/C#"
				badge="{assets}/langs/unity.svg"
				wrapped={true}
			/>
		</a>
		<a href="https://github.com/nashiradeer/deerlin-for-jekyll">
			<Project
				name="Deerlin for Jekyll"
				tech="Jekyll"
				badge="{assets}/langs/jekyll.svg"
				wrapped={true}
			/>
		</a>
		<a href="https://github.com/nashiradeer/brasil-cov">
			<Project name="Brasil CoV" tech="Qt/C++" badge="{assets}/langs/qt.svg" wrapped={true} />
		</a>
		<a href="https://gamejolt.com/games/thelegendofbaiana/653596">
			<Project
				name="The Legend of Baiana"
				image="{assets}/projects/the-legend-of-baiana.webp"
				forceRound={true}
				tech="Unity/C#"
				badge="{assets}/langs/unity.svg"
				wrapped={true}
			/>
		</a>
		<a href="https://gamejolt.com/games/loptama/650358">
			<Project
				name="Loptama"
				image="{assets}/projects/loptama.webp"
				forceRound={true}
				tech="Unity/C#"
				badge="{assets}/langs/unity.svg"
				wrapped={true}
			/>
		</a>
		<a href="https://github.com/nashiradeer/sexy-name-calculator">
			<Project
				name="Sexy Name Calculator"
				tech="HTML"
				badge="{assets}/langs/html.svg"
				wrapped={true}
			/>
		</a>
	</div>
</section>

<style>
	section {
		background-color: #fb0072;
		padding: 4% 4%;
		margin: 0;
	}

	h2 {
		font-size: 3rem;
		margin: 0;
		margin-bottom: 5%;
		margin-left: 6.5%;
		font-weight: bolder;
	}

	div {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: center;
	}

	a {
		display: block;
		padding: 1% 2%;
		margin: 2%;
		text-align: center;
		color: #fff;
		text-decoration: none;
	}
</style>
