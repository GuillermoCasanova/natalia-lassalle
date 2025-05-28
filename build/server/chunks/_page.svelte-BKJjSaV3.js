import { c as create_ssr_component, o as subscribe, q as each, v as validate_component } from './exports-DiiVpNfQ.js';
import { M as MetaTags } from './rich-text-C-lTZTxO.js';
import { p as page } from './stores-Cl-qjfw1.js';
import { S as Sctn_rich_text, a as Sctn_experience_list } from './sctn-experience-list-B7d5IBOU.js';
import { F as Featured_projects_slideshow } from './featured-projects-slideshow-CYUvos6Q.js';
import './sanity-DpqZfrM0.js';
import '@sanity/client';
import '@sanity/image-url';
import 'swiper';
import 'swiper/modules';

const css = {
  code: "@media screen and (min-width: 900px){.main-container.svelte-xzzq7k{padding-top:var(--level6)}}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\nimport { MetaTags } from \\"svelte-meta-tags\\";\\nimport { page } from \\"$app/stores\\";\\nimport SectionRichText from \\"../../components/sections/sctn-rich-text.svelte\\";\\nimport SectionExperienceList from \\"../../components/sections/sctn-experience-list.svelte\\";\\nimport FeaturedProjectsSlideshow from \\"../../components/featured-projects-slideshow.svelte\\";\\nexport let data;\\nexport let seo;\\n<\/script>\\n\\n<svelte:head>\\n  <MetaTags\\n    title={$page.data.content.seo.title}\\n    description={$page.data.content.seo.description}\\n    canonical=\\"https://natalialassallemorillo.com/about\\"\\n    openGraph={{\\n      url: \\"https://natalialassallemorillo.com/about\\",\\n      title: $page.data.content.seo.title,\\n      description: $page.data.content.seo.description,\\n      images: [\\n        {\\n          url:\\n            $page.data.content.seo.banner_image.url + \\"?auto=format&width=1200\\",\\n          width: 800,\\n          height: 600,\\n          alt: $page.data.content.seo.banner_image.alt_text\\n            ? $page.data.content.seo.banner_image.alt_text\\n            : \\"Missing Alt Text\\",\\n        },\\n      ],\\n      site_name: \\"SiteName\\",\\n    }}\\n    twitter={{\\n      handle: \\"natalialassallemorillo.com\\",\\n      site: \\"natalialassallemorillo.com\\",\\n      cardType: \\"summary_large_image\\",\\n      title: $page.data.content.seo.title,\\n      description: $page.data.content.seo.description,\\n      image:\\n        $page.data.content.seo.banner_image.url + \\"?auto=format&width=1200\\",\\n      imageAlt: $page.data.content.seo.banner_image.alt_text\\n        ? $page.data.content.seo.banner_image.alt_text\\n        : \\"Missing Alt Text\\",\\n    }}\\n  />\\n</svelte:head>\\n\\n<div class=\\"subpage\\">\\n  <div class=\\"subpage__inner\\">\\n    <div class=\\"subpage__left-content\\" data-left-content>\\n      <div class=\\"subpage__content-body main-container\\">\\n        <!-- <section class=\\"no-padding\\">\\n\\t\\t\\t\\t\\t\\t<div >\\n\\t\\t\\t\\t\\t\\t\\t<h1>{$page.data.content.page_title}</h1>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</section> -->\\n        {#if data.content.page_layout}\\n          {#each data.content.page_layout as section}\\n            {#if section._type == \\"sctn_rich_text\\"}\\n              <SectionRichText {section} />\\n            {/if}\\n\\n            {#if section._type == \\"sctn_experience_list\\"}\\n              <SectionExperienceList {section} />\\n            {/if}\\n          {/each}\\n        {/if}\\n      </div>\\n    </div>\\n\\n    <div class=\\"subpage__right-content\\">\\n      <FeaturedProjectsSlideshow />\\n    </div>\\n  </div>\\n</div>\\n\\n<style>\\n@media screen and (min-width: 900px) {\\n  .main-container {\\n    padding-top: var(--level6);\\n  }\\n}\\n</style>\\n"],"names":[],"mappings":"AA6EA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,6BAAgB,CACd,WAAW,CAAE,IAAI,QAAQ,CAC3B,CACF"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let { seo } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.seo === void 0 && $$bindings.seo && seo !== void 0) $$bindings.seo(seo);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1vthuv0_START -->${validate_component(MetaTags, "MetaTags").$$render(
    $$result,
    {
      title: $page.data.content.seo.title,
      description: $page.data.content.seo.description,
      canonical: "https://natalialassallemorillo.com/about",
      openGraph: {
        url: "https://natalialassallemorillo.com/about",
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
  )}<!-- HEAD_svelte-1vthuv0_END -->`, ""} <div class="subpage"><div class="subpage__inner"><div class="subpage__left-content" data-left-content><div class="subpage__content-body main-container svelte-xzzq7k"> ${data.content.page_layout ? `${each(data.content.page_layout, (section) => {
    return `${section._type == "sctn_rich_text" ? `${validate_component(Sctn_rich_text, "SectionRichText").$$render($$result, { section }, {}, {})}` : ``} ${section._type == "sctn_experience_list" ? `${validate_component(Sctn_experience_list, "SectionExperienceList").$$render($$result, { section }, {}, {})}` : ``}`;
  })}` : ``}</div></div> <div class="subpage__right-content">${validate_component(Featured_projects_slideshow, "FeaturedProjectsSlideshow").$$render($$result, {}, {}, {})}</div></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BKJjSaV3.js.map
