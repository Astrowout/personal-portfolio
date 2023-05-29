import { c as create_ssr_component, d as add_attribute, v as validate_component, g as compute_slots, e as escape, b as each, h as assign, n as now, l as loop, j as identity, a as subscribe, m as missing_component } from "./index3.js";
import { H as Heading, L as Link } from "./Link.js";
import { w as writable } from "./index2.js";
import { p as page } from "./stores.js";
import { B as Button } from "./Button.js";
function quintOut(t) {
  return --t * t * t * t * t + 1;
}
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { headline } = $$props;
  let { image } = $$props;
  const id = "";
  const __typename = "";
  if ($$props.headline === void 0 && $$bindings.headline && headline !== void 0)
    $$bindings.headline(headline);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.__typename === void 0 && $$bindings.__typename && __typename !== void 0)
    $$bindings.__typename(__typename);
  return `<div class="u-space-x py-8 lg:py-4 w-full"><div class="u-container-sm grid md:grid-cols-2 items-center gap-y-6"><div class="${[
    "u-prose u-max-w-prose transition duration-1000 ease-out delay-300",
    "opacity-0 translate-y-12  "
  ].join(" ").trim()}"><!-- HTML_TAG_START -->${headline.html}<!-- HTML_TAG_END --></div>

		${image ? `<div class="${[
    "drop-shadow-xl transition duration-1000 ease-in-out delay-500",
    "opacity-0 -translate-x-10  "
  ].join(" ").trim()}"><div style="clip-path: url(#svgPath); -webkit-clip-path: url(#svgPath);" class="max-w-[240px] md:max-w-full -translate-x-1/4 md:translate-x-0 -z-10 overflow-hidden"><img${add_attribute("alt", image.alt, 0)}${add_attribute("title", image.alt, 0)}${add_attribute("src", image.url, 0)}${add_attribute("width", image.width, 0)}${add_attribute("height", image.height, 0)} class="object-cover translate-x-[12%] -translate-y-px">

					<svg width="0" height="0"><defs><clipPath id="svgPath" clipPathUnits="objectBoundingBox"><path d="M 0.539062 0.015625 C 0.515625 -0.0078125 0.480469 -0.0078125 0.460938 0.015625 L 0.277344 0.199219 C 0.253906 0.21875 0.253906 0.253906 0.277344 0.277344 L 0.460938 0.460938 C 0.480469 0.480469 0.480469 0.515625 0.460938 0.539062 L 0.277344 0.722656 C 0.253906 0.742188 0.253906 0.777344 0.277344 0.800781 L 0.460938 0.984375 C 0.480469 1.003906 0.515625 1.003906 0.539062 0.984375 L 0.984375 0.539062 C 1.003906 0.515625 1.003906 0.480469 0.984375 0.460938 Z M 0.539062 0.015625"></path></clipPath></defs></svg></div></div>` : ``}</div></div>`;
});
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { compact = false } = $$props;
  let { noSpacing = false } = $$props;
  let { heading = null } = $$props;
  let { body = null } = $$props;
  const id = "";
  const __typename = "";
  if ($$props.compact === void 0 && $$bindings.compact && compact !== void 0)
    $$bindings.compact(compact);
  if ($$props.noSpacing === void 0 && $$bindings.noSpacing && noSpacing !== void 0)
    $$bindings.noSpacing(noSpacing);
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.__typename === void 0 && $$bindings.__typename && __typename !== void 0)
    $$bindings.__typename(__typename);
  return `<section class="${[
    "w-full u-space-x",
    (compact ? "u-space-y-sm" : "") + " " + (!compact ? "u-space-y" : "") + " " + (noSpacing ? "u-space-y-none" : "")
  ].join(" ").trim()}"><div class="u-container-sm flex flex-col">${heading ? `${validate_component(Heading, "Heading").$$render($$result, Object.assign({}, heading), {}, {})}` : ``}

		${$$slots.default ? `<div class="flex flex-col items-center gap-y-8">${slots.default ? slots.default({}) : ``}</div>` : `<div class="flex flex-col gap-y-16">${validate_component(PageBody, "PageBody").$$render($$result, { body }, {}, {})}</div>`}</div></section>`;
});
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  let { compact = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.compact === void 0 && $$bindings.compact && compact !== void 0)
    $$bindings.compact(compact);
  return `<div class="${"flex items-center font-medium text-slate-800 bg-stone-100 px-4 py-1 rounded-xl border-2 border-slate-200 " + escape(className, true) + " " + escape(compact ? "text-base" : "text-base lg:text-lg", true)}">${slots.default ? slots.default({}) : ``}</div>`;
});
const TagGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tags } = $$props;
  const id = "";
  const __typename = "";
  let { class: className = "" } = $$props;
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.__typename === void 0 && $$bindings.__typename && __typename !== void 0)
    $$bindings.__typename(__typename);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<ul class="${"flex w-full justify-center flex-wrap -m-1.5 lg:-m-2 " + escape(className, true)}">${each(tags, (tag, index) => {
    return `<li class="${["inline-flex m-1.5 lg:m-2 u-anim-start", ""].join(" ").trim()}" style="${"transition-delay: " + escape(0, true) + "ms;"}">${validate_component(Tag, "Tag").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(tag.label)}
			`;
      }
    })}
		</li>`;
  })}</ul>`;
});
const Divider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const id = "";
  const __typename = "";
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.__typename === void 0 && $$bindings.__typename && __typename !== void 0)
    $$bindings.__typename(__typename);
  return `<div class="u-space-x"><div class="u-container-sm w-full h-px bg-stone-200"></div></div>`;
});
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { body = null } = $$props;
  const id = "";
  const __typename = "";
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.__typename === void 0 && $$bindings.__typename && __typename !== void 0)
    $$bindings.__typename(__typename);
  return `<div class="w-full grid grid-cols-6 gap-x-6 gap-y-8 items-start">${$$slots.default ? `${slots.default ? slots.default({}) : ``}` : `${validate_component(PageBody, "PageBody").$$render($$result, { body }, {}, {})}`}</div>`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { title } = $$props;
  let { body = null } = $$props;
  let { images = [] } = $$props;
  let { cols } = $$props;
  const id = "";
  const __typename = "";
  let colClass = "col-span-6";
  const gridClass = cols === "full" ? "grid lg:grid-cols-2 gap-8" : "flex flex-col gap-y-8";
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.cols === void 0 && $$bindings.cols && cols !== void 0)
    $$bindings.cols(cols);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.__typename === void 0 && $$bindings.__typename && __typename !== void 0)
    $$bindings.__typename(__typename);
  {
    switch (cols) {
      case "full":
        colClass = "col-span-6";
        break;
      case "half":
        colClass = "col-span-6 lg:col-span-3";
        break;
      case "third":
        colClass = "col-span-6 lg:col-span-3 xl:col-span-2";
        break;
      case "two_thirds":
        colClass = "col-span-6 xl:col-span-4";
        break;
    }
  }
  return `<div class="${[
    "u-anim-start relative overflow-hidden rounded-xl shadow-xl shadow-stone-400/10 border-2 border-slate-200 bg-slate-50 px-5 pt-4 pb-6 md:px-7 md:pt-5 md:pb-10 " + escape(colClass, true),
    ""
  ].join(" ").trim()}">${title ? `<h4 class="text-xl md:text-2xl text-slate-400 mb-6 font-medium">${escape(title)}</h4>` : ``}

	${images && images.length ? `<div class="flex flex-wrap items-start -mx-4 -my-2">${each(images, (image) => {
    return `<img${add_attribute("alt", image.alt, 0)}${add_attribute("title", image.alt, 0)}${add_attribute("src", image.url, 0)}${add_attribute("width", image.width, 0)}${add_attribute("height", image.height, 0)} class="object-contain w-auto h-8 mx-4 my-2">`;
  })}</div>` : ``}

	<div${add_attribute("class", gridClass, 0)}>${$$slots.default ? `${slots.default ? slots.default({}) : ``}` : `${body && body.length ? `${validate_component(PageBody, "PageBody").$$render($$result, { body }, {}, {})}` : ``}`}</div></div>`;
});
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  const id = "";
  const __typename = "";
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.__typename === void 0 && $$bindings.__typename && __typename !== void 0)
    $$bindings.__typename(__typename);
  return `<div class="prose prose-lg prose-slate max-w-prose"><!-- HTML_TAG_START -->${content.html}<!-- HTML_TAG_END --></div>`;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const Progress_svelte_svelte_type_style_lang = "";
const css = {
  code: ".progress.svelte-4a4pqc{height:0.5rem;width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden;border-radius:9999px;outline-style:solid;outline-width:1px;outline-offset:1px;outline-color:#cbd5e1\n}.progress.svelte-4a4pqc::-webkit-progress-bar{--tw-bg-opacity:1;background-color:rgb(248 250 252 / var(--tw-bg-opacity));--tw-shadow:inset 0 2px 4px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:inset 0 2px 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}.progress.svelte-4a4pqc::-webkit-progress-value{border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(71 85 105 / var(--tw-bg-opacity))\n}",
  map: null
};
let ANIM_DURATION = 1600;
let ANIM_DELAY = 400;
const Progress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $progress, $$unsubscribe_progress;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value2) => $page = value2);
  let { class: className } = $$props;
  let { value = 0 } = $$props;
  const progress = tweened(0, {
    duration: ANIM_DURATION,
    delay: ANIM_DELAY,
    easing: quintOut
  });
  $$unsubscribe_progress = subscribe(progress, (value2) => $progress = value2);
  let labelKey = "progress.level_1";
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css);
  {
    if (value >= 25 && value < 50) {
      labelKey = "progress.level_2";
    } else if (value >= 50 && value < 90) {
      labelKey = "progress.level_3";
    } else if (value >= 90) {
      labelKey = "progress.level_4";
    }
  }
  $$unsubscribe_progress();
  $$unsubscribe_page();
  return `<div class="${"flex flex-grow flex-col items-center gap-y-2 " + escape(className, true) + " svelte-4a4pqc"}"><progress${add_attribute("value", $progress, 0)} max="100" class="progress svelte-4a4pqc"><span style="${"width: " + escape(value, true) + "%;"}">${escape(value)}%
		</span></progress>

	<p class="text-slate-400 text-sm">${escape($page.data.t[labelKey])}</p>
</div>`;
});
const Expertise = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { image } = $$props;
  let { progress } = $$props;
  const id = "";
  const __typename = "";
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.__typename === void 0 && $$bindings.__typename && __typename !== void 0)
    $$bindings.__typename(__typename);
  return `<div class="flex flex-col lg:flex-row lg:items-center justify-between -mx-3 -my-1.5"><div class="flex items-center gap-x-4 mx-3 my-1.5 w-40 xl:w-56">${image ? `<img${add_attribute("alt", image.alt, 0)}${add_attribute("title", image.alt, 0)}${add_attribute("src", image.url, 0)}${add_attribute("width", image.width, 0)}${add_attribute("height", image.height, 0)} class="object-contain w-10 h-10">` : ``}

		${title ? `<p class="text-lg font-medium text-slate-900">${escape(title)}</p>` : ``}</div>

	${progress ? `${validate_component(Progress, "Progress").$$render(
    $$result,
    {
      value: progress,
      class: "mx-3 my-1.5 translate-y-1"
    },
    {},
    {}
  )}` : ``}</div>`;
});
const WorkPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { slug } = $$props;
  let { image } = $$props;
  let { tags } = $$props;
  const id = "";
  const __typename = "";
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.__typename === void 0 && $$bindings.__typename && __typename !== void 0)
    $$bindings.__typename(__typename);
  return `<a href="${"/work/" + escape(slug, true)}" class="group flex flex-col relative sm:p-6 sm:pb-5"><span class="absolute inset-0 w-full h-full -z-10 rounded-xl sm:bg-slate-50 sm:border-2 border-slate-200 transition duration-300 ease-in-out lg:group-hover:drop-shadow-xl lg:group-hover:scale-105 lg:group-hover:skew-x-1 lg:group-hover:-rotate-1"></span>

	<div class="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5">${title ? `<h4 class="inline-block relative text-center text-lg sm:text-xl text-slate-800 u-font-display uppercase">${escape(title)}</h4>` : ``}

		${!!tags.length ? `${validate_component(Tag, "Tag").$$render($$result, { compact: true }, {}, {
    default: () => {
      return `${escape(tags[0].label)}`;
    }
  })}` : ``}</div>

	${image ? `<img${add_attribute("alt", image.alt, 0)}${add_attribute("src", image.url, 0)}${add_attribute("width", image.width, 0)}${add_attribute("height", image.height, 0)} class="object-contain scale-105 sm:scale-100 mt-4 w-full relative z-10 drop-shadow-md">` : ``}</a>`;
});
const WorkGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { works } = $$props;
  let { showCta = false } = $$props;
  const id = "";
  const __typename = "";
  if ($$props.works === void 0 && $$bindings.works && works !== void 0)
    $$bindings.works(works);
  if ($$props.showCta === void 0 && $$bindings.showCta && showCta !== void 0)
    $$bindings.showCta(showCta);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.__typename === void 0 && $$bindings.__typename && __typename !== void 0)
    $$bindings.__typename(__typename);
  $$unsubscribe_page();
  return `<div class="flex flex-col items-center"><div class="w-full grid lg:grid-cols-2 gap-x-10 gap-y-12 items-start">${each(works, (item, index) => {
    return `<div class="${["u-anim-start", ""].join(" ").trim()}" style="${"transition-delay: " + escape(0, true) + "ms;"}">${validate_component(WorkPreview, "WorkPreview").$$render($$result, Object.assign({}, item), {}, {})}
			</div>`;
  })}</div>

	${showCta ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "/work",
      class: "mt-16 text-center"
    },
    {},
    {
      default: () => {
        return `${escape($page.data.t["generic.allWork"])}`;
      }
    }
  )}` : ``}</div>`;
});
const Song = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { spotifySongId = "" } = $$props;
  const id = "";
  const __typename = "";
  if ($$props.spotifySongId === void 0 && $$bindings.spotifySongId && spotifySongId !== void 0)
    $$bindings.spotifySongId(spotifySongId);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.__typename === void 0 && $$bindings.__typename && __typename !== void 0)
    $$bindings.__typename(__typename);
  return `<iframe title="Spotify music player" style="border-radius:12px" class="shadow-lg max-w-sm"${add_attribute("src", `https://open.spotify.com/embed/track/${spotifySongId}`, 0)} width="100%" height="80" frameborder="0" ${""} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-slate-200 opacity-100 w-40 h-40 absolute -right-7 bottom-0 -z-10"><path stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"></path></svg>`;
});
const Stat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { number } = $$props;
  let { description } = $$props;
  const id = "";
  const __typename = "";
  let { class: className = "" } = $$props;
  if ($$props.number === void 0 && $$bindings.number && number !== void 0)
    $$bindings.number(number);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.__typename === void 0 && $$bindings.__typename && __typename !== void 0)
    $$bindings.__typename(__typename);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div class="${"flex flex-col " + escape(className, true)}"><p class="u-font-display text-4xl xl:text-5xl text-slate-900">${escape(number)}</p>

	<p class="prose prose-lg prose-slate"><!-- HTML_TAG_START -->${description.html}<!-- HTML_TAG_END --></p></div>`;
});
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { role } = $$props;
  let { time } = $$props;
  let { link } = $$props;
  let { cta } = $$props;
  let { isLast = false } = $$props;
  const id = "";
  const __typename = "";
  let { class: className = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.time === void 0 && $$bindings.time && time !== void 0)
    $$bindings.time(time);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.cta === void 0 && $$bindings.cta && cta !== void 0)
    $$bindings.cta(cta);
  if ($$props.isLast === void 0 && $$bindings.isLast && isLast !== void 0)
    $$bindings.isLast(isLast);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.__typename === void 0 && $$bindings.__typename && __typename !== void 0)
    $$bindings.__typename(__typename);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div class="${[
    "flex flex-col items-start pb-6 border-b border-b-slate-200 " + escape(className, true),
    (isLast ? "border-none" : "") + " " + (isLast ? "pb-0" : "")
  ].join(" ").trim()}"><p class="u-font-display text-lg md:text-xl text-slate-900">${escape(title)}</p>

	${time ? `<p class="mt-1 u-font-display text-slate-400">${escape(time)}</p>` : ``}

	${role ? `<p class="text-lg text-slate-600">${escape(role)}</p>` : ``}

	${link ? `${validate_component(Link, "Link").$$render($$result, Object.assign({}, link, { class: "mt-3 text-slate-400" }), {}, {})}` : ``}

	${cta ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: cta.url,
      target: "_blank",
      rel: "noopener noreferrer",
      class: "mt-3"
    },
    {},
    {
      default: () => {
        return `${escape(cta.label)}`;
      }
    }
  )}` : ``}</div>`;
});
const ExperienceGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { experiences } = $$props;
  const id = "";
  const __typename = "";
  if ($$props.experiences === void 0 && $$bindings.experiences && experiences !== void 0)
    $$bindings.experiences(experiences);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.__typename === void 0 && $$bindings.__typename && __typename !== void 0)
    $$bindings.__typename(__typename);
  return `${each(experiences, (item, index) => {
    return `${validate_component(Experience, "Experience").$$render($$result, Object.assign({}, item, { isLast: index === experiences.length - 1 }), {}, {})}`;
  })}`;
});
const PageBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const components = {
    Hero,
    Section,
    TagGroup,
    Divider,
    Grid,
    Card,
    Text,
    Expertise,
    WorkGroup,
    Song,
    Stat,
    ExperienceGroup
  };
  let { body } = $$props;
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  return `${body && !!body.length ? `${each(body, (component) => {
    return `${components[component.__typename] ? `${validate_component(components[component.__typename] || missing_component, "svelte:component").$$render($$result, Object.assign({}, component), {}, {})}` : ``}`;
  })}` : ``}`;
});
export {
  Card as C,
  Grid as G,
  PageBody as P,
  Section as S,
  Text as T,
  TagGroup as a
};
