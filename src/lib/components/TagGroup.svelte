<script lang="ts">
	import { inview } from 'svelte-inview';

	import Tag from './Tag.svelte';

	export let tags;
	export const id = '';
	export const __typename = '';

	let className = '';
	export { className as class };

	let isInView = false;

	const handleEnter = () => {
		isInView = true;
	};

	const handleLeave = ({ detail }) => {
		if (detail.scrollDirection.vertical === 'down') {
			isInView = false;
		}
	};
</script>

<ul
	use:inview={{
		rootMargin: '0px 0px -180px 0px',
		unobserveOnEnter: true
	}}
	on:enter={handleEnter}
	on:leave={handleLeave}
	class="flex w-full justify-center flex-wrap -m-1.5 lg:-m-2 {className}"
>
	{#each tags as tag, index (tag.id)}
		<li
			class="inline-flex m-1.5 lg:m-2 u-anim-start"
			class:u-anim-end={isInView}
			style="transition-delay: {isInView ? index * 50 : 0}ms;"
		>
			<Tag>
				{tag.label}
			</Tag>
		</li>
	{/each}
</ul>
