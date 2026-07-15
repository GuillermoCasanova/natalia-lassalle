import { building } from '$app/environment';
import { redirect } from '@sveltejs/kit';

const SUPPORTED_LANGS = ['en', 'es'];
const LEGACY_ROUTES = ['about', 'work', 'contact', 'cv', 'texts', 'current'];

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	if (!building) {
		const { pathname, searchParams } = event.url;

		if (pathname === '/') {
			throw redirect(301, '/en');
		}

		const langParam = searchParams.get('lang');
		if (langParam && SUPPORTED_LANGS.includes(langParam)) {
			const remainingParams = new URLSearchParams(searchParams);
			remainingParams.delete('lang');
			const query = remainingParams.toString();
			const suffix = query ? `?${query}` : '';
			throw redirect(301, `/${langParam}${pathname}${suffix}`);
		}

		const segments = pathname.split('/').filter(Boolean);
		if (segments.length > 0 && !SUPPORTED_LANGS.includes(segments[0])) {
			const isLegacyRoute =
				LEGACY_ROUTES.includes(segments[0]) || (segments[0] === 'work' && segments.length > 1);

			if (isLegacyRoute) {
				const query = searchParams.toString();
				throw redirect(301, `/en${pathname}${query ? `?${query}` : ''}`);
			}
		}
	}

	return resolve(event);
}
