import { c as create_ssr_component, v as validate_component, e as each, b as escape, a as add_attribute } from './index-7fd3afc3.js';
import { M as MetaTags, R as Rich_text } from './rich-text-d94473b1.js';
import { u as urlFor } from './sanity-ec4a4075.js';
import '@sanity/client';
import '@sanity/image-url';

const css = {
  code: '.texts-container.svelte-1qygr64.svelte-1qygr64{background-color:white}@media screen and (min-width: 900px){.texts-container.svelte-1qygr64.svelte-1qygr64{background-color:black;height:100%;overflow:hidden;position:absolute;top:0;padding-top:3rem}}.desktop-texts.svelte-1qygr64.svelte-1qygr64{display:none}@media screen and (min-width: 900px){.desktop-texts.svelte-1qygr64.svelte-1qygr64{display:flex;height:100vh;margin-left:-1px}}@media screen and (min-width: 900px){.mobile-texts.svelte-1qygr64.svelte-1qygr64{display:none}}[data-details-content].svelte-1qygr64.svelte-1qygr64{transition:all 1s ease-in-out;height:100vh;overflow:auto;scrollbar-color:black white;scrollbar-width:thin;position:relative}.desktop-texts__post.svelte-1qygr64.svelte-1qygr64{position:relative;border:2px solid black;background-color:white;border-right:0;border-top:0;overflow:hidden}.desktop-texts__post.svelte-1qygr64:hover details.svelte-1qygr64{opacity:1 !important}.desktop-texts.svelte-1qygr64 .desktop-texts__post.svelte-1qygr64:last-child{border-right:2px solid black}@media screen and (min-width: 900px){[data-details-content].svelte-1qygr64.svelte-1qygr64{grid-column:1}details.svelte-1qygr64.svelte-1qygr64{position:relative;width:auto;left:0;display:grid;grid-template-rows:1fr;grid-template-columns:1fr max-content;transition:width 1s ease-in-out;width:3.5rem}details.svelte-1qygr64.svelte-1qygr64:hover{opacity:1 !important}.desktop-texts__post.svelte-1qygr64 summary.svelte-1qygr64{position:absolute;left:0;margin-top:0.5rem;grid-column:1;width:3.5rem;display:flex;justify-content:center;transition:all 0.1s ease-in;background-color:white;height:100vh}.desktop-texts__post.svelte-1qygr64 summary.svelte-1qygr64:hover{cursor:pointer;background-color:black !important;color:white !important}details.svelte-1qygr64 summary.svelte-1qygr64:after{content:" ";cursor:pointer;color:white;height:100vh;position:absolute;width:3.5rem}details.svelte-1qygr64 summary.svelte-1qygr64:hover:after{background-color:black}details.svelte-1qygr64 summary:hover .desktop-texts-post__summary-text.svelte-1qygr64:before{opacity:1}details.svelte-1qygr64.svelte-1qygr64:after{background-color:white}details[open].svelte-1qygr64.svelte-1qygr64:after{content:"";background-color:black;left:0;right:auto;z-index:0;width:3.5rem;position:absolute;height:100vh}details.svelte-1qygr64.svelte-1qygr64{height:100%}details.svelte-1qygr64.svelte-1qygr64:after{content:" ";right:0;z-index:0;width:3.5rem}details[open].svelte-1qygr64 summary.svelte-1qygr64{color:white;background-color:black}}.desktop-texts-post__summary-text.svelte-1qygr64.svelte-1qygr64{position:absolute;height:100%;text-wrap:nowrap;writing-mode:vertical-rl;z-index:2}.desktop-texts-post__summary-text.svelte-1qygr64.svelte-1qygr64:before{content:"";position:absolute;height:100%;width:100%;background-color:black;z-index:-1;width:4rem;right:-1.2rem;left:0;opacity:0}.desktop-texts-post__summary-text.svelte-1qygr64 h3.svelte-1qygr64{font-size:var(--h5);text-align:left;padding-top:2vh;font-weight:normal;font-family:var(--secondary-font-family)}@media screen and (min-width: 900px){.desktop-texts-post__summary-text.svelte-1qygr64 h3.svelte-1qygr64{font-size:1.25rem;padding-top:2rem;font-family:var(--primary-font-family)}}article.svelte-1qygr64.svelte-1qygr64{padding-bottom:var(--level5);margin-bottom:var(--level10);border-bottom:2px solid black;background-color:white;color:black}@media screen and (min-width: 900px){article.svelte-1qygr64.svelte-1qygr64{width:105ch;max-width:68rem;padding-left:var(--level6);padding-right:var(--level8);padding-bottom:10rem;padding-top:var(--level5);border-bottom:0;margin:auto;padding-left:6rem;background-color:transparent}}.post__featured-image.svelte-1qygr64.svelte-1qygr64{position:relative;margin-bottom:var(--level5)}.post__featured-image__inner.svelte-1qygr64.svelte-1qygr64{position:relative;padding-bottom:52.6%;overflow:hidden}.post__title.svelte-1qygr64.svelte-1qygr64{font-family:var(--secondary-font-family);line-height:1.2;font-size:var(--h2);margin-bottom:var(--level5)}@media screen and (min-width: 900px){.post__title.svelte-1qygr64.svelte-1qygr64{font-size:var(--h1)}}@media screen and (min-width: 900px){.post__body.svelte-1qygr64.svelte-1qygr64{padding-left:var(--level7);padding-right:var(--level7)}}.post__author.svelte-1qygr64 a.svelte-1qygr64{font-family:var(--secondary-font-family);text-decoration:underline}.post__author.svelte-1qygr64 a.svelte-1qygr64:hover,.post__author.svelte-1qygr64 a.svelte-1qygr64:focus{text-decoration:none}',
  map: null
};
function formatDates(pTexts) {
  pTexts.sort((a, b) => {
    const dateA = new Date(a._createdAt);
    const dateB = new Date(b._createdAt);
    return dateB - dateA;
  });
}
function placeFeaturedFirst(pTexts) {
  pTexts.sort((a, b) => {
    if (a.featured === b.featured) {
      return 0;
    }
    return a.featured ? -1 : 1;
  });
}
const Sctn_texts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  let dateOptions = {
    day: "2-digit",
    year: "numeric",
    month: "long"
  };
  console.log(posts);
  formatDates(posts);
  placeFeaturedFirst(posts);
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  return `<div class="texts-container svelte-1qygr64"><div class="mobile-texts main-container svelte-1qygr64">${each(posts, (post) => {
    return `<article class="post svelte-1qygr64"><div class="post__data visually-hidden">${escape(new Date(post._createdAt).toLocaleDateString("en-US", dateOptions))}</div>
        <h1 class="post__title svelte-1qygr64">${escape(post.title)}</h1>
        <div class="post__featured-image svelte-1qygr64"><div class="post__featured-image__inner svelte-1qygr64"><img src="" srcset="${escape(urlFor(post.featured_image.asset).width(400).auto("format"), true) + " 400w,\n                              " + escape(urlFor(post.featured_image.asset).width(600).auto("format"), true) + " 600w,\n                              " + escape(urlFor(post.featured_image.asset).width(800).auto("format"), true) + " 800w  \n                              " + escape(urlFor(post.featured_image.asset).width(1200).auto("format"), true) + " 1200w,\n                              " + escape(urlFor(post.featured_image.asset).width(1600).auto("format"), true) + " 1600w"}" sizes="calc(100vw - 3.5rem)" loading="lazy" decoding="async" class="responsive-image"${add_attribute("alt", post.featured_image.alt_text, 0)}>
          </div></div>
        <div class="post__body svelte-1qygr64">${validate_component(Rich_text, "RichText").$$render($$result, { text: post.content }, {}, {})}</div>
      </article>`;
  })}</div>

  <div class="desktop-texts svelte-1qygr64" data-articles-list>${each(posts, (post, index) => {
    return `<div class="desktop-texts__post svelte-1qygr64"><details class="svelte-1qygr64"><summary aria-label="${"Open full article number " + escape(index, true)}" aria-expanded="false" data-id="${"project-" + escape(index, true)}" class="svelte-1qygr64"><div class="desktop-texts-post__summary-text svelte-1qygr64"><h3 class="svelte-1qygr64">${escape(post.title)}</h3>
            </div></summary>
          <div data-details-content class="svelte-1qygr64"><article class="post svelte-1qygr64"><h1 class="post__title svelte-1qygr64">${escape(post.title)}</h1>

              <div class="post__featured-image svelte-1qygr64"><div class="post__featured-image__inner svelte-1qygr64"><img src="" srcset="${escape(urlFor(post.featured_image.asset).width(400).auto("format"), true) + " 400w,\n                                    " + escape(urlFor(post.featured_image.asset).width(600).auto("format"), true) + " 600w,\n                                    " + escape(urlFor(post.featured_image.asset).width(800).auto("format"), true) + " 800w  \n                                    " + escape(urlFor(post.featured_image.asset).width(1200).auto("format"), true) + " 1200w,\n                                    " + escape(urlFor(post.featured_image.asset).width(1600).auto("format"), true) + " 1600w"}" sizes="calc(100vw - 3.5rem)" loading="lazy" decoding="async" class="responsive-image"${add_attribute("alt", post.featured_image.alt_text, 0)}>
                </div></div>

              <div class="post__body svelte-1qygr64">${validate_component(Rich_text, "RichText").$$render($$result, { text: post.content }, {}, {})}

                ${post.authors ? `<div class="post__author svelte-1qygr64">Written by:
                    ${each(post.authors, (author) => {
      return `${author.website ? `<a${add_attribute("href", author.website, 0)} rel="author" target="_blank" class="svelte-1qygr64">${escape(author.name)}</a>` : `<span rel="author">${escape(author.name)}</span>`}`;
    })}
                  </div>` : ``}
              </div></article>
          </div></details>
      </div>`;
  })}</div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let posts = data.streamed.posts;
  let seo = data.content.seo;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-zva394_START -->${validate_component(MetaTags, "MetaTags").$$render(
    $$result,
    {
      title: seo.title,
      description: seo.description,
      canonical: "https://natalialassallemorillo.com/texts",
      openGraph: {
        url: "https://natalialassallemorillo.com/texts",
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
  )}<!-- HEAD_svelte-zva394_END -->`, ""}

${data.content.page_layout ? `${each(data.content.page_layout, (section) => {
    return `${section._type == "sctn_texts_list" ? `${validate_component(Sctn_texts, "Texts").$$render($$result, { section, posts }, {}, {})}` : ``}`;
  })}` : ``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7abe09c8.js.map
