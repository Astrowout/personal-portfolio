<script lang="ts">
	export let number;
	export let description;
	export const id = '';
	export const __typename = '';

	let className = '';
	export { className as class };
</script>

<div class="flex flex-col {className}">
	<p class="text-4xl xl:text-5xl text-slate-900 lining-nums">
		{number}
	</p>

	<p class="mt-1 prose prose-lg prose-slate">
		{@html description.html}
	</p>
</div>
