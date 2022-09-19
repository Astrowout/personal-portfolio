<script lang="ts">
import { onMount } from 'svelte';
import { cubicOut } from 'svelte/easing';
import { tweened } from 'svelte/motion';

export let value = 0;
export let __typename;

let ANIM_DURATION = 1400;
let ANIM_DELAY = 300;

const progress = tweened(0, {
    duration: ANIM_DURATION,
    delay: ANIM_DELAY,
    easing: cubicOut
});

// TODO: animate on viewport visibility
onMount(() => {
    $progress = value;
});
</script>

<progress
    value={$progress}
    max="100"
></progress>