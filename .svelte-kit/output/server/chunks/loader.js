import { c as create_ssr_component } from "./index.js";
/* empty css                                      */const css = {
  code: ".spiral.svelte-1puoqhi.svelte-1puoqhi{position:absolute;left:0;right:0;bottom:0;width:15vw;height:15vw;z-index:3;margin:auto;bottom:0;top:0;animation:svelte-1puoqhi-rotate 1.5s linear infinite;max-width:3.5rem}.spiral.svelte-1puoqhi svg.svelte-1puoqhi{width:100%;height:100%;object-fit:cover}.spiral.svelte-1puoqhi svg.svelte-1puoqhi{fill:#fff}@keyframes svelte-1puoqhi-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}",
  map: null
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="spiral svelte-1puoqhi"><svg role="presentation" class="svelte-1puoqhi"><use xlink:href="#spiral"></use></svg></div>`;
});
export {
  Loader as L
};
