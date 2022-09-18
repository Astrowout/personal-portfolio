import { SvelteComponentTyped } from 'svelte';

type Heading = {
    subtitle: string;
    title: string;
}

export interface Props {
    class?: string;
    heading: Heading;
    body: any[];
}

export interface Slots {
    default: { slotValue: string };
}

export default class Component extends SvelteComponentTyped<Props, unknown, Slots> {}