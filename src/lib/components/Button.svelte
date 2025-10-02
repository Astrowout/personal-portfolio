<!-- @migration-task Error while migrating Svelte code: $$props is used together with named props in a way that cannot be automatically migrated. -->
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
	<span class="border-slate-200 border-2 text-slate-600 font-bold pt-0.5 group-hover:text-slate-900 rounded-lg bg-slate-50 h-10 z-10 px-6 flex items-center transition group-hover:translate-y-1">
		<slot />
	</span>

	<div class="absolute inset-0 w-full h-full bg-slate-300 rounded-lg -z-10 translate-y-1" />
</svelte:element>
