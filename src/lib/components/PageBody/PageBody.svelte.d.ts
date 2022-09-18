import { SvelteComponentTyped } from 'svelte';

export interface Props {
    class?: string;
    body: any;
}

export interface Slots {
    default: { slotValue: string };
}

export default class Component extends SvelteComponentTyped<Props, unknown, Slots> {}