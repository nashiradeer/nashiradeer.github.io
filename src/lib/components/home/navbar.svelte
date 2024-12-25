<script lang="ts">
	import { t, localizeUrl } from '$lib/i18n';
</script>

<nav>
	<ul
		class="flex flex-col sm:flex-row sm:gap-x-2 gap-y-2 sm:gap-y-0 mx-5 justify-center items-center *:home-button"
	>
		<li><a href={localizeUrl('/blog')}>{t('home', 'blog')}</a></li>
		<li><a href={localizeUrl('/fursonas')}>{t('home', 'fursonas')}</a></li>
		<li><a href={localizeUrl('/certificates')}>{t('home', 'certificates')}</a></li>
		<li><a href={localizeUrl('/projects')}>{t('home', 'projects')}</a></li>
	</ul>
</nav>
