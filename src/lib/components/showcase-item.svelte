<script lang="ts">
	interface ShowcaseItemProps {
		title: string;
		description: string;
		image: string;
		href: string;
		target?: '_blank' | '_self' | '_parent' | '_top' | string;
	}

	let props: ShowcaseItemProps = $props();
</script>

<a
	href={props.href}
	target={props.target}
	class="w-[230px] h-[265px] hover:bg-sirius hover:text-white py-2 px-2 transition-colors rounded-lg"
>
	<img
		src={props.image}
		alt={props.title}
		class="rounded-lg dark:border-white border border-black"
		width="225"
		height="150"
	/>
	<h3 class="font-bold text-xl mt-2">{props.title}</h3>
	<p class="text-xs mt-1">{props.description}</p>
</a>
