<script lang="ts">
import PageBody from '../PageBody/PageBody.svelte';

export let title;
export let body;
export let cols;
export let id;
export let __typename;

let colClass = "col-span-6";

$: switch (cols) {
    case "full":
        colClass = "col-span-6";
        break;
    case "half":
        colClass = "col-span-6 lg:col-span-3";
        break;
    case "third":
        colClass = "col-span-6 md:col-span-3 lg:col-span-2";
        break;
    case "two_thirds":
        colClass = "col-span-6 lg:col-span-4";
        break;

    default:
        break;
}
</script>

<div class="rounded-xl border-2 border-slate-200 bg-slate-50 px-6 py-4 md:px-7 md:py-5 {colClass}">
    {#if title}
        <h4
            class="text-md sm:text-lg md:text-xl text-slate-400 mb-8"
        >
            { title }
        </h4>
    {/if}

    <PageBody body={body} />
</div>