import { c as create_ssr_component, o as onDestroy, v as validate_component, f as escape, e as each } from './index-7de6220d.js';
import { u as urlFor } from './sanity-f213399b.js';
import { M as MetaTags } from './MetaTags-8546f5b9.js';
import { S as Sctn_proj_list } from './sctn-proj-list-cb228b2c.js';
import '@sanity/client';
import '@sanity/image-url';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let ready = false;
  onDestroy(() => {
    ready = false;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `${validate_component(MetaTags, "MetaTags").$$render(
    $$result,
    {
      title: data.content.seo.title,
      description: data.content.seo.description,
      canonical: "https://www.canonical.ie/",
      openGraph: {
        url: "https://www.url.ie/a",
        title: data.content.seo.title,
        description: data.content.seo.description,
        images: [
          {
            url: urlFor(data.content.seo.banner_image.asset),
            width: 800,
            height: 600,
            alt: data.content.seo.banner_image.alt_text ? data.content.seo.banner_image.alt_text : "Missing Alt Text"
          }
        ],
        site_name: "SiteName"
      },
      twitter: {
        handle: "@MaisonMatador",
        site: "@MaisonMatador",
        cardType: "summary_large_image",
        title: data.content.seo.title,
        description: data.content.seo.description,
        image: urlFor(data.content.seo.banner_image.asset),
        imageAlt: data.content.seo.banner_image.alt_text ? data.content.seo.banner_image.alt_text : "Missing Alt Text"
      }
    },
    {},
    {}
  )}`, ""}

${ready ? `<div><section class="${"no-padding"}"><div class="${"visually-hidden"}"><h1>${escape(data.content.page_title)}</h1></div></section>

		${each(data.content.page_layout, (section) => {
    return `${section._type == "project_list" ? `${validate_component(Sctn_proj_list, "SctnPageProjectList").$$render($$result, { section }, {}, {})}` : ``}`;
  })}</div>` : ``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-109e20f6.js.map
