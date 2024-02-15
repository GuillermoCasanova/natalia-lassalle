
<script>
    import {PortableText} from '@portabletext/svelte';
	import internalLink from '../custom-marks/internal-link.svelte';
	import externalLink from '../custom-marks/external-link.svelte';
	import mailtoLink from '../custom-marks/mailto-link.svelte';
    import { urlFor } from '$lib/sanity';

    export let posts
    export let section
    let dateOptions = {
        day: '2-digit',
        year: 'numeric',
        month: 'long',
    };
    console.log(posts); 
</script>




{#each posts as post}
<div class="main-container">
     <section>

        <h1 class="visually-hidden">
            {section.title}
        </h1>
    </section>
</div>

<div class="main-container">
    <article class="post">
        <div class="post__data">
            {new Date(post._createdAt).toLocaleDateString(
                'en-US',
                dateOptions
            )}
        </div>
        <h1 class="post__title">
            {post.title}
        </h1>
        <div class="post__featured-image">
            <div class="post-featured-image__inner">
                <img
                    src=""
                    srcset="{urlFor(post.featured_image.asset).width(400).auto('format')} 400w,
                        {urlFor(post.featured_image.asset).width(600).auto('format')} 600w,
                        {urlFor(post.featured_image.asset).width(800).auto('format')} 800w  
                        {urlFor(post.featured_image.asset).width(1200).auto('format')} 1200w,
                        {urlFor(post.featured_image.asset).width(1600).auto('format')} 1600w"
                    sizes="calc(100vw - 3.5rem)"
                    loading="lazy"
                    decoding="async"
                    alt="{post.featured_image.alt_text}"
                />
            </div>
        </div>
        <div class="post__body">
            <PortableText
            value={post.content}
            components={{
            marks: {
                internalLink: internalLink,
                externalLink: externalLink,
                mailtoLink: mailtoLink,
            }
            }}/>
        </div>
    </article>
</div>
{/each}

<style>


</style>