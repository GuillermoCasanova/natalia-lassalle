import { c as client } from './sanity-f213399b.js';
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
const component = async () => (await import('./_layout.svelte-27445cef.js')).default;
const file = '_app/immutable/components/pages/_layout.svelte-76f5609d.js';
const imports = ["_app/immutable/components/pages/_layout.svelte-76f5609d.js","_app/immutable/chunks/index-651331ac.js","_app/immutable/chunks/modal-trigger-8c77d267.js","_app/immutable/chunks/stores-c1c6e9b1.js","_app/immutable/chunks/singletons-aae10e62.js","_app/immutable/chunks/sanity-e5f0acfa.js","_app/immutable/modules/pages/_layout.js-74206756.js","_app/immutable/chunks/sanity-e5f0acfa.js","_app/immutable/chunks/_layout-0b40e446.js"];
const stylesheets = ["_app/immutable/assets/_layout-5549f6ad.css"];

export { component, file, imports, index, _layout as shared, stylesheets };
//# sourceMappingURL=0-74c0a0e2.js.map
