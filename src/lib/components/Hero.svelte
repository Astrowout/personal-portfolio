<script lang="ts">
	import { onMount } from 'svelte';
	import HeroRetroGrid from './HeroRetroGrid.svelte';

	let { headline, image } = $props();
	export const id = '';
	export const __typename = '';

	let loaded = $state(false);

	onMount(() => {
		loaded = true;
	});
</script>

<div class="u-space-x py-8 lg:py-4 w-full flex items-center justify-center h-80 overflow-hidden relative">
	<HeroRetroGrid />

	<div
		class="text-2xl/10 sm:text-3xl/12 transition duration-1000 ease-out delay-300 max-w-2xl text-center"
		class:opacity-0={!loaded}
		class:translate-y-12={!loaded}
		class:opacity-100={loaded}
		class:translate-x-0={loaded}
	>
		{@html headline.html}
	</div>
</div>
