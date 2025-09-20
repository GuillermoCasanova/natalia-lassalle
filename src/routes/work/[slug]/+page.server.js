/** @type {import('./$types').PageServerLoad} */
import { queries, getLanguageFromUrl, fetchWithLocale } from '$lib/sanity/locale-client';
import { client } from '$lib/sanity';

export async function load(loadEvent) {
    console.log("Work slug page server running");
    const {params, fetch, parent, url} = loadEvent; 
    const parentData = await parent();
    
    // Get language from URL parameter
    const language = getLanguageFromUrl(url);
    
    console.log('=== WORK SLUG PAGE SERVER DEBUG ===');
    console.log('URL:', url.toString());
    console.log('Search params:', Object.fromEntries(url.searchParams));
    console.log('Language detected:', language);
    console.log('===================================');

    const projHandle = params.slug.toString(); 

    // Site settings query (not localized)
    const siteSettingsQuery = `*[_type == 'site-settings'][0] {
        seo,
        analytics
    }`;

    // Use scalable queries with automatic language selection
    const pageQuery = queries.page(language);
    const projectsQuery = queries.projects(language);

    // Fetch all data with automatic language selection
    const [siteHead, content, projects] = await Promise.all([
        client.fetch(siteSettingsQuery, params),
        fetchWithLocale(pageQuery, language, params),
        fetchWithLocale(projectsQuery, language)
    ]);

    //This is available to child components via STUFF since it is in layout
    return {
        siteHead,
        content,
        projects,
        projHandle,
        currentLanguage: language
    };
}