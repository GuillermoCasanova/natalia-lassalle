const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BBNR6vJS.js",app:"_app/immutable/entry/app.DK1mf2BO.js",imports:["_app/immutable/entry/start.BBNR6vJS.js","_app/immutable/chunks/DIn1FZiE.js","_app/immutable/chunks/BxSyJHAB.js","_app/immutable/entry/app.DK1mf2BO.js","_app/immutable/chunks/BxSyJHAB.js","_app/immutable/chunks/MeTQfUFH.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-C3RxmWI9.js')),
			__memo(() => import('./chunks/1-a1NkA8QQ.js')),
			__memo(() => import('./chunks/2-CX6gbKYh.js')),
			__memo(() => import('./chunks/3-DMwtcdRL.js')),
			__memo(() => import('./chunks/4-CI4czPFt.js')),
			__memo(() => import('./chunks/5-ivNE1WVi.js')),
			__memo(() => import('./chunks/6-BhupvjJW.js')),
			__memo(() => import('./chunks/7-BUXRgXBq.js')),
			__memo(() => import('./chunks/8-0Sa3a7p5.js')),
			__memo(() => import('./chunks/9-G-d-p-Q4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/send-mail",
				pattern: /^\/api\/send-mail\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-5NaBFFZt.js'))
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/current",
				pattern: /^\/current\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/cv",
				pattern: /^\/cv\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/texts",
				pattern: /^\/texts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/work",
				pattern: /^\/work\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/work/[slug]",
				pattern: /^\/work\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
