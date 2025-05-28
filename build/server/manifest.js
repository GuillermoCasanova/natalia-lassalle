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
		client: {start:"_app/immutable/entry/start.6Bx-yFmq.js",app:"_app/immutable/entry/app.DE112HXY.js",imports:["_app/immutable/entry/start.6Bx-yFmq.js","_app/immutable/chunks/C-3fZacK.js","_app/immutable/chunks/TOP8TKJg.js","_app/immutable/entry/app.DE112HXY.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/TOP8TKJg.js","_app/immutable/chunks/ru3awRz-.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-Dk18xLfx.js')),
			__memo(() => import('./chunks/1-ByH4cE3l.js')),
			__memo(() => import('./chunks/2-DasE9vY3.js')),
			__memo(() => import('./chunks/3-BXiuqxHT.js')),
			__memo(() => import('./chunks/4-CLjkZU-3.js')),
			__memo(() => import('./chunks/5-CiQSlaeU.js')),
			__memo(() => import('./chunks/6-BFl0yOgO.js')),
			__memo(() => import('./chunks/7-sLI9m6eu.js')),
			__memo(() => import('./chunks/8-NEHZIQAN.js')),
			__memo(() => import('./chunks/9-v1LWnbHP.js'))
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
