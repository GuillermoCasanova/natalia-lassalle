import { a } from './sanity-BzDAjV8D.js';
import '@sanity/client';
import '@sanity/image-url';

const t=true;async function e({url:{pathname:t}}){return {navigation:await a.fetch("*[_type == 'site-settings'][0] {\n        main_nav-> {\n            ..., \n            items[] {\n                ...,\n                select(navigationItemUrl.linkType == \"internal\") => {\n                    'navigationItemUrl': navigationItemUrl {\n                        ...,\n                        internalLink->\n                    }\n                }\n            }\n        }\n    }"),footer:await a.fetch("*[_type == 'footer-settings'][0] {\n        ...,\n        blocks[] {\n            ...,\n            select(_type == \"footer_link\") => {\n                ..., \n                'externalLink': externalLink->,\n                'internalLink': internalLink->\n            }\n        }\n    }"),pathname:t}}

var _layout = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: e,
	ssr: t
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-DRaOS6J5.js')).default;
const universal_id = "src/routes/+layout.js";
const imports = ["_app/immutable/nodes/0.DpEeAnGN.js","_app/immutable/chunks/Bb91wZ4N.js","_app/immutable/chunks/lGe4XDVY.js","_app/immutable/chunks/BxSyJHAB.js","_app/immutable/chunks/MeTQfUFH.js","_app/immutable/chunks/BaRlx0Q0.js","_app/immutable/chunks/DIn1FZiE.js","_app/immutable/chunks/CHnXIwll.js"];
const stylesheets = ["_app/immutable/assets/loader.D9AmVt5-.css","_app/immutable/assets/0.C2HXaX10.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=0-C3RxmWI9.js.map
