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
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			{
				id: "/api/send-mail",
				pattern: /^\/api\/send-mail\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/send-mail/_server.js'))
			}
		],
		prerendered_routes: new Set(["/","/__data.json","/en","/en/__data.json","/es","/es/__data.json","/en/about","/en/about/__data.json","/es/about","/es/about/__data.json","/en/contact","/en/contact/__data.json","/es/contact","/es/contact/__data.json","/en/current","/en/current/__data.json","/es/current","/es/current/__data.json","/en/cv","/en/cv/__data.json","/es/cv","/es/cv/__data.json","/en/texts","/en/texts/__data.json","/es/texts","/es/texts/__data.json","/en/work","/en/work/__data.json","/es/work","/es/work/__data.json","/en/work/unruly-subjects","/en/work/unruly-subjects/__data.json","/en/work/tactics-of-transmission","/en/work/tactics-of-transmission/__data.json","/en/work/IRMA","/en/work/IRMA/__data.json","/en/work/anti_gona","/en/work/anti_gona/__data.json","/en/work/en-parabola-con-gloria-morillo","/en/work/en-parabola-con-gloria-morillo/__data.json","/en/work/foreign-in-a-domestic-sense","/en/work/foreign-in-a-domestic-sense/__data.json","/en/work/simulacro","/en/work/simulacro/__data.json","/en/work/veinticinco-pies-bajo-el-agua","/en/work/veinticinco-pies-bajo-el-agua/__data.json","/en/work/mehahn-w-christopher-ryan-williams","/en/work/mehahn-w-christopher-ryan-williams/__data.json","/en/work/an-atlas-to-the-night-and-other-electric-flowers","/en/work/an-atlas-to-the-night-and-other-electric-flowers/__data.json","/en/work/a-study-in-cohabitation","/en/work/a-study-in-cohabitation/__data.json","/en/work/a-performance-between-gloria-morillo-and-natalia-lassalle-morillo","/en/work/a-performance-between-gloria-morillo-and-natalia-lassalle-morillo/__data.json","/en/work/holguin-hialeah","/en/work/holguin-hialeah/__data.json","/en/work/on-drowning-i","/en/work/on-drowning-i/__data.json","/en/work/la-ruta","/en/work/la-ruta/__data.json","/en/work/grief-becomes","/en/work/grief-becomes/__data.json","/en/work/Retiro","/en/work/Retiro/__data.json","/en/work/passage-of-the-spiral","/en/work/passage-of-the-spiral/__data.json","/en/work/retiro-expanded","/en/work/retiro-expanded/__data.json","/en/work/pelicula-pasada-por-agua-or-underwater-film","/en/work/pelicula-pasada-por-agua-or-underwater-film/__data.json","/en/work/etern","/en/work/etern/__data.json","/en/work/en-parabola-conversations-on-tragedy-part-i","/en/work/en-parabola-conversations-on-tragedy-part-i/__data.json","/es/work/unruly-subjects","/es/work/unruly-subjects/__data.json","/es/work/tactics-of-transmission","/es/work/tactics-of-transmission/__data.json","/es/work/IRMA","/es/work/IRMA/__data.json","/es/work/anti_gona","/es/work/anti_gona/__data.json","/es/work/en-parabola-con-gloria-morillo","/es/work/en-parabola-con-gloria-morillo/__data.json","/es/work/foreign-in-a-domestic-sense","/es/work/foreign-in-a-domestic-sense/__data.json","/es/work/simulacro","/es/work/simulacro/__data.json","/es/work/veinticinco-pies-bajo-el-agua","/es/work/veinticinco-pies-bajo-el-agua/__data.json","/es/work/mehahn-w-christopher-ryan-williams","/es/work/mehahn-w-christopher-ryan-williams/__data.json","/es/work/an-atlas-to-the-night-and-other-electric-flowers","/es/work/an-atlas-to-the-night-and-other-electric-flowers/__data.json","/es/work/a-study-in-cohabitation","/es/work/a-study-in-cohabitation/__data.json","/es/work/a-performance-between-gloria-morillo-and-natalia-lassalle-morillo","/es/work/a-performance-between-gloria-morillo-and-natalia-lassalle-morillo/__data.json","/es/work/holguin-hialeah","/es/work/holguin-hialeah/__data.json","/es/work/on-drowning-i","/es/work/on-drowning-i/__data.json","/es/work/la-ruta","/es/work/la-ruta/__data.json","/es/work/grief-becomes","/es/work/grief-becomes/__data.json","/es/work/Retiro","/es/work/Retiro/__data.json","/es/work/passage-of-the-spiral","/es/work/passage-of-the-spiral/__data.json","/es/work/retiro-expanded","/es/work/retiro-expanded/__data.json","/es/work/pelicula-pasada-por-agua-or-underwater-film","/es/work/pelicula-pasada-por-agua-or-underwater-film/__data.json","/es/work/etern","/es/work/etern/__data.json","/es/work/en-parabola-conversations-on-tragedy-part-i","/es/work/en-parabola-conversations-on-tragedy-part-i/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
