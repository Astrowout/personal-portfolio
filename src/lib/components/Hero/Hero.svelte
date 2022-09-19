<script lang="ts">
import { onMount } from 'svelte';
import { fly, blur } from 'svelte/transition';
import { expoOut } from 'svelte/easing';

export let headline;
export let image;
export let id;
export let __typename;

let mounted = false;
let ANIM_DURATION = 1400;
let ANIM_DELAY = 600;

onMount(() => {
    mounted = true;
});

const headlineAnim = {
    delay: ANIM_DELAY,
    duration: ANIM_DURATION,
    y: 40,
    opacity: 0,
    easing: expoOut,
};

const visualAnim = {
    delay: ANIM_DELAY + 200,
    duration: ANIM_DURATION,
    x: -80,
    opacity: 1,
    easing: expoOut,
};
</script>

<div class="u-space-x py-8 w-full">
    <div class="u-container-sm grid md:grid-cols-2 items-center gap-y-6">
        {#if mounted}
            <div
                class="u-prose u-max-w-prose"
                in:fly={headlineAnim}
            >
                {@html headline.html}
            </div>
        {/if}

        {#if image && mounted}
            <div
                class="drop-shadow-xl"
                in:fly={visualAnim}
                >
                <div    
                    style="clip-path: url(#svgPath); -webkit-clip-path: url(#svgPath);" class="max-w-[240px] md:max-w-full -translate-x-1/4 md:translate-x-0 -z-10 overflow-hidden"
                    in:blur={{ delay: ANIM_DELAY + 200, duration: ANIM_DURATION, amount: 20 }}
                >
                    <img
                        alt={image.alt}
                        title={image.alt}
                        src={image.url}
                        width={image.width}
                        height={image.height}
                        class="object-cover translate-x-[12%] -translate-y-px"
                    />
                    <svg width="0" height="0">
                        <defs>
                            <clipPath id="svgPath" clipPathUnits="objectBoundingBox">
                                <path d="M 0.539062 0.015625 C 0.515625 -0.0078125 0.480469 -0.0078125 0.460938 0.015625 L 0.277344 0.199219 C 0.253906 0.21875 0.253906 0.253906 0.277344 0.277344 L 0.460938 0.460938 C 0.480469 0.480469 0.480469 0.515625 0.460938 0.539062 L 0.277344 0.722656 C 0.253906 0.742188 0.253906 0.777344 0.277344 0.800781 L 0.460938 0.984375 C 0.480469 1.003906 0.515625 1.003906 0.539062 0.984375 L 0.984375 0.539062 C 1.003906 0.515625 1.003906 0.480469 0.984375 0.460938 Z M 0.539062 0.015625" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        {/if}
    </div>
</div>