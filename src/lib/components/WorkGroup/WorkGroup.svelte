<script lang="ts">
import { inview } from 'svelte-inview';

import WorkPreview from '../WorkPreview/WorkPreview.svelte';

export let works;
export let id;
export let __typename;

let isInView = false;

const getColClass = (cols) => {
	switch (cols) {
		case "full":
			return "col-span-6";

		case "half":
			return "col-span-6 md:col-span-3";

		case "third":
			return "col-span-6 md:col-span-3 lg:col-span-2";

		case "two_thirds":
			return "col-span-6 lg:col-span-4";

		default:
			return "col-span-6";
	}
}

const handleEnter = () => {
	isInView = true;
}

const handleLeave = ({ detail }) => {
	if (detail.scrollDirection.vertical === "down") {
		isInView = false;
	}
}
</script>

<div
	use:inview={{ rootMargin: "0px 0px -180px 0px", threshold: 0.2 }}
	on:enter={handleEnter}
	on:leave={handleLeave}
	class="w-full grid grid-cols-6 gap-6 lg:gap-8 items-start"
>
	{#each works as item, index (item.id)}
		<div
			class="u-anim-start {getColClass(item.cols)}"
			class:u-anim-end={isInView}
			style="transition-delay: {isInView ? index * 120 : 0}ms;"
		>
			<WorkPreview {...item} />
		</div>
	{/each}
</div>