<script lang="ts">
	export let href = '';

	let className = '';
	export { className as class };

	const renderComponent = () => {
		return href ? 'a' : 'button';
	};
</script>

<svelte:element
	this={renderComponent()}
	{...$$props}
	class="text-lg relative group {className}"
>
	<span class="border-slate-200 border-2 text-slate-600 font-bold pt-0.5 group-hover:text-slate-900 bg-slate-50 h-10 z-10 px-6 flex items-center rounded-xl transition group-hover:translate-y-0.5">
		<slot />
	</span>

	<div class="absolute inset-0 w-full h-full bg-slate-300 rounded-xl -z-10 translate-y-0.5" />
</svelte:element>
