import { c as create_ssr_component, v as validate_component, e as escape, a as each, b as add_attribute } from "./index.js";
import { R as Rich_text } from "./rich-text.js";
const Sctn_rich_text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { section } = $$props;
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  return `<section class="rich-text">${validate_component(Rich_text, "RichText").$$render($$result, { text: section.text }, {}, {})}</section>`;
});
const swiper = "";
const effectFade = "";
const sctnExperienceList_svelte_svelte_type_style_lang = "";
const css = {
  code: ".experience-list.svelte-iwtodr{border-bottom:1px solid black;padding-bottom:var(--level5)}.experience-list__headline.svelte-iwtodr{font-size:var(--h4);text-transform:uppercase}.experience-list__item.svelte-iwtodr{margin-bottom:var(--level2);display:grid;grid-template-columns:0.15fr 1fr}.experience-list__item__year.svelte-iwtodr{font-weight:bold;width:100%;display:block}a.svelte-iwtodr:hover,a.svelte-iwtodr:focus{text-decoration:underline}",
  map: null
};
const Sctn_experience_list = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { section } = $$props;
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  $$result.css.add(css);
  return `<section><div class="experience-list svelte-iwtodr"><div class="experience-list__inner"><h2 class="experience-list__headline svelte-iwtodr">${escape(section.title)}</h2>
      ${section.elements && section.elements.length > 0 ? `<ul>${each(section.elements, (experience) => {
    return `<li class="experience-list__item svelte-iwtodr"><span class="experience-list__item__year svelte-iwtodr">${escape(experience.year)}</span>
              ${experience.link && experience.link.href !== void 0 ? `<a${add_attribute("href", experience.link.href, 0)} target="_blank" class="svelte-iwtodr">${escape(experience.name)}
                </a>` : `<span class="experience-list__item__name">${escape(experience.name)}
                </span>`}
            </li>`;
  })}</ul>` : ``}</div></div>
</section>`;
});
export {
  Sctn_rich_text as S,
  Sctn_experience_list as a
};
