/** @type {import('./$types').PageLoad} */
import { client } from '$lib/sanity';

export async function load({ params, fetch }) {
    const request = `*[_type == 'page' && handle.current == 'our-work'][0] {
        page_title,
        handle,
        seo,
        page_layout[] {
            ...,
            projects[]->
        }
    } 
        `;

    const content = await client.fetch(request, params);

    return {
        content
    };
}

