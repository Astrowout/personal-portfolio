import { SvelteComponentTyped } from 'svelte';
import { Props as LinkProps } from "$lib/components/Link/Link.svelte";

export interface Props {
    class?: string;
    title?: string;
    links?: LinkProps[];
}

export interface Slots {
    default: { slotValue: string };
}

export default class Component extends SvelteComponentTyped<Props, unknown, Slots> {}