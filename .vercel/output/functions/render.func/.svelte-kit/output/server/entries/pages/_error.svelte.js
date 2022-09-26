import { c as create_ssr_component, b as subscribe, e as escape } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<section class="${"u-space-x u-space-y h-full"}"><div class="${"u-container-sm flex flex-col gap-y-1 justify-center items-center"}"><h1 class="${"text-4xl sm:text-5xl u-font-display text-slate-900"}">${escape($page.status)}</h1>
    
        <p class="${"text-xl text-slate-400"}">${escape((_a = $page.error) == null ? void 0 : _a.message)}</p></div></section>`;
});
export {
  Error as default
};
