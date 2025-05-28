import { c as create_ssr_component, o as subscribe, v as validate_component, q as each, u as onDestroy, p as add_attribute, t as escape, w as createEventDispatcher } from './exports-DiiVpNfQ.js';
import { M as MetaTags } from './rich-text-C-lTZTxO.js';
import { p as page } from './stores-Cl-qjfw1.js';
import { S as Sctn_rich_text, a as Sctn_experience_list } from './sctn-experience-list-B7d5IBOU.js';
import { S as Sctn_projects_list } from './sctn-projects-list-kp7w_FD2.js';
import { F as Featured_projects_slideshow } from './featured-projects-slideshow-CYUvos6Q.js';
import { u as urlFor } from './sanity-DpqZfrM0.js';
import './loader-KW4ua81L.js';
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
  if ($$props.element === void 0 && $$bindings.element && element !== void 0) $$bindings.element(element);
  if ($$props.once === void 0 && $$bindings.once && once !== void 0) $$bindings.once(once);
  if ($$props.intersecting === void 0 && $$bindings.intersecting && intersecting !== void 0) $$bindings.intersecting(intersecting);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0) $$bindings.root(root);
  if ($$props.rootMargin === void 0 && $$bindings.rootMargin && rootMargin !== void 0) $$bindings.rootMargin(rootMargin);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0) $$bindings.threshold(threshold);
  if ($$props.entry === void 0 && $$bindings.entry && entry !== void 0) $$bindings.entry(entry);
  if ($$props.observer === void 0 && $$bindings.observer && observer !== void 0) $$bindings.observer(observer);
  return `${slots.default ? slots.default({ intersecting, entry, observer }) : ``}`;
});
const css$1 = {
  code: ".transition.svelte-8f1b2d.svelte-8f1b2d{background:black;width:100vw;height:100vh;z-index:15;top:0;position:fixed;transition:all 1s cubic-bezier(0.33, 1, 0.68, 1);pointer-events:none}.section-hero-header.svelte-8f1b2d.svelte-8f1b2d{background-color:rgb(252, 247, 243);position:relative;width:100%;display:flex;overflow:hidden;height:100vh;z-index:4;max-height:60rem}@media screen and (min-width: 900px){.section-hero-header.svelte-8f1b2d.svelte-8f1b2d{position:fixed;top:0;bottom:0;height:100vh;width:100vw;z-index:10;margin-bottom:0;max-height:100vh}}.section-hero-header__inner.svelte-8f1b2d.svelte-8f1b2d{padding:0;position:absolute;width:100%;height:100%;display:flex;align-items:flex-end}@media screen and (min-width: 900px){.section-hero-header__inner.svelte-8f1b2d.svelte-8f1b2d{padding-bottom:0;align-items:flex-start;padding-top:var(--level3);padding-left:var(--level1);padding-bottom:var(--level3)}}.section-hero-header__copy.svelte-8f1b2d.svelte-8f1b2d{z-index:3;bottom:0}@media screen and (min-width: 900px){.section-hero-header__copy.svelte-8f1b2d.svelte-8f1b2d{height:100%}}.section-hero-header__headline.svelte-8f1b2d.svelte-8f1b2d{line-height:1;text-align:left;color:#fff;font-size:var(--h1);display:none}@media screen and (min-width: 900px){.section-hero-header__headline.svelte-8f1b2d.svelte-8f1b2d{bottom:auto;top:var(--level3);font-size:var(--mega);display:block}}.section-hero-header__directional-arrow.svelte-8f1b2d.svelte-8f1b2d{width:0.85rem;position:absolute;bottom:var(--level3);z-index:3;display:flex}@media screen and (min-width: 900px){.section-hero-header__directional-arrow.svelte-8f1b2d.svelte-8f1b2d{left:var(--level3);right:auto;bottom:0;width:1.25rem}}.section-hero-header__directional-arrow.svelte-8f1b2d svg.svelte-8f1b2d{width:100%;height:100%;margin-top:auto;margin-bottom:0}.section-hero-header__video-container.svelte-8f1b2d.svelte-8f1b2d{width:100%;height:100%;object-fit:cover;position:absolute;z-index:1}.section-hero-header__video.svelte-8f1b2d.svelte-8f1b2d{position:relative;width:100%;height:100%;z-index:0}.section-hero-header__video.svelte-8f1b2d video.svelte-8f1b2d{position:absolute;width:100%;height:100%;object-fit:cover}",
  map: '{"version":3,"file":"sctn-hero-header.svelte","sources":["sctn-hero-header.svelte"],"sourcesContent":["<script>\\nimport IntersectionObserver from \\"svelte-intersection-observer\\";\\nimport { urlFor } from \\"$lib/sanity\\";\\nimport { onMount } from \\"svelte\\";\\nimport { onDestroy } from \\"svelte\\";\\nimport { browser } from \\"$app/environment\\";\\n\\nexport let section;\\nlet element;\\nlet heroHeader;\\nlet requestId = null;\\nlet scroller = {};\\nlet videoIsLoaded = false;\\nlet transition;\\n\\nfunction loadVideo(e) {\\n  let video = e.detail.target;\\n\\n  if (e.detail.isIntersecting && !videoIsLoaded) {\\n    for (var source in video.children) {\\n      let videoSource = video.children[source];\\n      if (\\n        typeof videoSource.tagName === \\"string\\" &&\\n        videoSource.tagName === \\"SOURCE\\"\\n      ) {\\n        videoSource.src = videoSource.dataset.src;\\n      }\\n    }\\n\\n    videoIsLoaded = true;\\n    video.load();\\n    video.classList.remove(\\"lazy\\");\\n  }\\n}\\n\\nonMount(() => {\\n  transition.style.opacity = 0;\\n\\n  let mediaQueries = {\\n    mediumUp: window.matchMedia(\\"(min-width: 768px)\\"),\\n    largeUp: window.matchMedia(\\"(min-width: 900px)\\"),\\n  };\\n\\n  scroller = {\\n    ease: 0.001,\\n    speed: 100,\\n    minY: 0.1,\\n    maxY: window.innerHeight * 2,\\n    y: 0,\\n  };\\n\\n  if (mediaQueries.largeUp.matches) {\\n    window.addEventListener(\\"wheel\\", onWheel);\\n  }\\n\\n  window.addEventListener(\\n    \\"resize\\",\\n    throttle(() => {\\n      if (mediaQueries.largeUp.matches) {\\n        window.addEventListener(\\"wheel\\", onWheel);\\n      } else {\\n        window.removeEventListener(\\"wheel\\", onWheel);\\n        if (heroHeader) {\\n          heroHeader.style.display = \\"block\\";\\n          heroHeader.style.opacity = 1;\\n        }\\n      }\\n    }),\\n    { passive: true }\\n  );\\n\\n  function throttle(fn, delay) {\\n    let lastCall = 0;\\n    return function (...args) {\\n      const now = new Date().getTime();\\n      if (now - lastCall < delay) {\\n        return;\\n      }\\n      lastCall = now;\\n      return fn(...args);\\n    };\\n  }\\n});\\n\\nonDestroy(() => {\\n  if (browser) {\\n    window.removeEventListener(\\"wheel\\", onWheel);\\n  }\\n});\\n\\nfunction removeHeroHeader() {\\n  heroHeader.style.display = \\"none\\";\\n  if (browser) {\\n    window.removeEventListener(\\"wheel\\", onWheel);\\n  }\\n}\\n\\nfunction onFrame() {\\n  scroller.speed += -scroller.speed * scroller.ease;\\n  // scroller.y -= scroller.speed;\\n  scroller.y -= Math.round(scroller.speed * 10) / 10;\\n\\n  if (scroller.y < scroller.minY) {\\n    scroller.y = scroller.minY;\\n    scroller.speed = 0;\\n  } else if (scroller.y > scroller.maxY) {\\n    scroller.y = scroller.maxY;\\n    scroller.speed = 0;\\n  }\\n\\n  var progress = scroller.y / scroller.maxY;\\n\\n  if (heroHeader) {\\n    heroHeader.style.opacity = 1 - progress;\\n  }\\n\\n  if (progress == 1) {\\n    removeHeroHeader();\\n  }\\n\\n  requestId = null;\\n\\n  if (scroller.speed) {\\n    requestId = requestAnimationFrame(onFrame);\\n  }\\n}\\n\\nfunction onWheel(event) {\\n  var normalized;\\n  var delta = event.wheelDelta;\\n\\n  if (delta) {\\n    normalized = delta % 120 == 0 ? delta / 120 : delta / 12;\\n  } else {\\n    delta = event.deltaY || event.detail || 0;\\n    normalized = -(delta % 3 ? delta * 10 : delta / 3);\\n  }\\n\\n  scroller.speed += normalized;\\n\\n  if (scroller.speed && !requestId) {\\n    requestId = requestAnimationFrame(onFrame);\\n  }\\n}\\n<\/script>\\n\\n<div class=\\"transition\\" bind:this={transition} />\\n\\n<IntersectionObserver once {element} on:observe={loadVideo}>\\n  <section class=\\"section-hero-header\\" bind:this={heroHeader}>\\n    <div class=\\"section-hero-header__inner\\">\\n      <a\\n        href=\\"/work/{section.featured_project.handle.current}\\"\\n        class=\\"section-hero-header__copy\\"\\n      >\\n        <div class=\\"main-container\\">\\n          <div class=\\"section-hero-header__headline\\">\\n            <span style=\\"text-transform: uppercase;\\"\\n              >Natalia Lassalle-Morillo</span\\n            >\\n          </div>\\n          <div class=\\"section-hero-header__directional-arrow\\">\\n            <svg\\n              xmlns=\\"http://www.w3.org/2000/svg\\"\\n              xml:space=\\"preserve\\"\\n              style=\\"enable-background:new 0 0 10.3 49.7\\"\\n              viewBox=\\"0 0 10.3 49.7\\"\\n              ><path\\n                d=\\"M6.2 42V0h-2v42h-4l5 7.6 5-7.6h-4z\\"\\n                style=\\"fill:#fff\\"\\n              /></svg\\n            >\\n          </div>\\n        </div>\\n      </a>\\n    </div>\\n\\n    <div class=\\"section-hero-header__video-container\\">\\n      <div class=\\"section-hero-header__video\\">\\n        <video\\n          width=\\"320\\"\\n          height=\\"240\\"\\n          muted\\n          preload=\\"none\\"\\n          autoplay={section.video_autoplay || false}\\n          controls={!section.video_autoplay || false}\\n          playsinline={section.video_autoplay || false}\\n          loop={section.video_autoplay || false}\\n          poster={urlFor(section.video[0].video_poster.asset)}\\n          bind:this={element}\\n        >\\n          <source data-src={section.video[0].video_file.url} type=\\"video/mp4\\" />\\n        </video>\\n      </div>\\n    </div>\\n  </section>\\n</IntersectionObserver>\\n\\n<style>\\n.transition {\\n  background: black;\\n  width: 100vw;\\n  height: 100vh;\\n  z-index: 15;\\n  top: 0;\\n  position: fixed;\\n  transition: all 1s cubic-bezier(0.33, 1, 0.68, 1);\\n  pointer-events: none;\\n}\\n\\n.section-hero-header {\\n  background-color: rgb(252, 247, 243);\\n  position: relative;\\n  width: 100%;\\n  display: flex;\\n  overflow: hidden;\\n  height: 100vh;\\n  z-index: 4;\\n  max-height: 60rem;\\n}\\n\\n@media screen and (min-width: 900px) {\\n  .section-hero-header {\\n    position: fixed;\\n    top: 0;\\n    bottom: 0;\\n    height: 100vh;\\n    width: 100vw;\\n    z-index: 10;\\n    margin-bottom: 0;\\n    max-height: 100vh;\\n  }\\n}\\n\\n.section-hero-header__inner {\\n  padding: 0;\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  align-items: flex-end;\\n}\\n\\n@media screen and (min-width: 900px) {\\n  .section-hero-header__inner {\\n    padding-bottom: 0;\\n    align-items: flex-start;\\n    padding-top: var(--level3);\\n    padding-left: var(--level1);\\n    padding-bottom: var(--level3);\\n  }\\n}\\n\\n.section-hero-header__copy {\\n  z-index: 3;\\n  bottom: 0;\\n}\\n\\n@media screen and (min-width: 900px) {\\n  .section-hero-header__copy {\\n    height: 100%;\\n  }\\n}\\n\\n.section-hero-header__headline {\\n  line-height: 1;\\n  text-align: left;\\n  color: #fff;\\n  font-size: var(--h1);\\n  display: none;\\n}\\n\\n@media screen and (min-width: 900px) {\\n  .section-hero-header__headline {\\n    bottom: auto;\\n    top: var(--level3);\\n    font-size: var(--mega);\\n    display: block;\\n  }\\n}\\n\\n.section-hero-header__headline svg {\\n  height: 3rem;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  margin: auto;\\n}\\n\\n.section-hero-header__directional-arrow {\\n  width: 0.85rem;\\n  position: absolute;\\n  bottom: var(--level3);\\n  z-index: 3;\\n  display: flex;\\n}\\n\\n@media screen and (min-width: 900px) {\\n  .section-hero-header__directional-arrow {\\n    left: var(--level3);\\n    right: auto;\\n    bottom: 0;\\n    width: 1.25rem;\\n  }\\n}\\n.section-hero-header__directional-arrow svg {\\n  width: 100%;\\n  height: 100%;\\n  margin-top: auto;\\n  margin-bottom: 0;\\n}\\n\\n.section-hero-header__video-container {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n  position: absolute;\\n  z-index: 1;\\n}\\n.section-hero-header__video {\\n  position: relative;\\n  width: 100%;\\n  height: 100%;\\n  z-index: 0;\\n}\\n\\n.section-hero-header__video video {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n}\\n</style>\\n"],"names":[],"mappings":"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"}'
};
const Sctn_hero_header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { section } = $$props;
  let element;
  let heroHeader;
  let transition;
  onDestroy(() => {
  });
  if ($$props.section === void 0 && $$bindings.section && section !== void 0) $$bindings.section(section);
  $$result.css.add(css$1);
  return `<div class="transition svelte-8f1b2d"${add_attribute("this", transition, 0)}></div> ${validate_component(IntersectionObserver_1, "IntersectionObserver").$$render($$result, { once: true, element }, {}, {
    default: () => {
      return `<section class="section-hero-header svelte-8f1b2d"${add_attribute("this", heroHeader, 0)}><div class="section-hero-header__inner svelte-8f1b2d"><a href="${"/work/" + escape(section.featured_project.handle.current, true)}" class="section-hero-header__copy svelte-8f1b2d"><div class="main-container" data-svelte-h="svelte-122q1p4"><div class="section-hero-header__headline svelte-8f1b2d"><span style="text-transform: uppercase;">Natalia Lassalle-Morillo</span></div> <div class="section-hero-header__directional-arrow svelte-8f1b2d"><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 10.3 49.7" viewBox="0 0 10.3 49.7" class="svelte-8f1b2d"><path d="M6.2 42V0h-2v42h-4l5 7.6 5-7.6h-4z" style="fill:#fff"></path></svg></div></div></a></div> <div class="section-hero-header__video-container svelte-8f1b2d"><div class="section-hero-header__video svelte-8f1b2d"><video width="320" height="240" muted preload="none" ${section.video_autoplay || false ? "autoplay" : ""} ${!section.video_autoplay || false ? "controls" : ""} ${section.video_autoplay || false ? "playsinline" : ""} ${section.video_autoplay || false ? "loop" : ""}${add_attribute("poster", urlFor(section.video[0].video_poster.asset), 0)} class="svelte-8f1b2d"${add_attribute("this", element, 0)}><source${add_attribute("data-src", section.video[0].video_file.url, 0)} type="video/mp4"></video></div></div></section>`;
    }
  })}`;
});
const css = {
  code: "@media screen and (min-width: 900px){.main-container.svelte-xzzq7k{padding-top:var(--level6)}}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\nimport { MetaTags } from \\"svelte-meta-tags\\";\\nimport { page } from \\"$app/stores\\";\\nimport SectionRichText from \\"../components/sections/sctn-rich-text.svelte\\";\\nimport SectionProjectsList from \\"../components/sections/sctn-projects-list.svelte\\";\\nimport SectionExperienceList from \\"../components/sections/sctn-experience-list.svelte\\";\\nimport FeaturedProjectsSlideshow from \\"../components/featured-projects-slideshow.svelte\\";\\nimport SectionHeroHeader from \\"../components/sections/sctn-hero-header.svelte\\";\\nexport let data;\\nexport let seo;\\n<\/script>\\n\\n<MetaTags\\n  title={$page.data.siteHead.seo.title}\\n  description={$page.data.siteHead.seo.description}\\n  canonical=\\"https://natalialassallemorillo.com\\"\\n  openGraph={{\\n    url: \\"https://natalialassallemorillo.com\\",\\n    title: $page.data.siteHead.seo.title,\\n    description: $page.data.siteHead.seo.description,\\n    images: [\\n      {\\n        url:\\n          $page.data.siteHead.seo.banner_image.url + \\"?auto=format&width=1200\\",\\n        width: 800,\\n        height: 600,\\n        alt: $page.data.siteHead.seo.banner_image.alt_text\\n          ? $page.data.siteHead.seo.banner_image.alt_text\\n          : \\"Missing Alt Text\\",\\n      },\\n    ],\\n    site_name: $page.data.siteHead.seo.title,\\n  }}\\n  twitter={{\\n    site: \\"natalialassallemorillo.com\\",\\n    cardType: \\"summary_large_image\\",\\n    title: $page.data.siteHead.seo.title,\\n    description: $page.data.siteHead.seo.description,\\n    image: $page.data.siteHead.seo.banner_image.url + \\"?auto=format&width=1200\\",\\n    imageAlt: $page.data.siteHead.seo.banner_image.alt_text\\n      ? $page.data.siteHead.seo.banner_image.alt_text\\n      : \\"Missing Alt Text\\",\\n  }}\\n/>\\n\\n{#if data.content.page_layout}\\n  {#each data.content.page_layout as section}\\n    {#if section._type == \\"sctn_hero_header\\"}\\n      <SectionHeroHeader {section} />\\n    {/if}\\n  {/each}\\n{/if}\\n\\n<div class=\\"subpage\\">\\n  <div class=\\"subpage__inner\\">\\n    <div class=\\"subpage__left-content\\" data-left-content>\\n      <div class=\\"subpage__content-body main-container\\">\\n        <!-- <section class=\\"no-padding\\">\\n\\t\\t\\t\\t\\t\\t<div >\\n\\t\\t\\t\\t\\t\\t\\t<h1>{$page.data.content.page_title}</h1>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</section> -->\\n        {#if data.content.page_layout}\\n          {#each data.content.page_layout as section}\\n            {#if section._type == \\"sctn_rich_text\\"}\\n              <SectionRichText {section} />\\n            {/if}\\n\\n            {#if section._type == \\"sctn_experience_list\\"}\\n              <SectionExperienceList {section} />\\n            {/if}\\n\\n            {#if section._type == \\"sctn_projects_list\\"}\\n              <SectionProjectsList bind:seo />\\n            {/if}\\n          {/each}\\n        {/if}\\n      </div>\\n    </div>\\n\\n    <div class=\\"subpage__right-content\\">\\n      <FeaturedProjectsSlideshow />\\n    </div>\\n  </div>\\n</div>\\n\\n<style>\\n@media screen and (min-width: 900px) {\\n  .main-container {\\n    padding-top: var(--level6);\\n  }\\n}\\n</style>\\n"],"names":[],"mappings":"AAuFA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,6BAAgB,CACd,WAAW,CAAE,IAAI,QAAQ,CAC3B,CACF"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let { seo } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.seo === void 0 && $$bindings.seo && seo !== void 0) $$bindings.seo(seo);
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
    )} ${data.content.page_layout ? `${each(data.content.page_layout, (section) => {
      return `${section._type == "sctn_hero_header" ? `${validate_component(Sctn_hero_header, "SectionHeroHeader").$$render($$result, { section }, {}, {})}` : ``}`;
    })}` : ``} <div class="subpage"><div class="subpage__inner"><div class="subpage__left-content" data-left-content><div class="subpage__content-body main-container svelte-xzzq7k"> ${data.content.page_layout ? `${each(data.content.page_layout, (section) => {
      return `${section._type == "sctn_rich_text" ? `${validate_component(Sctn_rich_text, "SectionRichText").$$render($$result, { section }, {}, {})}` : ``} ${section._type == "sctn_experience_list" ? `${validate_component(Sctn_experience_list, "SectionExperienceList").$$render($$result, { section }, {}, {})}` : ``} ${section._type == "sctn_projects_list" ? `${validate_component(Sctn_projects_list, "SectionProjectsList").$$render(
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
    })}` : ``}</div></div> <div class="subpage__right-content">${validate_component(Featured_projects_slideshow, "FeaturedProjectsSlideshow").$$render($$result, {}, {}, {})}</div></div> </div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Ctz0XSiI.js.map
