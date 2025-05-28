import { c as create_ssr_component, v as validate_component, a as each } from "../../../chunks/ssr.js";
import "../../../chunks/sanity.js";
import { M as MetaTags } from "../../../chunks/rich-text.js";
import { S as Sctn_rich_text, a as Sctn_experience_list } from "../../../chunks/sctn-experience-list.js";
import { S as Sctn_projects_list } from "../../../chunks/sctn-projects-list.js";
const css = {
  code: ".subpage__left-content.is-projects-page.svelte-1jqc353.svelte-1jqc353{overflow:visible !important}.subpage.is-projects-page.svelte-1jqc353.svelte-1jqc353{overflow:hidden !important}.subpage__inner.svelte-1jqc353 .subpage__left-content.svelte-1jqc353{overflow:hidden !important}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n// @ts-nocheck\\nimport { urlFor } from \\"$lib/sanity\\";\\nimport { MetaTags } from \\"svelte-meta-tags\\";\\nimport SectionRichText from \\"../../components/sections/sctn-rich-text.svelte\\";\\nimport SectionProjectsList from \\"../../components/sections/sctn-projects-list.svelte\\";\\nimport SectionExperienceList from \\"../../components/sections/sctn-experience-list.svelte\\";\\nexport let data;\\nexport let projects;\\nlet seo = data.content.seo;\\n<\/script>\\n\\n<MetaTags\\n  title={seo.title}\\n  description={seo.description}\\n  canonical={seo.canonical}\\n  openGraph={{\\n    url: seo.canonical,\\n    title: seo.title,\\n    description: seo.description,\\n    images: [\\n      {\\n        url: seo.banner_image.url + \\"?auto=format&width=1200\\",\\n        width: 800,\\n        height: 600,\\n        alt: seo.banner_image.alt_text\\n          ? seo.banner_image.alt_text\\n          : \\"Missing Alt Text\\",\\n      },\\n    ],\\n    site_name: \\"SiteName\\",\\n  }}\\n  twitter={{\\n    handle: \\"natalialassallemorillo.com\\",\\n    site: \\"natalialassallemorillo.com\\",\\n    cardType: \\"summary_large_image\\",\\n    title: seo.title,\\n    description: seo.description,\\n    image: seo.banner_image.url + \\"?auto=format&width=1200\\",\\n    imageAlt: seo.banner_image.alt_text\\n      ? seo.banner_image.alt_text\\n      : \\"Missing Alt Text\\",\\n  }}\\n/>\\n\\n<div class=\\"subpage is-projects-page\\">\\n  <div class=\\"subpage__inner\\">\\n    <div class=\\"subpage__left-content is-projects-page\\" data-left-content>\\n      <div class=\\"subpage__content-body\\">\\n        <!-- <section class=\\"no-padding\\">\\n\\t\\t\\t\\t\\t\\t<div >\\n\\t\\t\\t\\t\\t\\t\\t<h1>{$page.data.content.page_title}</h1>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</section> -->\\n        {#if data.content.page_layout}\\n          {#each data.content.page_layout as section}\\n            {#if section._type == \\"sctn_rich_text\\"}\\n              <SectionRichText {section} />\\n            {/if}\\n\\n            {#if section._type == \\"sctn_experience_list\\"}\\n              <SectionExperienceList {section} />\\n            {/if}\\n\\n            {#if section._type == \\"sctn_projects_list\\"}\\n              <SectionProjectsList projects={data.projects} bind:seo />\\n            {/if}\\n          {/each}\\n        {/if}\\n      </div>\\n    </div>\\n\\n    <div class=\\"subpage__right-content\\" />\\n  </div>\\n</div>\\n\\n<style>\\n.subpage__left-content.is-projects-page {\\n  overflow: visible !important;\\n}\\n\\n.subpage.is-projects-page {\\n  overflow: hidden !important;\\n}\\n.subpage__inner .subpage__left-content {\\n  overflow: hidden !important;\\n}\\n</style>\\n"],"names":[],"mappings":"AA6EA,sBAAsB,+CAAkB,CACtC,QAAQ,CAAE,OAAO,CAAC,UACpB,CAEA,QAAQ,+CAAkB,CACxB,QAAQ,CAAE,MAAM,CAAC,UACnB,CACA,8BAAe,CAAC,qCAAuB,CACrC,QAAQ,CAAE,MAAM,CAAC,UACnB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { projects } = $$props;
  let seo = data.content.seo;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0) $$bindings.projects(projects);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
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
    )} <div class="subpage is-projects-page svelte-1jqc353"><div class="subpage__inner svelte-1jqc353"><div class="subpage__left-content is-projects-page svelte-1jqc353" data-left-content><div class="subpage__content-body"> ${data.content.page_layout ? `${each(data.content.page_layout, (section) => {
      return `${section._type == "sctn_rich_text" ? `${validate_component(Sctn_rich_text, "SectionRichText").$$render($$result, { section }, {}, {})}` : ``} ${section._type == "sctn_experience_list" ? `${validate_component(Sctn_experience_list, "SectionExperienceList").$$render($$result, { section }, {}, {})}` : ``} ${section._type == "sctn_projects_list" ? `${validate_component(Sctn_projects_list, "SectionProjectsList").$$render(
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
    })}` : ``}</div></div> <div class="subpage__right-content"></div></div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
