import { c as client } from './sanity-ec4a4075.js';
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
const component = async () => (await import('./_layout.svelte-6c6142e5.js')).default;
const file = '_app/immutable/entry/_layout.svelte.7aa90e9d.mjs';
const universal_id = "src/routes/+layout.js";
const imports = ["_app/immutable/entry/_layout.svelte.7aa90e9d.mjs","_app/immutable/chunks/index.b299b763.mjs","_app/immutable/chunks/stores.1d5fd5af.mjs","_app/immutable/chunks/singletons.6d29df05.mjs","_app/immutable/chunks/loader.svelte_svelte_type_style_lang.f388cf5c.mjs","_app/immutable/chunks/loader.c08fc5c8.mjs","_app/immutable/entry/_layout.js.e08a6323.mjs","_app/immutable/chunks/sanity.d951c4df.mjs","_app/immutable/chunks/_layout.00bde2c4.mjs"];
const stylesheets = ["_app/immutable/assets/_layout.8f398079.css","_app/immutable/assets/loader.b630ed7c.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=0-1728acb7.js.map
