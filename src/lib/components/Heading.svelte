<script lang="ts">
	import { inview } from '$lib/directives/inview';

	interface Props {
		subtitle?: string;
		title?: string;
	}

	let { subtitle = '', title = '' }: Props = $props();
	export const __typename = '';

	let isInView = $state(false);

	const handleEnter = () => {
		isInView = true;
	};

	const handleLeave = ({ detail }) => {
		if (detail.scrollDirection.vertical === 'down') {
			isInView = false;
		}
	};
</script>

<h2
	use:inview={{
		rootMargin: '0px 0px -180px 0px',
		unobserveOnEnter: true
	}}
	oninview_enter={handleEnter}
	oninview_leave={handleLeave}
	class="mb-12 md:mb-16 flex flex-col text-center items-center"
>
	{#if title}
		<span
			class="text-3xl sm:text-4xl text-slate-900 u-anim-start font-bold"
			class:delay-100={isInView}
			class:u-anim-end={isInView}
		>
			{title}
		</span>
	{/if}

	{#if subtitle}
		<span
			class="order-first text-3xl sm:text-4xl text-slate-400 u-anim-start"
			class:u-anim-end={isInView}
		>
			{subtitle}
		</span>
	{/if}
</h2>
