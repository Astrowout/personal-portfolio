import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/index3.js";
/* empty css                   */import { B as Button } from "../../../chunks/Button.js";
const AuthForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="w-full rounded-xl bg-stone-100 p-5 md:px-8 md:py-10 shadow-2xl shadow-black max-w-lg">${title ? `<h1 class="font-serif text-2xl md:text-3xl text-center text-stone-600">${escape(title)}</h1>` : ``}

	<form method="POST" class="flex flex-col items-center w-full mt-8"><label for="password" class="sr-only">Your password </label>

		<input id="password" name="password" type="password" placeholder="My secret password" class="w-full rounded-xl px-4 py-2 text-xl border border-stone-300">

		${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "mt-4 z-10" }, {}, {
    default: () => {
      return `Access page`;
    }
  })}</form></div>`;
});
const InfiniteGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `${$$result.head += `<!-- HEAD_svelte-1e2azqf_START -->${$$result.title = `<title>Lifescroll</title>`, ""}<!-- HEAD_svelte-1e2azqf_END -->`, ""}

<main class="bg-slate-950 w-full h-screen mx-auto max-w-screen-2xl p-4 flex items-center justify-center">${form?.success ? `${validate_component(InfiniteGrid, "InfiniteGrid").$$render($$result, {}, {}, {
    default: () => {
      return `test`;
    }
  })}` : `${validate_component(AuthForm, "AuthForm").$$render($$result, { title: "This page is private 🤫" }, {}, {})}`}</main>`;
});
export {
  Page as default
};
