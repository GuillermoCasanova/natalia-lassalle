<script>
import { urlFor } from '$lib/sanity';
export let media;
</script>

{#each media as media}
  {#if media._type == 'default_image'}
    <div>
      <img
        src={urlFor(media.asset).width(900).auto('format').url()}
        alt={media.alt_text}
        loading="lazy"
      />
    </div>
  {/if}

  {#if media._type == 'image_with_figure' && media.figure}
    <figure>
      <img
        src={urlFor(media.image.asset).width(900).auto('format').url()}
        alt={media.alt_text}
        loading="lazy"
      />
      <caption>{media.figure}</caption>
    </figure>
  {/if}
{/each}

<style>
img {
  border: 1px solid rgb(31, 30, 30);
  box-shadow: 1px 10px 80px rgba(255, 255, 255, 0.1);
}

caption {
  font-family: var(--secondary-font-family);
  font-style: italic;
  text-align: center;
  width: 100%;
  display: block;
  margin-bottom: 3rem;
  font-size: var(--mini); 
}

figure {
  margin: 0; 
}
figure img {
  margin-bottom: 0; 
}

@media screen and (min-width: 900px) {
  caption {
    max-width: 50ch;
    margin: auto;
    height: var(--level3);
    margin-bottom: var(--level1);
  }

  img {
    margin-bottom: var(--level2);
  }
}
</style>
