import { c as create_ssr_component, s as subscribe, v as validate_component, e as each } from './index-7fd3afc3.js';
import './sanity-ec4a4075.js';
import { M as MetaTags } from './rich-text-d94473b1.js';
import { p as page } from './stores-36296930.js';
import { S as Sctn_rich_text, a as Sctn_experience_list } from './sctn-experience-list-2b585891.js';
import 'swiper';
import 'swiper/modules';
import { F as Featured_projects_slideshow } from './featured-projects-slideshow-6580fe51.js';
import '@sanity/client';
import '@sanity/image-url';

const css = {
  code: "@media screen and (min-width: 900px){.main-container.svelte-xzzq7k{padding-top:var(--level6)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let { seo } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.seo === void 0 && $$bindings.seo && seo !== void 0)
    $$bindings.seo(seo);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-6jst4i_START -->${validate_component(MetaTags, "MetaTags").$$render(
    $$result,
    {
      title: $page.data.content.seo.title,
      description: $page.data.content.seo.description,
      canonical: "https://natalialassallemorillo.com/contact",
      openGraph: {
        url: "https://natalialassallemorillo.com/contact",
        title: $page.data.content.seo.title,
        description: $page.data.content.seo.description,
        images: [
          {
            url: $page.data.content.seo.banner_image.url + "?auto=format&width=1200",
            width: 800,
            height: 600,
            alt: $page.data.content.seo.banner_image.alt_text ? $page.data.content.seo.banner_image.alt_text : "Missing Alt Text"
          }
        ],
        site_name: "SiteName"
      },
      twitter: {
        handle: "natalialassallemorillo.com",
        site: "natalialassallemorillo.com",
        cardType: "summary_large_image",
        title: $page.data.content.seo.title,
        description: $page.data.content.seo.description,
        image: $page.data.content.seo.banner_image.url + "?auto=format&width=1200",
        imageAlt: $page.data.content.seo.banner_image.alt_text ? $page.data.content.seo.banner_image.alt_text : "Missing Alt Text"
      }
    },
    {},
    {}
  )}<!-- HEAD_svelte-6jst4i_END -->`, ""}

<div class="subpage"><div class="subpage__inner"><div class="subpage__left-content" data-left-content><div class="subpage__content-body main-container svelte-xzzq7k">${data.content.page_layout ? `${each(data.content.page_layout, (section) => {
    return `${section._type == "sctn_rich_text" ? `${validate_component(Sctn_rich_text, "SectionRichText").$$render($$result, { section }, {}, {})}` : ``}

            ${section._type == "sctn_experience_list" ? `${validate_component(Sctn_experience_list, "SectionExperienceList").$$render($$result, { section }, {}, {})}` : ``}`;
  })}` : ``}</div></div>

    <div class="subpage__right-content">${validate_component(Featured_projects_slideshow, "FeaturedProjectsSlideshow").$$render($$result, {}, {}, {})}</div></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a728593d.js.map
