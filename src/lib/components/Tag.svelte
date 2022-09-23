<script lang="ts">
let className = "";
export { className as class };
</script>

<div class="flex items-center font-medium lg:text-lg text-slate-900 bg-stone-100 rounded-xl border-2 border-slate-200 px-4 py-1 {className}">
    <slot></slot>
</div>