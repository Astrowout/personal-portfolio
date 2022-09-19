<script lang="ts">
import { onMount } from 'svelte';
import { fly } from 'svelte/transition';
import { expoOut } from 'svelte/easing';

export let __typename;

let mounted = false;
let ANIM_DURATION = 1400;
let ANIM_DELAY = 600;
let className = "";
export { className as class };

// TODO: animate on viewport visibility
onMount(() => {
    mounted = true;
});

const lineAnim = {
    delay: ANIM_DELAY,
    duration: ANIM_DURATION,
    easing: expoOut,
};
</script>

{#if mounted}
    <div
        class="flex items-center font-medium lg:text-lg text-slate-900 bg-stone-100 rounded-xl border-2 border-slate-200 px-4 py-1 {className}"
        in:fly={lineAnim}
    >
        <slot></slot>
    </div>
{/if}