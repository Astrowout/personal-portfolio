<script lang="ts">
	import Button from './Button.svelte';

	export let title = '';
</script>

<div class="w-full rounded-xl bg-stone-100 p-5 md:px-8 md:py-10 shadow-2xl shadow-black max-w-lg">
	{#if title}
		<h1 class="font-serif text-2xl md:text-3xl text-center text-stone-600">
			{title}
		</h1>
	{/if}

	<form method="POST" class="flex flex-col items-center w-full mt-8">
		<label for="password" class="sr-only"> Your password </label>

		<input
			id="password"
			name="password"
			type="password"
			placeholder="My secret password"
			class="w-full rounded-xl px-4 py-2 text-xl border border-stone-300"
		/>

		<Button type="submit" class="mt-4 z-10">Access page</Button>
	</form>
</div>
