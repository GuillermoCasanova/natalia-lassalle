import { c as create_ssr_component, o as onDestroy, v as validate_component, f as escape, e as each, d as add_attribute } from './index-7de6220d.js';
import { u as urlFor } from './sanity-f213399b.js';
import { M as MetaTags } from './MetaTags-8546f5b9.js';
import { S as Sctn_proj_list } from './sctn-proj-list-cb228b2c.js';
import { S as Sctn_featured_work } from './sctn-featured-work-85b63ed7.js';
import { P as PortableText } from './IntersectionObserver-f5c3f6ca.js';
import '@sanity/client';
import '@sanity/image-url';

const Internal_link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value;
  let page;
  let type;
  let handle;
  let page_title;
  let { portableText = new PortableText({ page: {} }) } = $$props;
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0)
    $$bindings.portableText(portableText);
  value = portableText.mark;
  page = value.page || {};
  type = page._type;
  handle = page.handle.current;
  page_title = page.page_title || page.name;
  return `${type == "project" ? `<a href="${"/our-work/" + escape(handle, true)}" rel="${"internal"}" title="${"View " + escape(page_title, true) + " Case Study"}">${slots.default ? slots.default({}) : ``}</a>` : `<a${add_attribute("href", handle, 0)} rel="${"internal"}" title="${"Go to " + escape(page_title, true) + " page"}">${slots.default ? slots.default({}) : ``}</a>`}`;
});
const External_link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value;
  let newWindow;
  let href;
  let { portableText = new PortableText({ page: {} }) } = $$props;
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0)
    $$bindings.portableText(portableText);
  value = portableText.mark;
  newWindow = value.blank;
  href = value.href;
  return `<a${add_attribute("href", href, 0)} rel="${"external"}"${add_attribute("target", newWindow ? "_blank" : null, 0)}>${slots.default ? slots.default({}) : ``} EXTERNAL
</a>`;
});
const Mailto_link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value;
  let email;
  let { portableText = new PortableText(globalThis) } = $$props;
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0)
    $$bindings.portableText(portableText);
  value = portableText.mark;
  email = value.mailto;
  return `<a href="${"mailto:" + escape(email, true)}" title="${"Open email service to email " + escape(email, true)}">${slots.default ? slots.default({}) : ``}</a>`;
});
const css = {
  code: ".jobs-list__headline.svelte-1bpx7sy.svelte-1bpx7sy{font-family:var(--tertiary-font-family);margin-bottom:var(--level7)}.job-posting.svelte-1bpx7sy.svelte-1bpx7sy{margin-bottom:var(--level8)}@media screen and (min-width: 975px){.job-posting.svelte-1bpx7sy.svelte-1bpx7sy{display:flex}}ul.svelte-1bpx7sy .job-posting:last-child .job-posting__description.svelte-1bpx7sy{border-bottom:0}.jobs-list__inner.svelte-1bpx7sy.svelte-1bpx7sy{padding-left:var(--level4);padding-right:var(--level4);padding-top:var(--level8);max-width:78rem;margin-right:auto;margin-left:auto}.job-posting__headline.svelte-1bpx7sy.svelte-1bpx7sy{font-family:var(--tertiary-font-family);font-size:var(--h3);line-height:1}@media screen and (min-width: 975px){.job-posting__headline.svelte-1bpx7sy.svelte-1bpx7sy{width:30%;font-size:var(--h3)}}.job-posting__description.svelte-1bpx7sy.svelte-1bpx7sy{max-width:72ch;padding-bottom:var(--level5);border-bottom:1px solid var(--quaternary-color)}@media screen and (min-width: 975px){.job-posting__description.svelte-1bpx7sy.svelte-1bpx7sy{width:100%;max-width:calc(100% - 25rem);margin-right:0;margin-left:auto}}.job-posting__description.svelte-1bpx7sy h1,.job-posting__description.svelte-1bpx7sy h2,.job-posting__description.svelte-1bpx7sy h3{font-weight:normal;font-family:var(--tertiary-font-family);font-size:var(--h4)}.job-posting__description.svelte-1bpx7sy ul,.job-posting__description.svelte-1bpx7sy li{list-style:disc}.job-posting__description.svelte-1bpx7sy ul{padding-left:var(--level4);margin-bottom:var(--level4)}.job-posting__description.svelte-1bpx7sy li{margin-bottom:var(--level0)}",
  map: null
};
const Sctn_jobs_list = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { job_posts } = $$props;
  if ($$props.job_posts === void 0 && $$bindings.job_posts && job_posts !== void 0)
    $$bindings.job_posts(job_posts);
  $$result.css.add(css);
  return `<section class="${"jobs-list"}"><div class="${"jobs-list__inner svelte-1bpx7sy"}">${job_posts.length > 0 ? `<h1 class="${"jobs-list__headline svelte-1bpx7sy"}">Current Job Postings</h1>
			<ul class="${"svelte-1bpx7sy"}">${each(job_posts, (job_post) => {
    return `<li class="${"job-posting svelte-1bpx7sy"}"><h2 class="${"job-posting__headline svelte-1bpx7sy"}">${escape(job_post.headline)}</h2>

						<div class="${"job-posting__description svelte-1bpx7sy"}">${validate_component(PortableText, "PortableText").$$render(
      $$result,
      {
        blocks: job_post.description,
        serializers: {
          marks: { internalLink: Internal_link, externalLink: External_link, mailtoLink: Mailto_link }
        }
      },
      {},
      {}
    )}</div>
					</li>`;
  })}</ul>` : `<h1 class="${"jobs-list__headline svelte-1bpx7sy"}">Nothing here yet</h1>
			<p>There are no job postings at this time.</p>`}</div>
</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let ready = false;
  onDestroy(() => {
    ready = false;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `${validate_component(MetaTags, "MetaTags").$$render(
    $$result,
    {
      title: data.content.seo.title,
      description: data.content.seo.description,
      canonical: "https://www.canonical.ie/",
      openGraph: {
        url: "https://www.url.ie/a",
        title: data.content.seo.title,
        description: data.content.seo.description,
        images: [
          {
            url: urlFor(data.content.seo.banner_image.asset),
            width: 800,
            height: 600,
            alt: data.content.seo.banner_image.alt_text ? data.content.seo.banner_image.alt_text : "Missing Alt Text"
          }
        ],
        site_name: "SiteName"
      },
      twitter: {
        handle: "@MaisonMatador",
        site: "@MaisonMatador",
        cardType: "summary_large_image",
        title: data.content.seo.title,
        description: data.content.seo.description,
        image: urlFor(data.content.seo.banner_image.asset),
        imageAlt: data.content.seo.banner_image.alt_text ? data.content.seo.banner_image.alt_text : "Missing Alt Text"
      }
    },
    {},
    {}
  )}`, ""}

${ready ? `<div><section class="${"no-padding"}"><div><h1 class="${"visually-hidden"}">${escape(data.content.page_title)}</h1></div></section>

		${each(data.content.page_layout, (section) => {
    return `${section._type == "project_list" ? `${validate_component(Sctn_proj_list, "SctnPageProjectList").$$render($$result, { section }, {}, {})}` : ``}

			${section._type == "page_featured_work_list" ? `${validate_component(Sctn_featured_work, "SectionFeaturedWork").$$render($$result, { section }, {}, {})}` : ``}

			${section._type == "sctn_jobs_list" ? `${validate_component(Sctn_jobs_list, "SectionJobsList").$$render($$result, Object.assign(section), {}, {})}` : ``}`;
  })}</div>` : ``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f1618dec.js.map
