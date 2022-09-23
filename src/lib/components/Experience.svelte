<script lang="ts">
import Link from './Link.svelte';
import Button from './Button.svelte';

export let title;
export let role;
export let time;
export let link;
export let cta;
export let isLast = false;
export let id;
export let __typename;

let className = "";
export { className as class };
</script>

<div
    class="flex flex-col items-start pb-4 border-b border-b-slate-200 {className}"
    class:border-none={isLast}
    class:pb-0={isLast}
>
    <p class="u-font-display text-lg md:text-xl text-slate-900">
        {title}
    </p>

    {#if time}
        <p class="mt-1 u-font-display text-slate-500">
            {time}
        </p>
    {/if}

    {#if role}
        <p class="text-lg text-slate-600">
            {role}
        </p>
    {/if}

    {#if link}
        <Link
            {...link}
            class="mt-3 text-slate-500"
        />
    {/if}

    {#if cta}
        <Button
            href={cta.url}
            target="_blank"
            rel="noopener noreferrer"
            class="mt-3"
        >
            {cta.label}
        </Button>
    {/if}
</div>