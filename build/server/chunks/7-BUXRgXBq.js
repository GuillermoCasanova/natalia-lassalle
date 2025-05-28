import { a } from './sanity-BzDAjV8D.js';
import '@sanity/client';
import '@sanity/image-url';

async function n(n){const{params:a$1,fetch:e,parent:s}=n;await s();return {content:await a.fetch("*[_type == 'page' && handle.current == 'texts'][0] {\n        ...,\n        page_layout[]->\n    } \n    ",a$1),streamed:{posts:await a.fetch("*[_type == 'post'  && !(_id in path('drafts.**'))][] {\n        ...,\n        authors[]->\n    } \n    ")}}}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: n
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CNBT7tt9.js')).default;
const server_id = "src/routes/texts/+page.server.js";
const imports = ["_app/immutable/nodes/7.z4IoNyXz.js","_app/immutable/chunks/BxSyJHAB.js","_app/immutable/chunks/MeTQfUFH.js","_app/immutable/chunks/DYc1Bpty.js","_app/immutable/chunks/BaRlx0Q0.js","_app/immutable/chunks/DIn1FZiE.js","_app/immutable/chunks/Bb91wZ4N.js","_app/immutable/chunks/lGe4XDVY.js"];
const stylesheets = ["_app/immutable/assets/rich-text.DiPaT0Bv.css","_app/immutable/assets/7.ByD8kY5j.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-BUXRgXBq.js.map
