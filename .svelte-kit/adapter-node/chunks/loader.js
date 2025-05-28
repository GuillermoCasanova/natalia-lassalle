import { c as create_ssr_component } from "./ssr.js";
/* empty css                                     */
const css = {
  code: ".spiral.svelte-1puoqhi.svelte-1puoqhi{position:absolute;left:0;right:0;bottom:0;width:15vw;height:15vw;z-index:3;margin:auto;bottom:0;top:0;animation:svelte-1puoqhi-rotate 1.5s linear infinite;max-width:3.5rem}.spiral.svelte-1puoqhi svg.svelte-1puoqhi{width:100%;height:100%;object-fit:cover}.spiral.svelte-1puoqhi svg.svelte-1puoqhi{fill:#fff}@keyframes svelte-1puoqhi-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}",
  map: '{"version":3,"file":"loader.svelte","sources":["loader.svelte"],"sourcesContent":["\\n<style>\\n\\n.spiral {\\n  position: absolute;\\n  left:0; \\n  right: 0; \\n  bottom: 0; \\n  width: 15vw; \\n  height: 15vw;\\n  z-index: 3;\\n  margin: auto; \\n  bottom: 0; \\n  top: 0; \\n  animation: rotate 1.5s linear infinite;\\n  max-width: 3.5rem;\\n}\\n\\n.spiral svg,\\n img {\\n  width: 100%; \\n  height: 100%; \\n  object-fit: cover;\\n}\\n\\n.spiral svg {\\n  fill: #fff; \\n}\\n\\n@keyframes rotate {\\n  0% {\\n    transform: rotate(0);\\n  }\\n\\n   100% {\\n    transform: rotate(360deg);\\n   }\\n}\\n</style>\\n\\n\\n<div class=\\"spiral\\">\\n    <svg role=\\"presentation\\"><use xlink:href=\\"#spiral\\" /></svg>\\n  </div>\\n"],"names":[],"mappings":"AAGA,qCAAQ,CACN,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAC,CACN,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,CAAC,CACT,GAAG,CAAE,CAAC,CACN,SAAS,CAAE,qBAAM,CAAC,IAAI,CAAC,MAAM,CAAC,QAAQ,CACtC,SAAS,CAAE,MACb,CAEA,sBAAO,CAAC,kBACH,CACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KACd,CAEA,sBAAO,CAAC,kBAAI,CACV,IAAI,CAAE,IACR,CAEA,WAAW,qBAAO,CAChB,EAAG,CACD,SAAS,CAAE,OAAO,CAAC,CACrB,CAEC,IAAK,CACJ,SAAS,CAAE,OAAO,MAAM,CACzB,CACH"}'
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="spiral svelte-1puoqhi" data-svelte-h="svelte-1k3bzvg"><svg role="presentation" class="svelte-1puoqhi"><use xlink:href="#spiral"></use></svg></div>`;
});
export {
  Loader as L
};
