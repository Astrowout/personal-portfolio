<script lang="ts">
	import Tag from './Tag.svelte';

	export let title;
	export let slug;
	export let image;
	export let tags;
	export let id;
	export let __typename;
</script>

<a href="/work/{slug}" class="group flex flex-col relative sm:p-6 sm:pb-5">
	<span
		class="absolute inset-0 w-full h-full -z-10 rounded-xl sm:bg-slate-50 sm:border-2 border-slate-200 transition duration-300 ease-in-out lg:group-hover:drop-shadow-xl lg:group-hover:scale-105 lg:group-hover:skew-x-1 lg:group-hover:-rotate-1"
	/>

	<div class="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5">
		{#if title}
			<h4
				class="inline-block relative text-center text-lg sm:text-xl text-slate-800 u-font-display uppercase"
			>
				{title}
			</h4>
		{/if}

		{#if !!tags.length}
			<Tag compact>
				{tags[0].label}
			</Tag>
		{/if}
	</div>

	{#if image}
		<img
			alt={image.alt}
			src={image.url}
			width={image.width}
			height={image.height}
			class="object-contain scale-105 sm:scale-100 mt-4 w-full relative z-10 drop-shadow-md"
		/>
	{/if}
</a>
