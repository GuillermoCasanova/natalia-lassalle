<script>
import IntersectionObserver from 'svelte-intersection-observer';
import { urlFor } from '$lib/sanity';
import { onMount } from 'svelte';

import { gsap } from "gsap/dist/gsap";
    
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export let section;
let element;
let heroHeader;
console.log(section); 

function loadVideo(e) {
  let video = e.detail.target;

  if (e.detail.isIntersecting) {
    console.log('intersect!');

    for (var source in video.children) {
      let videoSource = video.children[source];
      if (
        typeof videoSource.tagName === 'string' &&
        videoSource.tagName === 'SOURCE'
      ) {
        videoSource.src = videoSource.dataset.src;
      }
    }

    video.load();
    video.classList.remove('lazy');
  }
}

onMount(()=> {

  // Define the animation
const triggerWindow = document.querySelector('window');
const fadeElement = heroHeader;
let currentOpacity = 1;

gsap.to(fadeElement, {
  opacity: () => currentOpacity,
  scrollTrigger: {
    trigger: triggerWindow,
    start: 'top center',
    end: 'bottom center',
    onUpdate: (self) => {
      console.log(self); 

      // const velocity = ScrollTrigger.getById(self.id).getVelocity();
      // const scrollDirection = velocity > 0 ? 1 : -1;

      // // Adjust opacity based on scroll direction
      // if (scrollDirection === 1) {
      //   // Scrolling down
      //   currentOpacity = Math.max(0, currentOpacity - 0.01); // Decrease opacity
      // } else {
      //   // Scrolling up
      //   currentOpacity = Math.min(1, currentOpacity + 0.01); // Increase opacity
      // }
    },
  },
});
}); 

</script>

<IntersectionObserver once {element} on:observe={loadVideo}>
  <section class="section-hero-header" bind:this={heroHeader}>

    <div class="section-hero-header__inner">
      <a href="/work/{section.featured_project.handle.current}" class="section-hero-header__copy">
        <div class="main-container">
            <div class="section-hero-header__headline">
              <h2 class="visually-hidden"> 
                Featured Project
              </h2>
              <p>2020 EN PARÁBOLA / CONVERSATIONS ON TRAGEDY</p>
            </div>
            <div class="section-hero-header__directional-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 10.3 49.7" viewBox="0 0 10.3 49.7"><path d="M6.2 42V0h-2v42h-4l5 7.6 5-7.6h-4z" style="fill:#fff"/></svg>
            </div>
        </div>
      </a>
    </div>
    
    <div class="section-hero-header__video-container">
      <div class="section-hero-header__video">
        <video
          width="320"
          height="240"
          muted
          preload="none"
          autoplay={section.video_autoplay || false}
          controls={!section.video_autoplay || false}
          playsinline={section.video_autoplay || false}
          loop={section.video_autoplay || false}
          poster={urlFor(section.video[0].video_poster.asset)}
          bind:this={element}
        >
          <source
            data-src={section.video[0].video_file.url}
            type="video/mp4"
          />
        </video>
        <!-- <img src={urlFor(section.video[0].video_poster.asset)} alt="" class="responsive-image"> -->
      </div>
    </div>
  </section>
</IntersectionObserver>

<style>
.section-hero-header {
  background-color: rgb(252, 247, 243);
  border-bottom: 2px solid white;
  position: relative;
  width: 100%;
  display: flex;
  margin-bottom: var(--level4); 
  overflow: hidden;
  height: 100vh;
  z-index: 4;
}

@media screen and (min-width: 900px) {
  .section-hero-header {
      position: fixed;
      top: 0; 
      bottom: 0; 
      height: 100vh;
      width: 100vw;
      z-index: 10;
      margin-bottom: 0; 
  }
}

.section-hero-header__inner {
  padding: 0; 
  position: absolute;
  width: 100%; 
  height: 100%;
  display: flex;
  align-items: flex-end;

}

@media screen and (min-width: 900px) {
  .section-hero-header__inner {
    padding-bottom: 0; 
    align-items: flex-start;
    padding-top: var(--level3);
    padding-left: var(--level1);
    padding-bottom: var(--level3);
  }
}


.section-hero-header__copy {
  z-index: 3;
  bottom: 0;
}


@media screen and (min-width: 900px) {
  .section-hero-header__copy {
      height: 100%; 
  }
}

.section-hero-header__headline {
  line-height: 1;
  text-align: left;
  color: #fff;
  font-size: var(--h1); 
}


@media screen and (min-width: 768px) {
  .section-hero-header__headline {
    bottom: auto; 
    font-size: var(--mega); 
  }
}

@media screen and (min-width: 900px) {
  .section-hero-header__headline {
    bottom: auto; 
    top: var(--level3); 
    font-size: var(--mega); 
  }
}

.section-hero-header__headline svg {
  height: 3rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}


.section-hero-header__directional-arrow {
  width: .85rem;
  position: absolute;
  right: var(--level3); 
  bottom: var(--level3); 
  z-index: 3;
  display: flex;
}

@media screen and (min-width: 900px) {
  .section-hero-header__directional-arrow {
    left: var(--level3); 
    right: auto; 
    bottom: 0; 
  width: 1.25rem;
  }
}
.section-hero-header__directional-arrow svg {
  width: 100%; 
  height: 100%;
  margin-top: auto; 
  margin-bottom: 0; 
}

.section-hero-header__video-container {
  width: 100%; 
  height: 100%; 
  object-fit: cover;
  position: absolute;
  z-index: 1;
}
.section-hero-header__video {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.section-hero-header__video video {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
