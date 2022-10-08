<script lang="ts">
import Heading from './Heading.svelte';
import LogoLine from './LogoLine.svelte';
import LinkGroup from './LinkGroup.svelte';

const year = new Date().getFullYear();

export let asPage = false;
export let heading;
export let body;
export let credits;
export let __typename;
</script>

<svelte:element
    this={asPage ? 'section' : 'footer'}
    class="u-space-x flex flex-col flex-grow pointer-events-auto overflow-hidden pb-36 {asPage ? 'pt-8' : 'pt-20 footer:sticky bottom-0 w-full -z-10'}"
>
    <div class="u-container-sm w-full flex flex-col flex-grow justify-between">
        <div>
            {#if heading}
                <Heading {...heading} />
            {/if}

            <div class="pb-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-12 w-full">
                {#each body as group (group.id)}
                    <LinkGroup {...group} />
                {/each}
            </div>
        </div>
        
        <div>
            <div id="wcb" class="carbonbadge"><style>#wcb.carbonbadge{--b1:#0e11a8;--b2:#00ffbc;font-size:15px;text-align:center;color:var(--b1);line-height:1.15}#wcb.carbonbadge sub{vertical-align:middle;position:relative;top:.3em;font-size:.7em}#wcb #wcb_2,#wcb #wcb_a,#wcb #wcb_g{display:inline-flex;justify-content:center;align-items:center;text-align:center;font-size:1em;line-height:1.15;font-family:-apple-system,BlinkMacSystemFont,sans-serif;text-decoration:none;margin:.2em 0}#wcb #wcb_a,#wcb #wcb_g{padding:.3em .5em;border:.13em solid var(--b2)}#wcb #wcb_g{border-radius:.3em 0 0 .3em;background:#fff;border-right:0;min-width:8.2em}#wcb #wcb_a{border-radius:0 .3em .3em 0;border-left:0;background:var(--b1);color:#fff;font-weight:700;border-color:var(--b1)}#wcb.wcb-d #wcb_a{color:var(--b1);background:var(--b2);border-color:var(--b2)}#wcb.wcb-d #wcb_2{color:#fff}</style><div id="wcb_p"><span id="wcb_g">0.13g of CO<sub>2</sub>/view</span><a id="wcb_a" target="_blank" rel="noopener" href="https://websitecarbon.com">Website Carbon</a></div><span id="wcb_2">&nbsp;Cleaner than 87% of pages tested</span></div>

            <LogoLine class="py-4" />

            <p class="text-stone-300 text-center">
                © {year} woutvandesompele.be | {credits}
            </p>
        </div>
    </div>
</svelte:element>