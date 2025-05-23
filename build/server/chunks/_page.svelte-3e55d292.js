import { c as create_ssr_component, s as subscribe, v as validate_component, e as each, o as onDestroy, a as add_attribute, b as escape, d as createEventDispatcher } from './index-7fd3afc3.js';
import { M as MetaTags } from './rich-text-d94473b1.js';
import { p as page } from './stores-36296930.js';
import { S as Sctn_rich_text, a as Sctn_experience_list } from './sctn-experience-list-2b585891.js';
import { S as Sctn_projects_list } from './sctn-projects-list-d06314ab.js';
import { F as Featured_projects_slideshow } from './featured-projects-slideshow-6580fe51.js';
import { u as urlFor } from './sanity-ec4a4075.js';
import './loader-0e93bf3a.js';
import 'swiper';
import 'swiper/modules';
import '@sanity/client';
import '@sanity/image-url';

const IntersectionObserver_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { element = null } = $$props;
  let { once = false } = $$props;
  let { intersecting = false } = $$props;
  let { root = null } = $$props;
  let { rootMargin = "0px" } = $$props;
  let { threshold = 0 } = $$props;
  let { entry = null } = $$props;
  let { observer = null } = $$props;
  createEventDispatcher();
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.once === void 0 && $$bindings.once && once !== void 0)
    $$bindings.once(once);
  if ($$props.intersecting === void 0 && $$bindings.intersecting && intersecting !== void 0)
    $$bindings.intersecting(intersecting);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.rootMargin === void 0 && $$bindings.rootMargin && rootMargin !== void 0)
    $$bindings.rootMargin(rootMargin);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  if ($$props.entry === void 0 && $$bindings.entry && entry !== void 0)
    $$bindings.entry(entry);
  if ($$props.observer === void 0 && $$bindings.observer && observer !== void 0)
    $$bindings.observer(observer);
  return `${slots.default ? slots.default({ intersecting, entry, observer }) : ``}`;
});
const css$1 = {
  code: ".transition.svelte-8f1b2d.svelte-8f1b2d{background:black;width:100vw;height:100vh;z-index:15;top:0;position:fixed;transition:all 1s cubic-bezier(0.33, 1, 0.68, 1);pointer-events:none}.section-hero-header.svelte-8f1b2d.svelte-8f1b2d{background-color:rgb(252, 247, 243);position:relative;width:100%;display:flex;overflow:hidden;height:100vh;z-index:4;max-height:60rem}@media screen and (min-width: 900px){.section-hero-header.svelte-8f1b2d.svelte-8f1b2d{position:fixed;top:0;bottom:0;height:100vh;width:100vw;z-index:10;margin-bottom:0;max-height:100vh}}.section-hero-header__inner.svelte-8f1b2d.svelte-8f1b2d{padding:0;position:absolute;width:100%;height:100%;display:flex;align-items:flex-end}@media screen and (min-width: 900px){.section-hero-header__inner.svelte-8f1b2d.svelte-8f1b2d{padding-bottom:0;align-items:flex-start;padding-top:var(--level3);padding-left:var(--level1);padding-bottom:var(--level3)}}.section-hero-header__copy.svelte-8f1b2d.svelte-8f1b2d{z-index:3;bottom:0}@media screen and (min-width: 900px){.section-hero-header__copy.svelte-8f1b2d.svelte-8f1b2d{height:100%}}.section-hero-header__headline.svelte-8f1b2d.svelte-8f1b2d{line-height:1;text-align:left;color:#fff;font-size:var(--h1);display:none}@media screen and (min-width: 900px){.section-hero-header__headline.svelte-8f1b2d.svelte-8f1b2d{bottom:auto;top:var(--level3);font-size:var(--mega);display:block}}.section-hero-header__directional-arrow.svelte-8f1b2d.svelte-8f1b2d{width:0.85rem;position:absolute;bottom:var(--level3);z-index:3;display:flex}@media screen and (min-width: 900px){.section-hero-header__directional-arrow.svelte-8f1b2d.svelte-8f1b2d{left:var(--level3);right:auto;bottom:0;width:1.25rem}}.section-hero-header__directional-arrow.svelte-8f1b2d svg.svelte-8f1b2d{width:100%;height:100%;margin-top:auto;margin-bottom:0}.section-hero-header__video-container.svelte-8f1b2d.svelte-8f1b2d{width:100%;height:100%;object-fit:cover;position:absolute;z-index:1}.section-hero-header__video.svelte-8f1b2d.svelte-8f1b2d{position:relative;width:100%;height:100%;z-index:0}.section-hero-header__video.svelte-8f1b2d video.svelte-8f1b2d{position:absolute;width:100%;height:100%;object-fit:cover}",
  map: null
};
const Sctn_hero_header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { section } = $$props;
  let element;
  let heroHeader;
  let transition;
  onDestroy(() => {
  });
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  $$result.css.add(css$1);
  return `<div class="transition svelte-8f1b2d"${add_attribute("this", transition, 0)}></div>

${validate_component(IntersectionObserver_1, "IntersectionObserver").$$render($$result, { once: true, element }, {}, {
    default: () => {
      return `<section class="section-hero-header svelte-8f1b2d"${add_attribute("this", heroHeader, 0)}><div class="section-hero-header__inner svelte-8f1b2d"><a href="${"/work/" + escape(section.featured_project.handle.current, true)}" class="section-hero-header__copy svelte-8f1b2d"><div class="main-container"><div class="section-hero-header__headline svelte-8f1b2d"><span style="text-transform: uppercase;">Natalia Lassalle-Morillo</span></div>
          <div class="section-hero-header__directional-arrow svelte-8f1b2d"><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 10.3 49.7" viewBox="0 0 10.3 49.7" class="svelte-8f1b2d"><path d="M6.2 42V0h-2v42h-4l5 7.6 5-7.6h-4z" style="fill:#fff"></path></svg></div></div></a></div>

    <div class="section-hero-header__video-container svelte-8f1b2d"><div class="section-hero-header__video svelte-8f1b2d"><video width="320" height="240" muted preload="none" ${section.video_autoplay || false ? "autoplay" : ""} ${!section.video_autoplay || false ? "controls" : ""} ${section.video_autoplay || false ? "playsinline" : ""} ${section.video_autoplay || false ? "loop" : ""}${add_attribute("poster", urlFor(section.video[0].video_poster.asset), 0)} class="svelte-8f1b2d"${add_attribute("this", element, 0)}><source${add_attribute("data-src", section.video[0].video_file.url, 0)} type="video/mp4"></video></div></div></section>`;
    }
  })}`;
});
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
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(MetaTags, "MetaTags").$$render(
      $$result,
      {
        title: $page.data.siteHead.seo.title,
        description: $page.data.siteHead.seo.description,
        canonical: "https://natalialassallemorillo.com",
        openGraph: {
          url: "https://natalialassallemorillo.com",
          title: $page.data.siteHead.seo.title,
          description: $page.data.siteHead.seo.description,
          images: [
            {
              url: $page.data.siteHead.seo.banner_image.url + "?auto=format&width=1200",
              width: 800,
              height: 600,
              alt: $page.data.siteHead.seo.banner_image.alt_text ? $page.data.siteHead.seo.banner_image.alt_text : "Missing Alt Text"
            }
          ],
          site_name: $page.data.siteHead.seo.title
        },
        twitter: {
          site: "natalialassallemorillo.com",
          cardType: "summary_large_image",
          title: $page.data.siteHead.seo.title,
          description: $page.data.siteHead.seo.description,
          image: $page.data.siteHead.seo.banner_image.url + "?auto=format&width=1200",
          imageAlt: $page.data.siteHead.seo.banner_image.alt_text ? $page.data.siteHead.seo.banner_image.alt_text : "Missing Alt Text"
        }
      },
      {},
      {}
    )}

${data.content.page_layout ? `${each(data.content.page_layout, (section) => {
      return `${section._type == "sctn_hero_header" ? `${validate_component(Sctn_hero_header, "SectionHeroHeader").$$render($$result, { section }, {}, {})}` : ``}`;
    })}` : ``}

<div class="subpage"><div class="subpage__inner"><div class="subpage__left-content" data-left-content><div class="subpage__content-body main-container svelte-xzzq7k">
        ${data.content.page_layout ? `${each(data.content.page_layout, (section) => {
      return `${section._type == "sctn_rich_text" ? `${validate_component(Sctn_rich_text, "SectionRichText").$$render($$result, { section }, {}, {})}` : ``}

            ${section._type == "sctn_experience_list" ? `${validate_component(Sctn_experience_list, "SectionExperienceList").$$render($$result, { section }, {}, {})}` : ``}

            ${section._type == "sctn_projects_list" ? `${validate_component(Sctn_projects_list, "SectionProjectsList").$$render(
        $$result,
        { seo },
        {
          seo: ($$value) => {
            seo = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : ``}`;
    })}` : ``}</div></div>

    <div class="subpage__right-content">${validate_component(Featured_projects_slideshow, "FeaturedProjectsSlideshow").$$render($$result, {}, {}, {})}</div></div>
</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-3e55d292.js.map
