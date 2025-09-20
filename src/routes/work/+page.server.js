/** @type {import('./$types').PageServerLoad} */
import { queries, getLanguageFromUrl, fetchWithLocale } from '$lib/sanity/locale-client';

export async function load({ params, url }) {
    // Get language from URL parameter (e.g., ?lang=es)
    const language = getLanguageFromUrl(url);
    
    console.log('=== SERVER LANGUAGE DEBUG ===');
    console.log('URL:', url.toString());
    console.log('Detected language:', language);
    console.log('==============================');

    // Use pre-built queries with automatic language selection
    const pageQuery = queries.page(language);
    const projectsQuery = queries.projects(language);

    // Fetch data with automatic language selection
    const [content, projects] = await Promise.all([
        fetchWithLocale(pageQuery, language, params),
        fetchWithLocale(projectsQuery, language)
    ]);
    
    console.log('=== SERVER PROJECTS DEBUG ===');
    console.log('Projects fetched:', projects);
    console.log('Number of projects:', projects?.length);
    console.log('Language used:', language);
    console.log('================================');
    
    return {
        content,
        projects,
        currentLanguage: language
    };
}