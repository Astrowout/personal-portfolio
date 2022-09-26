import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { F as Footer } from "../../../chunks/Footer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `${$$result.title = `<title>Contact | Wout Vandesompele</title>`, ""}`, ""}

${validate_component(Footer, "Footer").$$render($$result, Object.assign(data.footer, { asPage: true }), {}, {})}`;
});
export {
  Page as default
};
