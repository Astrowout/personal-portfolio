import { c as create_ssr_component, d as add_attribute, e as escape, o as onDestroy } from "./index3.js";
import "plyr";
const BackLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "/" } = $$props;
  let { class: className = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<a${add_attribute("href", href, 0)} class="${"border-slate-200 bg-slate-50 mr-auto border-2 rounded-xl flex items-center h-8 px-4 gap-1.5 group " + escape(className, true)}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 transition-transform group-hover:-translate-x-1"><path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd"></path></svg>

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
  return `<video playsinline controls${add_attribute("title", alt, 0)}${add_attribute("alt", alt, 0)} class="w-full"${add_attribute("this", videoEl, 0)}><source${add_attribute("src", src, 0)} type="video/mp4"><track kind="captions" label="English captions" default></video>`;
});
const Lightbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image = null } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  return `<a${add_attribute("href", image.url, 0)} target="_blank" rel="noopener noreferrer" class="w-full"><img${add_attribute("alt", image.alt, 0)}${add_attribute("src", image.url, 0)}${add_attribute("width", image.width, 0)}${add_attribute("height", image.height, 0)} class="object-contain w-full rounded-xl shadow"></a>`;
});
export {
  BackLink as B,
  Lightbox as L,
  Video as V
};
