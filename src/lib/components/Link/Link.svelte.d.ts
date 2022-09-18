import { SvelteComponentTyped } from 'svelte';

export interface Props {
    class?: string;
    label: string;
    url: string;
    external: boolean;
}

export interface Slots {
    default: { slotValue: string };
}

export default class Component extends SvelteComponentTyped<Props, unknown, Slots> {}