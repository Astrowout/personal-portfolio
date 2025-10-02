<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let items = [];

	let mounted = false;

	const getIsActive = $derived.by((slug) => {
		return $page.url.pathname.replace(/\//, '') === slug || ($page.url.pathname === '/' && !slug);
	});

	onMount(() => {
		mounted = true;
	});
</script>

<div class="fixed w-full z-50 inset-x-0 bottom-6 sm:bottom-8 flex justify-center">
	<nav
		class="bg-slate-900/40 p-1 rounded-lg shadow-md shadow-slate-900/20 transition ease-out delay-700 duration-500"
		class:opacity-0={!mounted}
		class:translate-y-12={!mounted}
		class:opacity-100={mounted}
		class:translate-y-0={mounted}
	>
		<ul class="flex gap-x-1 font-bold rounded-md overflow-hidden">
			{#each items as item, index (item.id)}
				<li>
					<a
						href={item.slug ? `/${item.slug}` : '/'}
						class={`flex gap-x-1.5 items-center px-4 py-3 relative transition-colors rounded-md ${
							getIsActive(item.slug)
								? "bg-slate-900 text-white"
								: "bg-slate-900/30 hover:bg-slate-900/40 backdrop-blur-sm text-white/80 hover:text-white"
						}`}
						class:rounded-r-md={index === 0}
						class:rounded-l-md={index === items.length - 1}
					>
						{#if !item.slug}
							<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 256 256"><path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path></svg>
						{/if}
						{#if item.slug === "work"}
							<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 256 256"><path d="M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM48,72a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8v96H48ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z"></path></svg>
						{/if}
						{#if item.slug === "about"}
							<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 256 256"><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path></svg>
						{/if}
						<span>
							{item.label}
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>
