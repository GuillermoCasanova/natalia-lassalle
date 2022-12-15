import { c as create_ssr_component, e as each, f as escape, d as add_attribute } from './index-7de6220d.js';
import { u as urlFor } from './sanity-f213399b.js';

const css = {
  code: ".project-list.svelte-2y4c3r.svelte-2y4c3r{display:flex;flex-direction:column}@media only screen and (min-width: 600px){.project-list.svelte-2y4c3r li:nth-child(even) .project-thumbnail.svelte-2y4c3r{flex-direction:row-reverse}}.project-thumbnail.svelte-2y4c3r.svelte-2y4c3r{width:100%;display:flex;text-decoration:none;flex-direction:column}@media only screen and (min-width: 600px){.project-thumbnail.svelte-2y4c3r.svelte-2y4c3r{flex-direction:row}}.project-thumbnail__image-container.svelte-2y4c3r.svelte-2y4c3r{background-color:var(--quaternary-color);width:100%}@media only screen and (min-width: 600px){.project-thumbnail__image-container.svelte-2y4c3r.svelte-2y4c3r{width:50%}}.project-thumbnail__info-container.svelte-2y4c3r.svelte-2y4c3r{padding:var(--level5);padding-bottom:var(--level8);width:100%;display:flex;align-items:center;background-color:#f2f0ec}@media only screen and (min-width: 600px){.project-thumbnail__info-container.svelte-2y4c3r.svelte-2y4c3r{width:50%}}.project-thumbnail__info-container__inner.svelte-2y4c3r.svelte-2y4c3r{max-width:48ch;margin-right:auto;margin-left:auto}.responsive-square-image.svelte-2y4c3r.svelte-2y4c3r{position:relative;width:100%;padding-bottom:100%}.responsive-square-image.svelte-2y4c3r img.svelte-2y4c3r{position:absolute;object-fit:cover;height:100%;width:100%}.project-thumbnail__headline.svelte-2y4c3r.svelte-2y4c3r{font-family:var(--tertiary-font-family);font-size:var(--h1);font-weight:normal}.project-thumbnail__description.svelte-2y4c3r.svelte-2y4c3r{font-family:var(--secondary-font-family)}.project-thumbnail__button.svelte-2y4c3r.svelte-2y4c3r{max-width:13rem}",
  map: null
};
const Sctn_proj_list = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { section } = $$props;
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  $$result.css.add(css);
  return `<section class="${"no-padding"}"><ul class="${"project-list svelte-2y4c3r"}">${each(section.projects, (project) => {
    return `<li><div class="${"project-thumbnail svelte-2y4c3r"}"><a href="${"/our-work/" + escape(project.handle.current, true)}" tabindex="${"-1"}" class="${"project-thumbnail__image-container svelte-2y4c3r"}"><div class="${"responsive-square-image svelte-2y4c3r"}"><img src="${""}" srcset="${escape(urlFor(project.thumbnail.asset).width(400).auto("format"), true) + " 400w,\n							 		 " + escape(urlFor(project.thumbnail.asset).width(600).auto("format"), true) + " 600w,\n							 		 " + escape(urlFor(project.thumbnail.asset).width(800).auto("format"), true) + " 800w  \n							 		 " + escape(urlFor(project.thumbnail.asset).width(1200).auto("format"), true) + " 1200w,\n							 		 " + escape(urlFor(project.thumbnail.asset).width(1600).auto("format"), true) + " 1600w"}" sizes="${"calc(100vw - 3.5rem)"}" loading="${"lazy"}" decoding="${"async"}"${add_attribute("alt", project.thumbnail.alt_text, 0)} class="${"svelte-2y4c3r"}">
						</div></a>
					<div class="${"project-thumbnail__info-container svelte-2y4c3r"}"><div class="${"project-thumbnail__info-container__inner svelte-2y4c3r"}"><h2 class="${"project-thumbnail__headline svelte-2y4c3r"}">${escape(project.name)}</h2>

							${project.short_summary ? `<div class="${"project-thumbnail__description svelte-2y4c3r"}"><p>${escape(project.short_summary)}</p>
								</div>` : ``}

							<a href="${"/our-work/" + escape(project.handle.current, true)}" class="${"project-thumbnail__button button button--primary button--medium svelte-2y4c3r"}" rel="${"internal"}" title="${"View " + escape(project.name, true) + " Case Study"}">Read More</a></div>
					</div></div>
			</li>`;
  })}</ul>
</section>`;
});

export { Sctn_proj_list as S };
//# sourceMappingURL=sctn-proj-list-cb228b2c.js.map
