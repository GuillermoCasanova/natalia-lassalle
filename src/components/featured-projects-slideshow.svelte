<script>
import { urlFor } from "$lib/sanity";
import Swiper, { Autoplay, Pagination, EffectFade} from 'swiper';
import 'swiper/css';
import "swiper/css/effect-fade";
import { onMount } from "svelte";
import { onDestroy } from "svelte";
import { client } from '$lib/sanity';


let myData = [];
let featuredProjects = []; 
let swiper; 
let thumbnailContainer; 


onMount(()=> {
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    async function fetchData() {
    try {
        const query = `*[_type == 'project'][0..6]{
            name,
            thumbnail, 
            "medium" : medium ->{
            ...
            },
            "handle": handle.current
        }`;
        const data = await client.fetch(query);
        myData = shuffleArray(data);
        return myData;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    }

    fetchData().then((response)=> {
        featuredProjects = response;
        console.log(featuredProjects); 
        setTimeout(()=> {
            swiper = new Swiper('.featured-projects-swiper', {
                modules: [EffectFade, Pagination, Autoplay],
                speed: 1000,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }
            });

            thumbnailContainer.style.opacity = 1; 

        }, 200); 
    });
}); 

onDestroy(() => {
    // Destroy the Swiper instance when the component is unmounted
    if (swiper) {
        swiper.destroy();
    }
});


</script>

<aside>


{#if featuredProjects}
    <div class="thumbnails-container" style="opacity: 0;" bind:this={thumbnailContainer}>
        <div class="swiper thumbnails-container__inner   featured-projects-swiper ">
        <div class="swiper-wrapper">
        {#each featuredProjects as project}
            <div class="swiper-slide">
                <a href="/work/{project.handle}" title="Go to project {project.name}" rel="internal" class="thumbnail">
                    <div class="thumbnail__inner">
                        <img
                        src={urlFor(project.thumbnail).width(800).auto('format').url()}
                        role="presentation"
                        aria-hidden="true"
                        alt="placeholder"
                        loading="lazy"
                        class="responsive-image"
                    />
                    </div>
                    <div class="thumbnail__details">
                        <p class="thumbnail__details__name">
                            {project.name}
                        </p>
                        <p class="thumbnail__details__medium">
                            - {project.medium.title}
                        </p>
                    </div>
                </a>
            </div>
                {/each}
        </div>
    </div>
    </div>
{/if}

</aside>




<style>

.swiper-slide {
    width: 100%; 
}

.thumbnails-container {
      position: fixed;
      right: 1.5vw; 
      height: 100vh; 
      z-index: 100;
      width: 42vw; 
      left: auto; 
      display: flex;
      align-items: center;
      transition: all .8s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  @media screen and (min-width: 1700px) {
    .thumbnails-container {
        width: 38vw;
        right: 3.5vw;
    }
  }
   
  .thumbnails-container__inner {
      display: flex;
      align-items: center;
      height: auto;
      justify-content: center;
  }
  
  .thumbnail {
      position: relative;
      width: 100%; 
      max-width: 50rem;
  }

  .thumbnail:focus   .thumbnail__details ,
  .thumbnail:hover    .thumbnail__details {
    color: #fff; 
  }
  
  .thumbnail__inner {
      position: relative;
      padding-bottom: 54%; 
      margin-bottom: 1rem;
  }
  
  .thumbnail__details {
      position: relative;
      display: flex;
      justify-content: center;
      width: 100%; 
      text-align: center;
      color: gray; 
      font-size: var(--micro);
      text-transform: uppercase;
  }
  
  .thumbnail__details__name {
      margin-right: var(--level0); 
  }
  
  img {
      position: absolute;
      left: 0; 
      top: 0; 
      object-fit: cover;
      height: 100%;
      width: 100%; 
  }
  
  
  </style>