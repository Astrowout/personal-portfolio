<script lang="ts">

	interface Props {
		href?: string;
		class?: string;
		children?: import('svelte').Snippet;
	}

	let { href = '/', class: className = '', children }: Props = $props();
	
</script>

<a
	{href}
	class="border-slate-200 bg-slate-50 mr-auto border-2 rounded-xl flex items-center h-8 px-4 gap-1.5 group {className}"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
		class="w-4 h-4 transition-transform group-hover:-translate-x-1"
	>
		<path
			fill-rule="evenodd"
			d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
			clip-rule="evenodd"
		/>
	</svg>

	<span>
		{@render children?.()}
	</span>
</a>
