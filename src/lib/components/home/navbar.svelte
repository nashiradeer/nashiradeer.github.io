<script lang="ts">
	import { t, localizedUrl } from '$lib/i18n/languages';
	import type { PageLoad } from '$lib/types';

	export let data: PageLoad;
</script>

<nav>
	<ul
		class="flex flex-col sm:flex-row sm:gap-x-2 gap-y-2 sm:gap-y-0 mx-5 justify-center items-center *:home-button"
	>
		<li><a href={localizedUrl(data, '/blog')}>{t(data, 'home', 'blog')}</a></li>
		<li><a href={localizedUrl(data, '/fursonas')}>{t(data, 'home', 'fursonas')}</a></li>
		<li><a href={localizedUrl(data, '/certificates')}>{t(data, 'home', 'certificates')}</a></li>
		<li><a href={localizedUrl(data, '/projects')}>{t(data, 'home', 'projects')}</a></li>
	</ul>
</nav>
