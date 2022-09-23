<script lang="ts">
import { page } from '$app/stores';

import Button from './Button.svelte';

export let title;
export let role;
export let time;
export let url;
export let cta;

let className = "";
export { className as class };
</script>

<div class="flex flex-col {className}">
    <p class="u-font-display text-xl text-slate-900">
        {title}
    </p>

    {#if role}
        <p class="lg:text-lg prose prose-slate font-medium">
            {$page.data.t['generic.role']} {role}
        </p>
    {/if}

    {#if url}
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            class="underline"
        >
            {url}
        </a>
    {/if}

    {#if time}
        <p class="lg:text-lg prose prose-slate">
            {time}
        </p>
    {/if}

    {#if cta}
        <Button
            href={cta.url}
            target="_blank"
            rel="noopener noreferrer"
            class="lg:text-lg prose prose-slate"
        >
            {cta.label}
        </Button>
    {/if}
</div>