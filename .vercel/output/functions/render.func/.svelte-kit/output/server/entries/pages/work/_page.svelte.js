import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { P as PageBody } from "../../../chunks/PageBody.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `${$$result.title = `<title>Work | Wout Vandesompele</title>`, ""}`, ""}

${validate_component(PageBody, "PageBody").$$render($$result, { body: data.body }, {}, {})}`;
});
export {
  Page as default
};
