<script>
import IntersectionObserver from 'svelte-intersection-observer';
import { urlFor } from '$lib/sanity';
import { onMount } from 'svelte';

export let section;
export let element;

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
</script>

<IntersectionObserver once {element} on:observe={loadVideo}>
  <section class="section-hero-header">
    <div class="section-hero-header__inner main-container">
      <div class="section-hero-header__content">
        <div class="section-hero-header__headline">
          <h1 class="visually-hidden">{section.headline}</h1>
          <svg role="presentation"><use xlink:href="#logo" /></svg>
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
          </div>
        </div>
      </div>
    </div>
  </section>
</IntersectionObserver>

<style>
.section-hero-header {
  background-color: rgb(252, 247, 243);
  border-bottom: 2px solid white;
  z-index: 2;
  position: relative;
}

@media screen and (min-width: 940px) {
  .section-hero-header {
    margin-bottom: 100vh; 
  }
}

.section-hero-header__inner {
  padding: 0;
}
.section-hero-header__headline {
  width: 100%;
  text-align: center;
  z-index: 1;
  position: relative;
  color: #fff;
  fill: #fff;
}

.section-hero-header__headline svg {
  height: 3rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.section-hero-header {
  width: 100%;
  display: flex;
  height: 100vh;
}

.visually-hidden {
  display: none;
}

.section-hero-header__video {
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 0;
}

.section-hero-header__video video {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
