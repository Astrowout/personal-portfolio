import { SvelteComponentTyped } from 'svelte';

export interface Props {
    class?: string;
    value: number;
}

export interface Slots {
    default: { slotValue: string };
}

export default class Component extends SvelteComponentTyped<Props, unknown, Slots> {}