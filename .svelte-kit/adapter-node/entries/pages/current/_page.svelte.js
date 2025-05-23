import { c as create_ssr_component, a as each, v as validate_component, s as subscribe } from "../../../chunks/index.js";
import "../../../chunks/sanity.js";
import { M as MetaTags } from "../../../chunks/rich-text.js";
import { p as page } from "../../../chunks/stores.js";
import { S as Sctn_rich_text, a as Sctn_experience_list } from "../../../chunks/sctn-experience-list.js";
import { S as Sctn_projects_list } from "../../../chunks/sctn-projects-list.js";
const Layout_subpage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { seo } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.seo === void 0 && $$bindings.seo && seo !== void 0)
    $$bindings.seo(seo);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="subpage"><div class="subpage__inner"><div class="subpage__left-content" data-left-content><div class="subpage__content-body">
        ${data.content.page_layout ? `${each(data.content.page_layout, (section) => {
      return `${section._type == "sctn_rich_text" ? `${validate_component(Sctn_rich_text, "SectionRichText").$$render($$result, { section }, {}, {})}` : ``}

            ${section._type == "sctn_experience_list" ? `${validate_component(Sctn_experience_list, "SectionExperienceList").$$render($$result, { section }, {}, {})}` : ``}

            ${section._type == "sctn_projects_list" && data.projects ? `${validate_component(Sctn_projects_list, "SectionProjectsList").$$render(
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

    <div class="subpage__right-content"></div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-px1s48_START -->${validate_component(MetaTags, "MetaTags").$$render(
    $$result,
    {
      title: $page.data.content.seo.title,
      description: $page.data.content.seo.description,
      canonical: "https://natalialassallemorillo.com/current",
      openGraph: {
        url: "https://natalialassallemorillo.com/current",
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
  )}<!-- HEAD_svelte-px1s48_END -->`, ""}

${validate_component(Layout_subpage, "LayoutSubpage").$$render($$result, { data }, {}, {})}`;
});
export {
  Page as default
};
