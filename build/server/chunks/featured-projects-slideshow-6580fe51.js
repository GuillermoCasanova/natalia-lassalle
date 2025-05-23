import { c as create_ssr_component, o as onDestroy, a as add_attribute, e as each, b as escape } from './index-7fd3afc3.js';
import { u as urlFor } from './sanity-ec4a4075.js';
import 'swiper';
import 'swiper/modules';

const css = {
  code: ".swiper-slide.svelte-1dyku25.svelte-1dyku25{width:100%}.thumbnails-container.svelte-1dyku25.svelte-1dyku25{position:fixed;right:1.5vw;height:100vh;z-index:100;width:42vw;left:auto;display:flex;align-items:center;transition:all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1)}@media screen and (min-width: 1700px){.thumbnails-container.svelte-1dyku25.svelte-1dyku25{width:38vw;right:3.5vw}}.thumbnails-container__inner.svelte-1dyku25.svelte-1dyku25{display:flex;align-items:center;height:auto;justify-content:center}.thumbnail.svelte-1dyku25.svelte-1dyku25{position:relative;width:100%;max-width:50rem}.thumbnail.svelte-1dyku25:focus .thumbnail__details.svelte-1dyku25,.thumbnail.svelte-1dyku25:hover .thumbnail__details.svelte-1dyku25{color:#fff}.thumbnail__inner.svelte-1dyku25.svelte-1dyku25{position:relative;padding-bottom:54%;margin-bottom:1rem}.thumbnail__details.svelte-1dyku25.svelte-1dyku25{position:relative;display:flex;justify-content:center;width:100%;text-align:center;color:gray;font-size:var(--micro);text-transform:uppercase}.thumbnail__details__name.svelte-1dyku25.svelte-1dyku25{margin-right:var(--level0)}img.svelte-1dyku25.svelte-1dyku25{position:absolute;left:0;top:0;object-fit:cover;height:100%;width:100%}",
  map: null
};
const Featured_projects_slideshow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let featuredProjects = [];
  let thumbnailContainer;
  onDestroy(() => {
  });
  $$result.css.add(css);
  return `<aside>${featuredProjects ? `<div class="thumbnails-container svelte-1dyku25" style="opacity: 0;"${add_attribute("this", thumbnailContainer, 0)}><div class="swiper thumbnails-container__inner featured-projects-swiper svelte-1dyku25"><div class="swiper-wrapper">${each(featuredProjects, (project) => {
    return `<div class="swiper-slide svelte-1dyku25"><a href="${"/work/" + escape(project.handle, true)}" title="${"Go to project " + escape(project.name, true)}" rel="internal" class="thumbnail svelte-1dyku25"><div class="thumbnail__inner svelte-1dyku25"><img${add_attribute("src", urlFor(project.thumbnail).width(800).auto("format").url(), 0)} role="presentation" aria-hidden="true" alt="placeholder" loading="lazy" class="responsive-image svelte-1dyku25"></div>
                <div class="thumbnail__details visually-hidden svelte-1dyku25"><p class="thumbnail__details__name svelte-1dyku25">${escape(project.name)}</p>
                  <p class="thumbnail__details__medium">- ${escape(project.medium.title)}</p>
                </div></a>
            </div>`;
  })}</div></div></div>` : ``}
</aside>`;
});

export { Featured_projects_slideshow as F };
//# sourceMappingURL=featured-projects-slideshow-6580fe51.js.map
