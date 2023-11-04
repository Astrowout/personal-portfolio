<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let items = [];

	let mounted = false;

	$: getIsActive = (slug) => {
		return $page.url.pathname.replace(/\//, '') === slug || ($page.url.pathname === '/' && !slug);
	};

	onMount(() => {
		mounted = true;
	});
</script>

<div class="fixed w-full z-50 inset-x-0 bottom-6 sm:bottom-8 flex justify-center">
	<nav
		class="bg-slate-900/40 p-1 rounded-full shadow-md shadow-slate-900/20 transition ease-out delay-700 duration-500"
		class:opacity-0={!mounted}
		class:translate-y-12={!mounted}
		class:opacity-100={mounted}
		class:translate-y-0={mounted}
	>
		<ul class="flex gap-x-1 text-white font-bold sm:text-lg rounded-full overflow-hidden">
			{#each items as item, index (item.id)}
				<li>
					<a
						href={item.slug ? `/${item.slug}` : '/'}
						class={`block px-5 py-3 relative transition-colors rounded-md ${
							getIsActive(item.slug)
								? "bg-slate-900"
								: "bg-slate-900/30 hover:bg-slate-900/40 backdrop-blur-sm"
						}`}
						class:pl-6={index === 0}
						class:pr-6={index === items.length - 1}
						class:rounded-r-md={index === 0}
						class:rounded-l-md={index === items.length - 1}
					>
						<span>
							{item.label}
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>
