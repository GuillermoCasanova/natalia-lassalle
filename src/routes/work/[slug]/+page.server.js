import { client } from '$lib/sanity';

export async function load({ params, fetch }) {
    const projHandle = params.slug.toString();

    const request = `*[_type == 'project' && handle.current == "${projHandle}"][0] {
            _id, 
            work_done,
            seo,
            name,
            handle,
            project_layout[] {
                ...,
                select(_type == "project_video_break") => {
                    ...,
                    'video_file': video_file.asset-> { 
                    ..., url, originalFilename
                    },
                    'video_poster': video_poster.asset-> { 
                    url, originalFilename
                    }
                }
            }
        }
        `;

    const project = await client.fetch(request, params);

    return {
        project
    };
}