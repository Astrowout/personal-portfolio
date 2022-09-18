<script lang="ts">
export let href = "";

const renderComponent = () => {
    return href ? "a" : "button";
}
</script>

<svelte:element this={renderComponent()} {...$$props}  class="font-medium text-lg relative group">
    <span class="border-slate-200 border-2 bg-slate-50 h-10 z-10 px-6 flex items-center rounded-xl transition-transform group-hover:translate-y-0.5">
        <slot></slot>
    </span>

    <div class="absolute inset-0 bg-slate-300 rounded-xl -z-10 translate-y-0.5"></div>
</svelte:element>