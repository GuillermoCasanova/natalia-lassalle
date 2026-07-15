export const manifest = (() => {
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
		client: {start:"_app/immutable/entry/start.B0VtOgI5.js",app:"_app/immutable/entry/app.CrgOLBEJ.js",imports:["_app/immutable/entry/start.B0VtOgI5.js","_app/immutable/chunks/LjZgujQv.js","_app/immutable/chunks/BN1vU3J0.js","_app/immutable/entry/app.CrgOLBEJ.js","_app/immutable/chunks/BN1vU3J0.js","_app/immutable/chunks/B15YwO2F.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/send-mail",
				pattern: /^\/api\/send-mail\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/send-mail/_server.js'))
			},
			{
				id: "/[lang=lang]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"lang","matcher":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/[lang=lang]/about",
				pattern: /^\/([^/]+?)\/about\/?$/,
				params: [{"name":"lang","matcher":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/[lang=lang]/contact",
				pattern: /^\/([^/]+?)\/contact\/?$/,
				params: [{"name":"lang","matcher":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/[lang=lang]/current",
				pattern: /^\/([^/]+?)\/current\/?$/,
				params: [{"name":"lang","matcher":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/[lang=lang]/cv",
				pattern: /^\/([^/]+?)\/cv\/?$/,
				params: [{"name":"lang","matcher":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/[lang=lang]/texts",
				pattern: /^\/([^/]+?)\/texts\/?$/,
				params: [{"name":"lang","matcher":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/[lang=lang]/work",
				pattern: /^\/([^/]+?)\/work\/?$/,
				params: [{"name":"lang","matcher":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/[lang=lang]/work/[slug]",
				pattern: /^\/([^/]+?)\/work\/([^/]+?)\/?$/,
				params: [{"name":"lang","matcher":"lang","optional":false,"rest":false,"chained":false},{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			const { match: lang } = await import ('./entries/matchers/lang.js')
			return { lang };
		},
		server_assets: {}
	}
}
})();
