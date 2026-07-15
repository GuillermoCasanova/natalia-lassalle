
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/api" | "/api/send-mail" | "/[lang=lang]" | "/[lang=lang]/about" | "/[lang=lang]/contact" | "/[lang=lang]/current" | "/[lang=lang]/cv" | "/[lang=lang]/texts" | "/[lang=lang]/work" | "/[lang=lang]/work/[slug]";
		RouteParams(): {
			"/[lang=lang]": { lang: MatcherParam<typeof import('../src/params/lang.js').match> };
			"/[lang=lang]/about": { lang: MatcherParam<typeof import('../src/params/lang.js').match> };
			"/[lang=lang]/contact": { lang: MatcherParam<typeof import('../src/params/lang.js').match> };
			"/[lang=lang]/current": { lang: MatcherParam<typeof import('../src/params/lang.js').match> };
			"/[lang=lang]/cv": { lang: MatcherParam<typeof import('../src/params/lang.js').match> };
			"/[lang=lang]/texts": { lang: MatcherParam<typeof import('../src/params/lang.js').match> };
			"/[lang=lang]/work": { lang: MatcherParam<typeof import('../src/params/lang.js').match> };
			"/[lang=lang]/work/[slug]": { lang: MatcherParam<typeof import('../src/params/lang.js').match>; slug: string }
		};
		LayoutParams(): {
			"/": { lang?: MatcherParam<typeof import('../src/params/lang.js').match> | undefined; slug?: string | undefined };
			"/api": Record<string, never>;
			"/api/send-mail": Record<string, never>;
			"/[lang=lang]": { lang: MatcherParam<typeof import('../src/params/lang.js').match>; slug?: string | undefined };
			"/[lang=lang]/about": { lang: MatcherParam<typeof import('../src/params/lang.js').match> };
			"/[lang=lang]/contact": { lang: MatcherParam<typeof import('../src/params/lang.js').match> };
			"/[lang=lang]/current": { lang: MatcherParam<typeof import('../src/params/lang.js').match> };
			"/[lang=lang]/cv": { lang: MatcherParam<typeof import('../src/params/lang.js').match> };
			"/[lang=lang]/texts": { lang: MatcherParam<typeof import('../src/params/lang.js').match> };
			"/[lang=lang]/work": { lang: MatcherParam<typeof import('../src/params/lang.js').match>; slug?: string | undefined };
			"/[lang=lang]/work/[slug]": { lang: MatcherParam<typeof import('../src/params/lang.js').match>; slug: string }
		};
		Pathname(): "/" | "/api/send-mail" | `/${string}` & {} | `/${string}/` & {} | `/${string}/about` & {} | `/${string}/about/` & {} | `/${string}/contact` & {} | `/${string}/contact/` & {} | `/${string}/current` & {} | `/${string}/current/` & {} | `/${string}/cv` & {} | `/${string}/cv/` & {} | `/${string}/texts` & {} | `/${string}/texts/` & {} | `/${string}/work` & {} | `/${string}/work/` & {} | `/${string}/work/${string}` & {} | `/${string}/work/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/favicon.png" | string & {};
	}
}