import { c as create_ssr_component, f as add_attribute, e as escape, r as onDestroy, b as subscribe, v as validate_component, d as each } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import { S as Section, G as Grid, C as Card, T as Text, a as TagGroup } from "../../../../chunks/PageBody.js";
import { B as Button } from "../../../../chunks/Button.js";
import "plyr";
const BackLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "/" } = $$props;
  let { class: className = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<a${add_attribute("href", href, 0)} class="${"border-slate-200 bg-slate-50 mr-auto border-2 rounded-xl flex items-center h-8 px-4 gap-1.5 group " + escape(className, true)}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" class="${"w-4 h-4 transition-transform group-hover:-translate-x-1"}"><path fill-rule="${"evenodd"}" d="${"M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"}" clip-rule="${"evenodd"}"></path></svg>

    <span>${slots.default ? slots.default({}) : ``}</span></a>`;
});
const plyr = "";
const Video = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src = "" } = $$props;
  let { alt = "" } = $$props;
  let videoEl = null;
  onDestroy(() => {
  });
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `<video playsinline controls${add_attribute("title", alt, 0)}${add_attribute("alt", alt, 0)} class="${"w-full"}"${add_attribute("this", videoEl, 0)}><source${add_attribute("src", src, 0)} type="${"video/mp4"}"><track kind="${"captions"}" label="${"English captions"}" default></video>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>${escape(data.previewTitle)} | Wout Vandesompele</title>`, ""}`, ""}

${validate_component(Section, "Section").$$render($$result, { compact: true }, {}, {
    default: () => {
      return `<h1 class="${"max-w-5xl text-2xl leading-snug sm:text-4xl sm:leading-snug text-center lg:text-5xl lg:leading-snug u-font-display text-slate-900"}">${escape(data.title)}</h1>

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
          return `<div class="${"col-span-6 prose max-w-full"}">${data.images && data.images.length ? `${each(data.images, (image) => {
            return `<img${add_attribute("alt", image.alt, 0)}${add_attribute("src", image.url, 0)}${add_attribute("width", image.width, 0)}${add_attribute("height", image.height, 0)} class="${"object-contain rounded-xl shadow"}">`;
          })}` : ``}</div>

            ${data.video ? `${validate_component(Video, "Video").$$render($$result, { src: data.video.url, alt: data.video.alt }, {}, {})}` : ``}`;
        }
      })}

        ${validate_component(BackLink, "BackLink").$$render($$result, { href: "/work", class: "mx-auto mt-8" }, {}, {
        default: () => {
          return `${escape($page.data.t["work.back"])}`;
        }
      })}`;
    }
  })}` : ``}`;
});
export {
  Page as default
};
