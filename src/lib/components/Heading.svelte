<script lang="ts">
import { inview } from 'svelte-inview';

export let subtitle = "";
export let title = "";
export let __typename;

let isInView = false;

const handleEnter = () => {
	isInView = true;
}

const handleLeave = ({ detail }) => {
	if (detail.scrollDirection.vertical === "down") {
		isInView = false;
	}
}
</script>

<h2
    use:inview={{
		rootMargin: "0px 0px -180px 0px",
		unobserveOnEnter: true,
	}}
    on:enter={handleEnter}
    on:leave={handleLeave}
    class="mb-12 md:mb-16 flex flex-col text-center items-center"
>
    {#if title}
        <span
            class="u-font-display uppercase text-3xl sm:text-4xl text-slate-900 u-anim-start"
            class:delay-100={isInView}
            class:u-anim-end={isInView}
        >
            { title }
        </span>
    {/if}

    {#if subtitle}
        <h3
            class="order-first font-serif uppercase text-3xl sm:text-4xl text-slate-400 u-anim-start"
            class:u-anim-end={isInView}
        >
            { subtitle }
        </h3>
    {/if}
</h2>