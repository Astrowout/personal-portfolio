<script lang="ts">
	import { onMount } from 'svelte';
    import { fly, slide, blur } from 'svelte/transition';
    import { expoOut } from 'svelte/easing';

    export let headline;
    export let image;

    let mounted = false;
    let ANIM_DURATION = 1200;
    let ANIM_DELAY = 600;

    onMount(() => {
        mounted = true;
	});

    const headlineAnim = {
        delay: ANIM_DELAY,
        duration: ANIM_DURATION,
        easing: expoOut,
    };

    const visualAnim = {
        delay: ANIM_DELAY,
        duration: ANIM_DURATION,
        x: -80,
        opacity: 1,
        easing: expoOut,
    };
</script>

<div class="px-6 sm:px-8 md:px-12 py-8 pb-20 w-full">
    <div class="max-w-screen-xl mx-auto grid md:grid-cols-2 items-center gap-y-6">
        {#if mounted}
            <div
                class="u-prose u-max-w-prose"
                transition:slide={headlineAnim}
            >
                {@html headline.html}
            </div>
        {/if}

        {#if image && mounted}
            <div
                class="drop-shadow-xl"
                transition:fly={visualAnim}
                >
                <div    
                    style="clip-path: url(#svgPath); -webkit-clip-path: url(#svgPath);" class="max-w-[240px] md:max-w-full -translate-x-1/4 md:translate-x-0 -z-10"
                    transition:blur={{ delay: ANIM_DELAY, duration: ANIM_DURATION }}
                >
                    <img
                        alt={image.alt}
                        src={image.url}
                        width={image.width}
                        height={image.height}
                        class="object-cover translate-x-[12%] -translate-y-px"
                    />
                    <svg width="0" height="0">
                        <clipPath id="svgPath" clipPathUnits="objectBoundingBox">
                            <path d="M 0.539062 0.015625 C 0.515625 -0.0078125 0.480469 -0.0078125 0.460938 0.015625 L 0.277344 0.199219 C 0.253906 0.21875 0.253906 0.253906 0.277344 0.277344 L 0.460938 0.460938 C 0.480469 0.480469 0.480469 0.515625 0.460938 0.539062 L 0.277344 0.722656 C 0.253906 0.742188 0.253906 0.777344 0.277344 0.800781 L 0.460938 0.984375 C 0.480469 1.003906 0.515625 1.003906 0.539062 0.984375 L 0.984375 0.539062 C 1.003906 0.515625 1.003906 0.480469 0.984375 0.460938 Z M 0.539062 0.015625" />
                        </clipPath>
                    </svg>
                </div>
            </div>
        {/if}
    </div>
</div>