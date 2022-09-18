import { SvelteComponentTyped } from 'svelte';

type Cta = {
    id: string;
    label: string;
    slug?: string;
}

export interface Props {
    class?: string;
    cta?: Cta;
}

export interface Slots {
    default: { slotValue: string };
}

export default class Component extends SvelteComponentTyped<Props, unknown, Slots> {}