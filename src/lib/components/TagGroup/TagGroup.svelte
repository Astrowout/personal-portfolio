
<script lang="ts">
import { fly } from 'svelte/transition';

import { inView } from "$lib/actions";
import { flyIn } from "$lib/animations";

import Tag from "../Tag/Tag.svelte";

export let tags;
export let id;
export let __typename;

let isInView = false;
</script>

<div
    use:inView
    on:enter={() => isInView = true}
>
    {#if isInView}
        <ul class="flex w-full justify-center flex-wrap -m-1.5 lg:-m-2">
            {#each tags as tag, index (tag.id)}
                <li
                    in:fly={{
                        ...flyIn,
                        delay: index * 50,
                    }}
                    class="inline-flex m-1.5 lg:m-2"
                >
                    <Tag>
                        { tag.label }
                    </Tag>
                </li>
            {/each}
        </ul>
    {/if}
</div>