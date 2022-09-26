import { c as create_ssr_component, f as add_attribute, i as is_void, e as escape, d as each, v as validate_component } from "./index.js";
import { L as Link, H as Heading } from "./Link.js";
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${((tag) => {
    return tag ? `<${className ? "span" : "a"} href="${"/"}"${add_attribute("class", className || "text-slate-900", 0)}>${is_void(tag) ? "" : `<svg class="${"w-10 fill-current"}" viewBox="${"0 0 40 40"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M24.6982 9.05999H19.84C19.6833 9.05999 19.5893 9.15402 19.558 9.27939L18.5236 20.4061C18.5236 20.6882 18.1162 20.7509 18.0222 20.4688L14.4177 9.24805C14.3864 9.12268 14.2923 9.05999 14.167 9.05999H10.8446C10.7193 9.05999 10.6252 9.12268 10.5939 9.24805L6.98946 20.4688C6.89543 20.7509 6.48797 20.6882 6.48797 20.4061L5.45366 9.27939C5.42232 9.15402 5.32829 9.05999 5.17157 9.05999H0.313429C0.156714 9.05999 0.0313429 9.18536 0.0626857 9.34207L2.78952 30.7806C2.82086 30.9373 2.91489 31.0313 3.0716 31.0313H8.71332C8.83869 31.0313 8.93272 30.9373 8.96406 30.8433L12.2237 19.9673C12.2864 19.7166 12.6312 19.7166 12.7252 19.9673L16.0476 30.8433C16.1102 30.9373 16.2043 31.0313 16.3296 31.0313H21.94C22.0654 31.0313 22.1908 30.9373 22.2221 30.7806L24.9489 9.34207C24.9803 9.18536 24.8549 9.05999 24.6982 9.05999ZM39.612 9.02865H33.5628C33.4375 9.02865 33.3434 9.12268 33.3121 9.2167L30.0211 21.8165C29.9584 22.0673 29.5823 22.0673 29.5196 21.8165L26.2286 9.2167C26.1973 9.12268 26.1032 9.02865 25.9779 9.02865H19.9287C19.7406 9.02865 19.6153 9.2167 19.6779 9.37342L26.9181 30.8746C26.9495 30.9687 27.0749 31.0313 27.1689 31.0313H32.3718C32.4658 31.0313 32.5912 30.9687 32.6225 30.8746L39.8627 9.37342C39.9254 9.2167 39.8001 9.02865 39.612 9.02865Z"}" fill="${"currentColor"}"></path></svg>`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(className ? "span" : "a")}`;
});
const REPEAT_AMOUNT = 28;
const LogoLine = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div class="${"flex items-center justify-center gap-x-8 " + escape(className, true)}">${each({ length: REPEAT_AMOUNT }, (_) => {
    return `${validate_component(Logo, "Logo").$$render($$result, { class: "text-stone-200" }, {}, {})}`;
  })}

    ${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}

    ${each({ length: REPEAT_AMOUNT }, (_) => {
    return `${validate_component(Logo, "Logo").$$render($$result, { class: "text-stone-200" }, {}, {})}`;
  })}</div>`;
});
const LinkGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { links = [] } = $$props;
  let { id } = $$props;
  let { __typename } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.__typename === void 0 && $$bindings.__typename && __typename !== void 0)
    $$bindings.__typename(__typename);
  return `<div class="${"flex flex-col gap-y-4"}">${title ? `<h4 class="${[
    "text-xl md:text-2xl text-slate-400 u-anim-start",
    ""
  ].join(" ").trim()}">${escape(title)}</h4>` : ``}
    
    ${links && !!links.length ? `<ul class="${"flex flex-col gap-y-2"}">${each(links, (link, index) => {
    return `<li class="${["u-anim-start", ""].join(" ").trim()}" style="${"transition-delay: " + escape(0, true) + "ms;"}">${validate_component(Link, "Link").$$render($$result, Object.assign(link), {}, {})}
                </li>`;
  })}</ul>` : ``}</div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const year = new Date().getFullYear();
  let { asPage = false } = $$props;
  let { heading } = $$props;
  let { body } = $$props;
  let { credits } = $$props;
  let { __typename } = $$props;
  if ($$props.asPage === void 0 && $$bindings.asPage && asPage !== void 0)
    $$bindings.asPage(asPage);
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  if ($$props.credits === void 0 && $$bindings.credits && credits !== void 0)
    $$bindings.credits(credits);
  if ($$props.__typename === void 0 && $$bindings.__typename && __typename !== void 0)
    $$bindings.__typename(__typename);
  return `${((tag) => {
    return tag ? `<${asPage ? "section" : "footer"} class="${"u-space-x flex flex-col flex-grow pointer-events-auto overflow-hidden pb-36 " + escape(
      asPage ? "pt-8" : "pt-20 footer:sticky bottom-0 w-full -z-10",
      true
    )}">${is_void(tag) ? "" : `<div class="${"u-container-sm w-full flex flex-col flex-grow justify-between"}"><div>${heading ? `${validate_component(Heading, "Heading").$$render($$result, Object.assign(heading), {}, {})}` : ``}

            <div class="${"pb-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-12 w-full"}">${each(body, (group) => {
      return `${validate_component(LinkGroup, "LinkGroup").$$render($$result, Object.assign(group), {}, {})}`;
    })}</div></div>
        
        <div><div id="${"wcb"}" class="${"carbonbadge wcb-d"}"></div>

            ${validate_component(LogoLine, "LogoLine").$$render($$result, { class: "py-4" }, {}, {})}

            <p class="${"text-stone-300 text-center"}">\xA9 ${escape(year)} woutvandesompele.be | ${escape(credits)}</p></div></div>`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(asPage ? "section" : "footer")}`;
});
export {
  Footer as F,
  Logo as L
};
