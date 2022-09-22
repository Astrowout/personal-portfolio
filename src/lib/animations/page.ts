import { expoOut } from "svelte/easing";

const ANIM_DURATION = 400;

export default {
    duration: ANIM_DURATION,
    easing: expoOut,
    y: 20,
    opacity: 0,
};