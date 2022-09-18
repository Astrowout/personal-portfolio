import { SvelteComponentTyped } from 'svelte';

interface NavItem {
    id: string;
    label: string;
    slug?: string;
}

export interface Props {
    class?: string;
    items?: NavItem[];
}

export interface Slots {
    default: { slotValue: string };
}

export default class Component extends SvelteComponentTyped<Props, unknown, Slots> {}