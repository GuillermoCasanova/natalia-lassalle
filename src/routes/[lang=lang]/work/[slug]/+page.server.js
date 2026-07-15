/** @type {import('./$types').PageServerLoad} */
import { queries, getLanguageFromParams, fetchWithLocale } from '$lib/sanity/locale-client';
import { client } from '$lib/server/sanity';

export async function load({ params }) {
	const language = getLanguageFromParams(params);
	const projHandle = params.slug.toString();

	const siteSettingsQuery = `*[_type == 'site-settings'][0] {
        seo,
        analytics
    }`;

	const pageQuery = queries.page(language);
	const projectsQuery = queries.projects(language);

	const [siteHead, content, projects] = await Promise.all([
		client.fetch(siteSettingsQuery, params),
		fetchWithLocale(pageQuery, language, params),
		fetchWithLocale(projectsQuery, language)
	]);

	return {
		siteHead,
		content,
		projects,
		projHandle,
		currentLanguage: language
	};
}

export async function entries() {
	const projects = await client.fetch(
		`*[_type == 'project' && !(_id in path('drafts.**'))] { "slug": handle.current }`
	);

	return ['en', 'es'].flatMap((lang) => projects.map(({ slug }) => ({ lang, slug })));
}
