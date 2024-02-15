<script>
    /** @type {import('./$types').PageData} */
	import Blog from '../../components/sections/sctn-blog.svelte';
    export let data;
    console.log(data.content.page_layout);
    let posts = data.streamed.posts;
</script>

{#if data.content.page_layout}
    {#each data.content.page_layout as section}
        {#if section._type == 'sctn_texts_list'}
            <Blog {section} {posts}></Blog>
        {/if}
    {/each}
{/if}