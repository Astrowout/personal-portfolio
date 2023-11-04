<script lang="ts">
	import Button from './Button.svelte';

	export let title = '';
</script>

<div class="w-full rounded-xl bg-white p-5 md:px-8 py-10 shadow-lg shadow-stone-400/20 border-2 border-stone-200 max-w-lg">
	{#if title}
		<h1 class="u-font-display uppercase text-2xl md:text-3xl text-center text-slate-800">
			{title}
		</h1>
	{/if}

	<form method="POST" class="flex flex-col w-full mt-8">
		<label for="password" class="text-slate-500 text-lg">
			Enter your password
		</label>

		<input
			id="password"
			name="password"
			type="password"
			required
			class="w-full mt-1 rounded-xl px-5 py-3 text-xl border-2 shadow-inner border-slate-300 bg-stone-50 focus:outline-none focus:border-slate-800"
		/>

		<Button type="submit" class="mt-6 z-10 text-xl self-center">
			Access page
		</Button>
	</form>
</div>
