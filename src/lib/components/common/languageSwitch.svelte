<script lang="ts">
	import type { LanguageData, PageLoad } from '$lib/types';

	export let data: PageLoad;
</script>

<input type="checkbox" id="lang-menu" class="hidden peer" />
<label for="lang-menu" class="mr-1 px-1 flex flex-row items-center cursor-pointer select-none">
	{data.languageData.current.metadata.code.toUpperCase()}
</label>
<ul
	class="absolute right-3 top-12 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-md hidden peer-checked:block"
>
	{#each Object.keys(data.languageData.available) as language}
		<li>
			<a href={(language == 'en' ? '' : language) + '/'} class="block p-2">
				{data.languageData.available[language]}
			</a>
		</li>
	{/each}
</ul>
