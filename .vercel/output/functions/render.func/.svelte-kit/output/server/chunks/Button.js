import { c as create_ssr_component, h as spread, j as escape_object, e as escape, i as is_void } from "./index.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { class: className = "" } = $$props;
  const renderComponent = () => {
    return href ? "a" : "button";
  };
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${((tag) => {
    return tag ? `<${renderComponent()}${spread(
      [
        escape_object($$props),
        {
          class: "font-medium text-lg relative group " + escape(className, true)
        }
      ],
      {}
    )}>${is_void(tag) ? "" : `<span class="${"border-slate-200 border-2 bg-slate-50 h-10 z-10 px-6 flex items-center rounded-xl transition-transform group-hover:translate-y-0.5"}">${slots.default ? slots.default({}) : ``}</span>

    <div class="${"absolute inset-0 w-full h-full bg-slate-300 rounded-xl -z-10 translate-y-0.5"}"></div>`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(renderComponent())}`;
});
export {
  Button as B
};
