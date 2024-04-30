<script>
/** @type {import('./$types').PageData} */
import Blog from "../../components/sections/sctn-blog.svelte";
export let data;
let posts = data.streamed.posts;
</script>

{#if data.content.page_layout}
  {#each data.content.page_layout as section}
    {#if section._type == "sctn_texts_list"}
      <Blog {section} {posts} />
    {/if}
  {/each}
{/if}
