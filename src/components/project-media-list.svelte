<script>
import { urlFor } from '$lib/sanity';
import { onMount } from 'svelte';
export let media;

export let mediaWrapper; 


onMount(()=> {
  let imagesLoaded = 0;
  let totalImages = 0;
  let imagesHaveBeenLoaded = false;

  const container = mediaWrapper.closest('[data-project-media-container]');
  const loader = container.querySelector('[data-loader]'); 
  const images = container.querySelectorAll('img');

  totalImages = images.length;

  loader.style.opacity = 0; 
  images.forEach((elem, index)=> {
    elem.style.opacity = 0; 
    elem.style.transitionDelay = (index * .1) + 's'; 
  })

  container.addEventListener('load-media', function(event) {
    loader.style.opacity = 1; 

    if(imagesHaveBeenLoaded) {
      setTimeout(()=> {
        loader.style.opacity = 0;  
      }, 300); 

      animateImages(images);
      return
    }
    
    images.forEach((image, index) => {
      if (image.complete) {
        imageLoaded();
      } else {
        image.addEventListener('load', imageLoaded);
      }
    });

  }); 

  container.addEventListener('closed-drawer', function(event) {
    resetAnimation(images); 
  }); 

  if(imagesHaveBeenLoaded) {
    return;
  }

  function imageLoaded(event) {
    imagesLoaded += 1;

    if (imagesLoaded === totalImages) {
      imagesHaveBeenLoaded = true; 
      animateImages(images);
    } 

  }

  function animateImages(pImages) {
    setTimeout(()=> {
    loader.style.opacity = 0;  
      pImages.forEach((elem)=> {
      elem.style.opacity = 1; 
    }); 
    }, 300); 
  }

  function resetAnimation(pImages) {
    pImages.forEach((elem, index)=> {
    elem.style.opacity = 0; 
  })
  }; 
});

</script>

<div class="media-container" bind:this={mediaWrapper} > 
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
</div>

<style>
  .media-container {
  transition:  all .2s ease-in-out;
 }  

img {
  border: 1px solid rgb(31, 30, 30);
  box-shadow: 1px 10px 80px rgba(255, 255, 255, 0.1);
  transition: all .2s ease-in-out;
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
