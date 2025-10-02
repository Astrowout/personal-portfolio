<script lang="ts">
	export const id = '';
	export const __typename = '';

	interface Props {
		number: any;
		description: any;
		class?: string;
	}

	let { number, description, class: className = '' }: Props = $props();
	
</script>

<div class="flex flex-col {className}">
	<p class="text-4xl xl:text-5xl text-slate-900 lining-nums">
		{number}
	</p>

	<p class="mt-1 prose prose-lg prose-slate">
		{@html description.html}
	</p>
</div>
