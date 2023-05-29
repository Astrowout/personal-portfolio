<script lang="ts">
	export let number;
	export let description;
	export let id;
	export let __typename;

	let className = '';
	export { className as class };
</script>

<div class="flex flex-col {className}">
	<p class="u-font-display text-4xl xl:text-5xl text-slate-900">
		{number}
	</p>

	<p class="prose prose-lg prose-slate">
		{@html description.html}
	</p>
</div>
