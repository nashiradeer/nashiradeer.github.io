<script lang="ts">
	import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE, getLanguage, t } from '$lib/i18n';
	import { twMerge } from 'tailwind-merge';

	interface LanguageSwitchProps {
		languageMenuClass?: string;
	}

	let props: LanguageSwitchProps = $props();
</script>

<input type="checkbox" id="lang-menu" class="hidden peer" />
<label
	for="lang-menu"
	class="mr-1 px-1 flex flex-row items-center cursor-pointer select-none"
	aria-label={t('config', 'changeLanguage')}
>
	{getLanguage().metadata.code.toUpperCase()}
</label>
<ul
	class={twMerge(
		'bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-md hidden peer-checked:block absolute',
		props.languageMenuClass
	)}
>
	{#each Object.keys(AVAILABLE_LANGUAGES) as language}
		<li>
			<a href={(language == DEFAULT_LANGUAGE ? '' : language) + '/'} class="block p-2">
				{AVAILABLE_LANGUAGES[language]}
			</a>
		</li>
	{/each}
</ul>
