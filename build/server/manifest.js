const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","favicon.png","logo.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-f60f9e93.js","imports":["_app/immutable/start-f60f9e93.js","_app/immutable/chunks/index-651331ac.js","_app/immutable/chunks/singletons-aae10e62.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-74c0a0e2.js'),
			() => import('./chunks/1-3b0bcefe.js'),
			() => import('./chunks/2-2faf9c87.js'),
			() => import('./chunks/3-1cecca12.js'),
			() => import('./chunks/4-e209c0a6.js'),
			() => import('./chunks/5-cfc9a3e0.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "hiring",
				pattern: /^\/hiring\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "our-work",
				pattern: /^\/our-work\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "api/send-mail",
				pattern: /^\/api\/send-mail\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./chunks/_server-c05158a2.js')
			},
			{
				id: "our-work/[slug]",
				pattern: /^\/our-work\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
