<script lang="ts">
	import { t } from '$lib/i18n/languages';
	import type { PageLoad } from '$lib/types';

	export let data: PageLoad;
</script>

<div class="flex flex-row items-center justify-center sm:mt-[24vh]">
	<img
		width="160"
		height="160"
		src="logo/protogen.svg"
		alt={t(data, 'home', 'logoAlt')}
		class="lg:w-40 lg:h-40 md:w-32 md:h-32 sm:w-20 sm:h-20 h-16 w-16"
	/>
	<h1 class="dark:text-white text-black lg:text-9xl sm:text-6xl text-4xl">
		<span class="text-sinabar">Nashira</span> <span>Deer</span>
	</h1>
</div>
