import { c as client } from './sanity-DpqZfrM0.js';
import '@sanity/client';
import '@sanity/image-url';

const ssr = true;
async function load({ url: { pathname } }) {
  const footerRequest = `*[_type == 'footer-settings'][0] {
        ...,
        blocks[] {
            ...,
            select(_type == "footer_link") => {
                ..., 
                'externalLink': externalLink->,
                'internalLink': internalLink->
            }
        }
    }`;
  const mainNavRequest = `*[_type == 'site-settings'][0] {
        main_nav-> {
            ..., 
            items[] {
                ...,
                select(navigationItemUrl.linkType == "internal") => {
                    'navigationItemUrl': navigationItemUrl {
                        ...,
                        internalLink->
                    }
                }
            }
        }
    }`;
  const navigation = await client.fetch(mainNavRequest);
  const footer = await client.fetch(footerRequest);
  return {
    navigation,
    footer,
    pathname
  };
}

var _layout = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  ssr: ssr
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-Bzdjp_EP.js')).default;
const universal_id = "src/routes/+layout.js";
const imports = ["_app/immutable/nodes/0.CqgWdnoQ.js","_app/immutable/chunks/xbnKh8CZ.js","_app/immutable/chunks/ru3awRz-.js","_app/immutable/chunks/TOP8TKJg.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DJ2DcCb_.js","_app/immutable/chunks/C-3fZacK.js","_app/immutable/chunks/mG0KThyr.js"];
const stylesheets = ["_app/immutable/assets/loader.BxSIXnGK.css","_app/immutable/assets/0.BZWa7cNy.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=0-Dk18xLfx.js.map
