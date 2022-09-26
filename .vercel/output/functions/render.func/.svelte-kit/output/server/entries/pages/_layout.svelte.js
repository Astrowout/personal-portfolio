import { c as create_ssr_component, v as validate_component, e as escape, b as subscribe, d as each, f as add_attribute } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { L as Logo, F as Footer } from "../../chunks/Footer.js";
import { B as Button } from "../../chunks/Button.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cta } = $$props;
  if ($$props.cta === void 0 && $$bindings.cta && cta !== void 0)
    $$bindings.cta(cta);
  return `<header class="${"u-space-x py-5 md:py-8 w-full bg-stone-100 relative z-10 pointer-events-auto"}"><div class="${[
    "u-container flex justify-between transition ease-in-out duration-700 delay-100",
    "-translate-y-12 opacity-0  "
  ].join(" ").trim()}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}
        
        ${cta ? `${validate_component(Button, "Button").$$render($$result, { href: "/" + cta.url }, {}, {
    default: () => {
      return `${escape(cta.label)}`;
    }
  })}` : ``}</div></header>`;
});
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let getIsActive;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { items = [] } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  getIsActive = (slug) => {
    return $page.routeId === slug || !$page.routeId && !slug;
  };
  $$unsubscribe_page();
  return `<div class="${"fixed w-full z-50 inset-x-0 bottom-6 sm:bottom-8 pointer-events-none flex justify-center"}"><nav class="${[
    "bg-slate-900/90 rounded-xl backdrop-blur-sm shadow-md pointer-events-auto transition ease-out delay-700 duration-500",
    "opacity-0 translate-y-12  "
  ].join(" ").trim()}"><ul class="${"flex text-white -mx-3 u-font-display sm:text-lg px-7"}">${each(items, (item) => {
    return `<li><a${add_attribute("href", item.slug ? `/${item.slug}` : "/", 0)} class="${[
      "block px-3 py-4 relative transition-opacity duration-300 hover:opacity-100",
      (!getIsActive(item.slug) ? "opacity-60" : "") + " " + (getIsActive(item.slug) ? "opacity-100" : "")
    ].join(" ").trim()}"><span>${escape(item.label)}</span>

                        ${$page.routeId === item.slug || !$page.routeId && !item.slug ? `<span class="${"z-10 absolute left-1/2 -translate-x-1/2 bottom-4 w-1 h-1 rounded-full bg-white transition"}"></span>` : ``}</a>
                </li>`;
  })}</ul></nav></div>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isContactPage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  isContactPage = $page.routeId === "contact";
  $$unsubscribe_page();
  return `
${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" data-svelte="svelte-t447b6"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" data-svelte="svelte-t447b6"><link href="${"https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,700;1,400&display=swap"}" rel="${"stylesheet"}" data-svelte="svelte-t447b6">`, ""}

${validate_component(Header, "Header").$$render($$result, { cta: data.mainCta }, {}, {})}

<main class="${[
    "flex flex-col flex-grow relative bg-stone-100 shadow-xl overflow-hidden z-0 pointer-events-auto transition-all duration-500 rounded-b-[40px]",
    " " + (!isContactPage ? "pb-16" : "")
  ].join(" ").trim()}"><div class="${"flex flex-col flex-grow"}">${slots.default ? slots.default({}) : ``}</div>

    <img src="${"/globe.svg"}" alt="${"globe background"}" class="${"absolute left-0 bottom-0 w-full rotate-12 -translate-x-1/3 -z-10 pointer-events-none"}"></main>

${!isContactPage ? `<div class="${"hidden footer:block w-px h-px"}"></div>

    ${validate_component(Footer, "Footer").$$render($$result, Object.assign(data.footer), {}, {})}` : ``}

${validate_component(Navigation, "Navigation").$$render($$result, { items: data.navigation }, {}, {})}

`;
});
export {
  Layout as default
};
