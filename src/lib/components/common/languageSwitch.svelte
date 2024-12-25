<script lang="ts">
	import { getLanguage } from '$lib/i18n';
	import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from '$lib/i18n/languages';
</script>

<input type="checkbox" id="lang-menu" class="hidden peer" />
<label for="lang-menu" class="mr-1 px-1 flex flex-row items-center cursor-pointer select-none">
	{getLanguage().metadata.code.toUpperCase()}
</label>
<ul
	class="absolute right-3 top-12 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-md hidden peer-checked:block"
>
	{#each Object.keys(AVAILABLE_LANGUAGES) as language}
		<li>
			<a href={(language == DEFAULT_LANGUAGE ? '' : language) + '/'} class="block p-2">
				{AVAILABLE_LANGUAGES[language]}
			</a>
		</li>
	{/each}
</ul>
