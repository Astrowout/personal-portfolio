<script lang="ts">
	import { onMount } from 'svelte';

	import Logo from './Logo.svelte';
	import Button from './Button.svelte';

	export let cta;

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<header class="u-space-x py-5 md:py-8 w-full bg-stone-100 relative z-10 pointer-events-auto">
	<div
		class="u-container flex justify-between transition ease-in-out duration-700 delay-100"
		class:-translate-y-12={!mounted}
		class:opacity-0={!mounted}
		class:translate-y-0={mounted}
		class:opacity-100={mounted}
	>
		<Logo />

		{#if cta}
			<Button href="/{cta.url}">
				{cta.label}
			</Button>
		{/if}
	</div>
</header>
