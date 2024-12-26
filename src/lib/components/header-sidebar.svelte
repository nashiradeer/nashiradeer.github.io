<script lang="ts">
	import { t } from '$lib/i18n';

	interface HeaderSidebarProps {
		onclick: () => void;
	}

	let props: HeaderSidebarProps = $props();
</script>

<button
	onclick={props.onclick}
	class="sm:mr-1 mr-0.5 px-1 flex flex-row items-center sm:hidden dark:invert-0 invert"
>
	<img src="/icons/menu.svg" alt={t('header', 'menu')} class="h-8 w-8" />
</button>
