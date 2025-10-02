<script lang="ts">
	
	interface Props {
		class?: string;
		compact?: boolean;
		children?: import('svelte').Snippet;
	}

	let { class: className = '', compact = false, children }: Props = $props();
</script>

<div
	class="flex items-center text-slate-600 bg-stone-50 px-4 py-1 rounded-lg border-2 border-slate-200 {className} {compact
		? 'text-sm'
		: 'text-base'}"
>
	{@render children?.()}
</div>
