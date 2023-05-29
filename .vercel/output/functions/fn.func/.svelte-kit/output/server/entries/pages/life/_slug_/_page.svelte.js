import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component, b as each } from "../../../../chunks/index3.js";
import { p as page } from "../../../../chunks/stores.js";
import { L as Lightbox, V as Video, B as BackLink } from "../../../../chunks/Lightbox.js";
import { S as Section, G as Grid, C as Card, T as Text, a as TagGroup } from "../../../../chunks/PageBody.js";
import { B as Button } from "../../../../chunks/Button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-qli6y4_START -->${$$result.title = `<title>${escape(data.previewTitle)} | Wout Vandesompele</title>`, ""}<!-- HEAD_svelte-qli6y4_END -->`, ""}

${validate_component(Section, "Section").$$render($$result, { compact: true }, {}, {
    default: () => {
      return `<h1 class="max-w-5xl text-2xl leading-snug sm:text-4xl sm:leading-snug text-center lg:text-5xl lg:leading-snug u-font-display text-slate-900">${escape(data.title)}</h1>

	${data.url ? `${validate_component(Button, "Button").$$render(
        $$result,
        {
          href: data.url,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "self-center"
        },
        {},
        {
          default: () => {
            return `${escape($page.data.t["work.liveSite"])}`;
          }
        }
      )}` : ``}`;
    }
  })}

${validate_component(Section, "Section").$$render($$result, { noSpacing: true }, {}, {
    default: () => {
      return `${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
        default: () => {
          return `${data.description ? `${validate_component(Card, "Card").$$render(
            $$result,
            {
              title: $page.data.t["work.description"],
              cols: "half"
            },
            {},
            {
              default: () => {
                return `${validate_component(Text, "Text").$$render($$result, { content: data.description }, {}, {})}`;
              }
            }
          )}` : ``}

		${data.tags && data.tags.length ? `${validate_component(TagGroup, "TagGroup").$$render(
            $$result,
            {
              tags: data.tags,
              class: "col-span-6 lg:col-span-3"
            },
            {},
            {}
          )}` : ``}`;
        }
      })}`;
    }
  })}

${data.images && data.images.length || data.video ? `${validate_component(Section, "Section").$$render($$result, { noSpacing: true }, {}, {
    default: () => {
      return `${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="col-span-6 prose max-w-full">${data.images && data.images.length ? `${each(data.images, (image) => {
            return `${validate_component(Lightbox, "Lightbox").$$render($$result, { image }, {}, {})}`;
          })}` : ``}</div>

			${data.video ? `${validate_component(Video, "Video").$$render($$result, { src: data.video.url, alt: data.video.alt }, {}, {})}` : ``}`;
        }
      })}`;
    }
  })}` : ``}

${validate_component(BackLink, "BackLink").$$render($$result, { href: "/work", class: "mx-auto" }, {}, {
    default: () => {
      return `${escape($page.data.t["work.back"])}`;
    }
  })}`;
});
export {
  Page as default
};
