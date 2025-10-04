<!-- @migration-task Error while migrating Svelte code: Cannot use `export let` in runes mode — use `$props()` instead
https://svelte.dev/e/legacy_export_invalid -->
<script lang="ts">
	const { value, class: className } = $props();

	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { page } from '$app/stores';

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

<div class="flex grow flex-col items-center gap-y-2 {className}">
	<progress value={$progress} max="100" class="appearance-none w-full h-2 rounded-full overflow-hidden outline outline-1 outline-offset-1 outline-slate-300 [&::-webkit-progress-bar]:bg-slate-50 [&::-webkit-progress-bar]:shadow-inner [&::-webkit-progress-value]:bg-slate-600 [&::-webkit-progress-value]:rounded-full">
		<span style="width: {value}%;">
			{value}%
		</span>
	</progress>

	<p class="text-slate-400 text-sm">
		{$page.data.t[labelKey]}
	</p>
</div>
