import { c as create_ssr_component, a as subscribe, e as escape } from "../../chunks/index3.js";
import { p as page } from "../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const data = null;
  const form = null;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$unsubscribe_page();
  return `<section class="u-space-x u-space-y h-full"><div class="u-container-sm flex flex-col gap-y-1 justify-center items-center"><h1 class="text-4xl sm:text-5xl u-font-display text-slate-900">${escape($page.status)}</h1>

		<p class="text-xl text-slate-400">${escape($page.error?.message)}</p></div></section>`;
});
export {
  Error as default
};
