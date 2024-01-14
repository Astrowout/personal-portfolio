<script lang="ts">
	export let label = '';
	export let url = '';
	export let external = false;
	export const __typename = '';

	let className = '';
	export { className as class };
</script>

<a
	href={url}
	class="flex items-center gap-x-1.5 group hover:underline text-slate-900 {className}"
	rel="noopener noreferrer"
	target={external ? '_blank' : 'self'}
>
	{label}

	{#if external}
		<svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
			<path
				fill-rule="evenodd"
				d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
				clip-rule="evenodd"
			/>
			<path
				fill-rule="evenodd"
				d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
				clip-rule="evenodd"
				class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
			/>
		</svg>
	{/if}
</a>
