import { c as create_ssr_component, e as escape, f as add_attribute } from "./index.js";
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { subtitle = "" } = $$props;
  let { title = "" } = $$props;
  let { __typename } = $$props;
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.__typename === void 0 && $$bindings.__typename && __typename !== void 0)
    $$bindings.__typename(__typename);
  return `<h2 class="${"mb-12 md:mb-16 flex flex-col text-center items-center"}">${title ? `<span class="${[
    "u-font-display uppercase text-3xl sm:text-4xl text-slate-900 u-anim-start",
    " "
  ].join(" ").trim()}">${escape(title)}</span>` : ``}

    ${subtitle ? `<h3 class="${[
    "order-first font-serif uppercase text-3xl sm:text-4xl text-slate-400 u-anim-start",
    ""
  ].join(" ").trim()}">${escape(subtitle)}</h3>` : ``}</h2>`;
});
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { url = "" } = $$props;
  let { external = false } = $$props;
  let { __typename } = $$props;
  let { class: className = "" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.external === void 0 && $$bindings.external && external !== void 0)
    $$bindings.external(external);
  if ($$props.__typename === void 0 && $$bindings.__typename && __typename !== void 0)
    $$bindings.__typename(__typename);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<a${add_attribute("href", url, 0)} class="${"flex items-center gap-x-1.5 text-lg group hover:underline text-slate-900 " + escape(className, true)}" rel="${"noopener noreferrer"}"${add_attribute("target", external ? "_blank" : "self", 0)}>${escape(label)}

    ${external ? `<svg viewBox="${"0 0 20 20"}" fill="${"currentColor"}" class="${"w-4 h-4"}"><path fill-rule="${"evenodd"}" d="${"M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"}" clip-rule="${"evenodd"}"></path><path fill-rule="${"evenodd"}" d="${"M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"}" clip-rule="${"evenodd"}" class="${"transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}"></path></svg>` : ``}</a>`;
});
export {
  Heading as H,
  Link as L
};
