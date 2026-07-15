/** @type {import('./$types').PageServerLoad} */
import { queries, getLanguageFromParams, fetchWithLocale } from '$lib/sanity/locale-client';

export function entries() {
	return [{ lang: 'en' }, { lang: 'es' }];
}

export async function load({ params }) {
    const language = getLanguageFromParams(params);

    // Use pre-built queries with automatic language selection
    const pageQuery = queries.page(language);
    const projectsQuery = queries.projects(language);

    // Fetch data with automatic language selection
    const [content, projects] = await Promise.all([
        fetchWithLocale(pageQuery, language, params),
        fetchWithLocale(projectsQuery, language)
    ]);
    
    return {
        content,
        projects,
        currentLanguage: language
    };
}