import { c as create_ssr_component, v as validate_component, e as each } from './index-7fd3afc3.js';
import './sanity-ec4a4075.js';
import { M as MetaTags } from './rich-text-d94473b1.js';
import { S as Sctn_rich_text, a as Sctn_experience_list } from './sctn-experience-list-2b585891.js';
import { S as Sctn_projects_list } from './sctn-projects-list-d06314ab.js';
import '@sanity/client';
import '@sanity/image-url';
import './loader-0e93bf3a.js';
import 'swiper';
import 'swiper/modules';
import './stores-36296930.js';

const css = {
  code: ".subpage__left-content.is-projects-page.svelte-1jqc353.svelte-1jqc353{overflow:visible !important}.subpage.is-projects-page.svelte-1jqc353.svelte-1jqc353{overflow:hidden !important}.subpage__inner.svelte-1jqc353 .subpage__left-content.svelte-1jqc353{overflow:hidden !important}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { projects } = $$props;
  let seo = data.content.seo;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(MetaTags, "MetaTags").$$render(
      $$result,
      {
        title: seo.title,
        description: seo.description,
        canonical: seo.canonical,
        openGraph: {
          url: seo.canonical,
          title: seo.title,
          description: seo.description,
          images: [
            {
              url: seo.banner_image.url + "?auto=format&width=1200",
              width: 800,
              height: 600,
              alt: seo.banner_image.alt_text ? seo.banner_image.alt_text : "Missing Alt Text"
            }
          ],
          site_name: "SiteName"
        },
        twitter: {
          handle: "natalialassallemorillo.com",
          site: "natalialassallemorillo.com",
          cardType: "summary_large_image",
          title: seo.title,
          description: seo.description,
          image: seo.banner_image.url + "?auto=format&width=1200",
          imageAlt: seo.banner_image.alt_text ? seo.banner_image.alt_text : "Missing Alt Text"
        }
      },
      {},
      {}
    )}

<div class="subpage is-projects-page svelte-1jqc353"><div class="subpage__inner svelte-1jqc353"><div class="subpage__left-content is-projects-page svelte-1jqc353" data-left-content><div class="subpage__content-body">
        ${data.content.page_layout ? `${each(data.content.page_layout, (section) => {
      return `${section._type == "sctn_rich_text" ? `${validate_component(Sctn_rich_text, "SectionRichText").$$render($$result, { section }, {}, {})}` : ``}

            ${section._type == "sctn_experience_list" ? `${validate_component(Sctn_experience_list, "SectionExperienceList").$$render($$result, { section }, {}, {})}` : ``}

            ${section._type == "sctn_projects_list" ? `${validate_component(Sctn_projects_list, "SectionProjectsList").$$render(
        $$result,
        { projects: data.projects, seo },
        {
          seo: ($$value) => {
            seo = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : ``}`;
    })}` : ``}</div></div>

    <div class="subpage__right-content"></div></div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-3fc08310.js.map
