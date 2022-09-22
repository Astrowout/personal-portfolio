
<script lang="ts">
import { inview } from 'svelte-inview';

import Tag from "../Tag/Tag.svelte";

export let tags;
export let id;
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

<ul
    use:inview={{ rootMargin: "0px 0px -120px 0px", threshold: 0.2 }}
    on:enter={handleEnter}
    on:leave={handleLeave}
    class="flex w-full justify-center flex-wrap -m-1.5 lg:-m-2"
>
    {#each tags as tag, index (tag.id)}
        <li
            class="inline-flex m-1.5 lg:m-2 u-anim-start"
            class:u-anim-end={isInView}
            style="transition-delay: {isInView ? index * 50 : 0}ms;"
        >
            <Tag>
                { tag.label }
            </Tag>
        </li>
    {/each}
</ul>