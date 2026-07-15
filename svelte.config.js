import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel({
			runtime: 'nodejs24.x'
		}),
		prerender: {
			handleMissingId: 'ignore',
			handleHttpError: ({ status, path, referrer, message }) => {
				if (status === 404 || path.includes('/undefined')) {
					console.warn(`Prerender skipped missing page: ${path} (linked from ${referrer?.pathname ?? 'unknown'})`);
					return;
				}
				throw new Error(message);
			}
		},
		alias: {
			$lib: 'src/lib',
			$components: 'src/lib/components',
			$stores: 'src/lib/stores',
			$utils: 'src/lib/utils'
		}
	},
	preprocess: vitePreprocess()
};

export default config;
