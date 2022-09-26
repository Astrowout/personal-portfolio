<script lang="ts">
import { onMount } from 'svelte';

export let headline;
export let image;
export let id;
export let __typename;

let loaded = false;

const preloadImage = () => {
    const img = new Image();
    img.src = image.url;
    img.onload = () => {
        loaded = true;
    };
}

onMount(() => {
    preloadImage();
});
</script>

<div class="u-space-x py-8 w-full">
    <div class="u-container-sm grid md:grid-cols-2 items-center gap-y-6">
        <div
            class="u-prose u-max-w-prose transition duration-1000 ease-out delay-300"
            class:opacity-0={!loaded}
            class:translate-y-12={!loaded}
            class:opacity-100={loaded}
            class:translate-x-0={loaded}
        >
            {@html headline.html}
        </div>

        {#if image}
            <div
                class="drop-shadow-xl transition duration-1000 ease-in-out delay-500"
                class:opacity-0={!loaded}
                class:-translate-x-16={!loaded}
                class:opacity-100={loaded}
                class:translate-x-0={loaded}
            >
                <div    
                    style="clip-path: url(#svgPath); -webkit-clip-path: url(#svgPath);" class="max-w-[240px] md:max-w-full -translate-x-1/4 md:translate-x-0 -z-10 overflow-hidden"
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