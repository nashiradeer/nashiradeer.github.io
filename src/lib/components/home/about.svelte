<script lang="ts">
	import { t } from '$lib/i18n/languages';
	import type { PageLoad } from '$lib/types';

	export let data: PageLoad;
</script>

<main class="text-center md:text-lg mx-5 sm:mx-10 md:mx-32 xl:mx-96">
	<p>
		{t(data, 'home', 'about')}
	</p>
</main>
