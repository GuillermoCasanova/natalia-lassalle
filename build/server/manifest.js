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
		client: {start:"_app/immutable/entry/start.BJcEnae5.js",app:"_app/immutable/entry/app.D7OVEPiO.js",imports:["_app/immutable/entry/start.BJcEnae5.js","_app/immutable/chunks/BksHmwdK.js","_app/immutable/chunks/TOP8TKJg.js","_app/immutable/entry/app.D7OVEPiO.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/TOP8TKJg.js","_app/immutable/chunks/ru3awRz-.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-FEDfDVtC.js')),
			__memo(() => import('./chunks/1-BfeaSrqn.js')),
			__memo(() => import('./chunks/2--tmnktAy.js')),
			__memo(() => import('./chunks/3-CttTL2xz.js')),
			__memo(() => import('./chunks/4-Csis1PuU.js')),
			__memo(() => import('./chunks/5-C_feYLnh.js')),
			__memo(() => import('./chunks/6-CN2U-9LI.js')),
			__memo(() => import('./chunks/7-BmG9aLec.js')),
			__memo(() => import('./chunks/8-MSs6Ppih.js')),
			__memo(() => import('./chunks/9-Dlf4Vr7D.js'))
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
				endpoint: __memo(() => import('./chunks/_server-B_8aeIy-.js'))
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
