<script lang="ts">
	import Logo from './Logo.svelte';

	const REPEAT_AMOUNT = 28;

	let { class: className } = $props();
	
</script>

<div class="flex items-center justify-center gap-x-8 {className}">
	{#each { length: REPEAT_AMOUNT } as _}
		<Logo class="text-stone-200" />
	{/each}

	<Logo />

	{#each { length: REPEAT_AMOUNT } as _}
		<Logo class="text-stone-200" />
	{/each}
</div>
