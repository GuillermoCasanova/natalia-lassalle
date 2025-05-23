import { c as client } from "../../../chunks/sanity.js";
async function load(loadEvent) {
  const { params, fetch, parent } = loadEvent;
  await parent();
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
  return {
    content,
    streamed: {
      posts: await client.fetch(posts_request)
    }
  };
}
export {
  load
};
