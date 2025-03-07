/** @type {import('./$types').PageLoad} */
import { client } from '$lib/sanity';

export async function load(loadEvent) {

    const {params, fetch, parent} = loadEvent; 

    const parentData = await parent(); 

    const page_request = `*[_type == 'page' && handle.current == 'texts'][0] {
        ...,
        page_layout[]->
    } 
    `;

    const posts_request = `*[_type == 'post'  && !(_id in path('drafts.**'))][] {
        ...,
        authors[]->
    } 
    `;

    const content = await client.fetch(page_request, params);


    //This is available to child components via STUFF since it is in layout
    return {
        content,
        streamed: {
            posts: await client.fetch(posts_request)
        }
    };
}