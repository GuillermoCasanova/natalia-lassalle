/** @type {import('./$types').PageLoad} */
import { client } from '$lib/server/sanity';

export function entries() {
	return [{ lang: 'en' }, { lang: 'es' }];
}

export async function load({ params, fetch }) {
    const request = `*[_type == 'site-settings'][0] {
            seo,
            analytics
        }
        `;

    const siteHead = await client.fetch(request, params);

    const page_request = `*[_type == 'page' && handle.current == 'current'][0] {
        ...,
        page_layout[]->
    } 
    `;


    const content = await client.fetch(page_request, params);


    //This is available to child components via STUFF since it is in layout
    return {
        siteHead,
        content
    };
}