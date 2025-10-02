<script lang="ts">
	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { page } from '$app/stores';

	let className;
	export { className as class };
	export let value = 0;

	let ANIM_DURATION = 1600;
	let ANIM_DELAY = 400;

	const progress = tweened(0, {
		duration: ANIM_DURATION,
		delay: ANIM_DELAY,
		easing: quintOut
	});

	// TODO: animate on viewport visibility
	onMount(() => {
		$progress = value;
	});

	const labelKey = $derived.by(() => {
		if (value >= 25 && value < 50) {
			return 'progress.level_2';
		} else if (value >= 50 && value < 90) {
			return 'progress.level_3';
		} else if (value >= 90) {
			return 'progress.level_4';
		} else {
			return 'progress.level_1';
		}
	});
</script>

<div class="flex flex-grow flex-col items-center gap-y-2 {className}">
	<progress value={$progress} max="100" class="progress">
		<span style="width: {value}%;">
			{value}%
		</span>
	</progress>

	<p class="text-slate-400 text-sm">
		{$page.data.t[labelKey]}
	</p>
</div>

<style lang="css">
	.progress {
		@apply appearance-none w-full h-2 rounded-full overflow-hidden outline outline-1 outline-offset-1 outline-slate-300;
	}

	.progress::-webkit-progress-bar {
		@apply bg-slate-50 shadow-inner;
	}

	.progress::-webkit-progress-value {
		@apply bg-slate-600 rounded-full;
	}
</style>
