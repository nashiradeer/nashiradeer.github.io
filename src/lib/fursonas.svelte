<script>
	import Fursona from './components/fursona.svelte';
	import { assets } from '$app/paths';
</script>

<section>
	<h2>Fursonas</h2>
	<div>
		<Fursona image="{assets}/fursonas/sirius.png" name="Sirius Liansheko" />
		<Fursona image="{assets}/fursonas/sinabar.png" name="Sinabar" />
		<Fursona image="{assets}/fursonas/hellion.png" name="Hellion" />
		<Fursona image="{assets}/fursonas/kitsune.png" name="Kitsu'ne" />
		<Fursona image="{assets}/fursonas/hirsuan_zoroark.png" name="Hirsuan Zoroark" />
	</div>
</section>

<style>
	section {
		background-color: #8400ff;
		padding: 4% 10%;
		margin: 0;
	}

	h2 {
		font-size: 3rem;
		margin: 0;
		margin-bottom: 5%;
		font-weight: bolder;
	}

	div {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: center;
	}

	@media (max-width: 768px) {
		h2 {
			text-align: center;
		}
	}
</style>
