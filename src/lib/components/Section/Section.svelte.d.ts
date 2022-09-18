import { SvelteComponentTyped } from 'svelte';

import { Props as HeadingProps } from "../Heading/Heading.svelte";

export interface Props {
    class?: string;
    heading: HeadingProps;
    body: any[];
}

export interface Slots {
    default: { slotValue: string };
}

export default class Component extends SvelteComponentTyped<Props, unknown, Slots> {}