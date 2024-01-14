<script lang="ts">
	let className = '';
	export { className as class };
	export let compact = false;
</script>

<div
	class="flex items-center text-slate-600 bg-stone-50 px-4 py-1 rounded-lg border-2 border-slate-200 {className} {compact
		? 'text-sm'
		: 'text-base'}"
>
	<slot />
</div>
