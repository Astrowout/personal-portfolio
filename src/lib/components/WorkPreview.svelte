<script lang="ts">
export let title;
export let slug;
export let image;
export let id;
export let __typename;
</script>

<a
	href="/work/{slug}"
	class="group flex flex-col items-center"
>
	{#if title}
		<h4 class="inline-block relative -z-10 text-center sm:text-lg lg:text-xl text-white rounded-xl u-font-display uppercase px-4 pt-2 pb-4 bg-slate-900 translate-y-4 xl:translate-y-16 transition-transform duration-500 group-hover:translate-y-4">
			{ title }
		</h4>
	{/if}

	{#if image}
		<img
			alt={image.alt}
			src={image.url}
			width={image.width}
			height={image.height}
			class="object-contain w-full relative z-10 drop-shadow"
		/>
	{/if}
</a>