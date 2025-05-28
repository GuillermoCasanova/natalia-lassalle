import { c as create_ssr_component, v as validate_component, t as escape, q as each, p as add_attribute } from './exports-DiiVpNfQ.js';
import { R as Rich_text } from './rich-text-C-lTZTxO.js';

const Sctn_rich_text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { section } = $$props;
  if ($$props.section === void 0 && $$bindings.section && section !== void 0) $$bindings.section(section);
  return `<section class="rich-text">${validate_component(Rich_text, "RichText").$$render($$result, { text: section.text }, {}, {})}</section>`;
});
const css = {
  code: ".experience-list.svelte-iwtodr{border-bottom:1px solid black;padding-bottom:var(--level5)}.experience-list__headline.svelte-iwtodr{font-size:var(--h4);text-transform:uppercase}.experience-list__item.svelte-iwtodr{margin-bottom:var(--level2);display:grid;grid-template-columns:0.15fr 1fr}.experience-list__item__year.svelte-iwtodr{font-weight:bold;width:100%;display:block}a.svelte-iwtodr:hover,a.svelte-iwtodr:focus{text-decoration:underline}",
  map: '{"version":3,"file":"sctn-experience-list.svelte","sources":["sctn-experience-list.svelte"],"sourcesContent":["<script>\\nexport let section;\\n<\/script>\\n\\n<section>\\n  <div class=\\"experience-list\\">\\n    <div class=\\"experience-list__inner\\">\\n      <h2 class=\\"experience-list__headline\\">{section.title}</h2>\\n      {#if section.elements && section.elements.length > 0}\\n        <ul>\\n          {#each section.elements as experience}\\n            <li class=\\"experience-list__item\\">\\n              <span class=\\"experience-list__item__year\\">\\n                {experience.year}\\n              </span>\\n              {#if experience.link && experience.link.href !== undefined}\\n                <a href={experience.link.href} target=\\"_blank\\">\\n                  {experience.name}\\n                </a>\\n              {:else}\\n                <span class=\\"experience-list__item__name\\">\\n                  {experience.name}\\n                </span>\\n              {/if}\\n            </li>\\n          {/each}\\n        </ul>\\n      {/if}\\n    </div>\\n  </div>\\n</section>\\n\\n<style>\\n.experience-list {\\n  border-bottom: 1px solid black;\\n  padding-bottom: var(--level5);\\n}\\n\\n.experience-list__headline {\\n  font-size: var(--h4);\\n  text-transform: uppercase;\\n}\\n\\n.experience-list__item {\\n  margin-bottom: var(--level2);\\n  display: grid;\\n  grid-template-columns: 0.15fr 1fr;\\n}\\n.experience-list__item__year {\\n  font-weight: bold;\\n  width: 100%;\\n  display: block;\\n}\\n\\na:hover,\\na:focus {\\n  text-decoration: underline;\\n}\\n</style>\\n"],"names":[],"mappings":"AAiCA,8BAAiB,CACf,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAC9B,cAAc,CAAE,IAAI,QAAQ,CAC9B,CAEA,wCAA2B,CACzB,SAAS,CAAE,IAAI,IAAI,CAAC,CACpB,cAAc,CAAE,SAClB,CAEA,oCAAuB,CACrB,aAAa,CAAE,IAAI,QAAQ,CAAC,CAC5B,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,MAAM,CAAC,GAChC,CACA,0CAA6B,CAC3B,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,KACX,CAEA,eAAC,MAAM,CACP,eAAC,MAAO,CACN,eAAe,CAAE,SACnB"}'
};
const Sctn_experience_list = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { section } = $$props;
  if ($$props.section === void 0 && $$bindings.section && section !== void 0) $$bindings.section(section);
  $$result.css.add(css);
  return `<section><div class="experience-list svelte-iwtodr"><div class="experience-list__inner"><h2 class="experience-list__headline svelte-iwtodr">${escape(section.title)}</h2> ${section.elements && section.elements.length > 0 ? `<ul>${each(section.elements, (experience) => {
    return `<li class="experience-list__item svelte-iwtodr"><span class="experience-list__item__year svelte-iwtodr">${escape(experience.year)}</span> ${experience.link && experience.link.href !== void 0 ? `<a${add_attribute("href", experience.link.href, 0)} target="_blank" class="svelte-iwtodr">${escape(experience.name)} </a>` : `<span class="experience-list__item__name">${escape(experience.name)} </span>`} </li>`;
  })}</ul>` : ``}</div></div> </section>`;
});

export { Sctn_rich_text as S, Sctn_experience_list as a };
//# sourceMappingURL=sctn-experience-list-B7d5IBOU.js.map
