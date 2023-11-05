<script lang="ts">
	let className = '';
	export { className as class };
	export let compact = false;
</script>

<div
	class="flex items-center font-medium text-slate-600 bg-stone-50 px-4 py-1 rounded-lg border-2 border-slate-200 {className} {compact
		? 'text-base'
		: 'text-base lg:text-lg'}"
>
	<slot />
</div>
