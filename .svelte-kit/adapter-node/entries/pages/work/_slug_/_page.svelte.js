import { c as create_ssr_component, v as validate_component, a as each } from "../../../../chunks/index.js";
import { u as urlFor } from "../../../../chunks/sanity.js";
import { M as MetaTags } from "../../../../chunks/rich-text.js";
import { S as Sctn_rich_text, a as Sctn_experience_list } from "../../../../chunks/sctn-experience-list.js";
import { S as Sctn_projects_list } from "../../../../chunks/sctn-projects-list.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".subpage__left-content.is-projects-page.svelte-1jqc353.svelte-1jqc353{overflow:visible !important}.subpage.is-projects-page.svelte-1jqc353.svelte-1jqc353{overflow:hidden !important}.subpage__inner.svelte-1jqc353 .subpage__left-content.svelte-1jqc353{overflow:hidden !important}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let seo = data.content.seo;
  function getCurrentProject(pHandle) {
    let projects = data.projects;
    if (!projects) {
      console.error("Projects data is missing");
      return;
    }
    projects.forEach((project) => {
      if (project.handle.current == data.projHandle) {
        seo = project.seo;
      }
    });
  }
  getCurrentProject(data.projHandle);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
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
        canonical: "https://www.canonical.ie/",
        openGraph: {
          url: "https://www.url.ie/a",
          title: seo.title,
          description: seo.description,
          images: [
            {
              url: urlFor(seo.banner_image.asset),
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
          image: urlFor(seo.banner_image.asset),
          imageAlt: seo.banner_image.alt_text ? seo.banner_image.alt_text : "Missing Alt Text"
        }
      },
      {},
      {}
    )}

<div class="subpage is-projects-page svelte-1jqc353"><div class="subpage__inner svelte-1jqc353"><div class="subpage__left-content is-projects-page svelte-1jqc353" data-left-content><div class="subpage__content-body">${data.content.page_layout ? `${each(data.content.page_layout, (section) => {
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
export {
  Page as default
};
