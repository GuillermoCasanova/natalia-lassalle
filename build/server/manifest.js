const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.b1587504.mjs","imports":["_app/immutable/entry/start.b1587504.mjs","_app/immutable/chunks/index.b299b763.mjs","_app/immutable/chunks/singletons.b71ff160.mjs"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.2e3a577b.mjs","imports":["_app/immutable/entry/app.2e3a577b.mjs","_app/immutable/chunks/index.b299b763.mjs"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-1e9e0a79.js'),
			() => import('./chunks/1-f6542af1.js'),
			() => import('./chunks/2-30dc2567.js'),
			() => import('./chunks/3-614d0f4d.js'),
			() => import('./chunks/4-89a79df4.js'),
			() => import('./chunks/5-2dfc4852.js'),
			() => import('./chunks/6-d64c2e07.js'),
			() => import('./chunks/7-7a1592cd.js'),
			() => import('./chunks/8-645c1c01.js'),
			() => import('./chunks/9-1f5f3044.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/send-mail",
				pattern: /^\/api\/send-mail\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server-9d072d59.js')
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/current",
				pattern: /^\/current\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/cv",
				pattern: /^\/cv\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/texts",
				pattern: /^\/texts\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/work",
				pattern: /^\/work\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/work/[slug]",
				pattern: /^\/work\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
