<script>
import IntersectionObserver from "svelte-intersection-observer";
import { urlFor } from "$lib/sanity";
import { onMount } from "svelte";
import { onDestroy } from "svelte";
import { browser } from "$app/environment";
import { page } from "$app/stores";
import { localizedPath } from "$lib/stores/language";

export let section;
let element;
let heroHeader;
let requestId = null;
let scroller = {};
let videoIsLoaded = false;
let transition;

function loadVideo(e) {
  let video = e.detail.target;

  if (e.detail.isIntersecting && !videoIsLoaded) {
    for (var source in video.children) {
      let videoSource = video.children[source];
      if (
        typeof videoSource.tagName === "string" &&
        videoSource.tagName === "SOURCE"
      ) {
        videoSource.src = videoSource.dataset.src;
      }
    }

    videoIsLoaded = true;
    video.load();
    video.classList.remove("lazy");
  }
}

onMount(() => {
  transition.style.opacity = 0;

  let mediaQueries = {
    mediumUp: window.matchMedia("(min-width: 768px)"),
    largeUp: window.matchMedia("(min-width: 900px)"),
  };

  scroller = {
    ease: 0.001,
    speed: 100,
    minY: 0.1,
    maxY: window.innerHeight * 2,
    y: 0,
  };

  if (mediaQueries.largeUp.matches) {
    window.addEventListener("wheel", onWheel);
  }

  window.addEventListener(
    "resize",
    throttle(() => {
      if (mediaQueries.largeUp.matches) {
        window.addEventListener("wheel", onWheel);
      } else {
        window.removeEventListener("wheel", onWheel);
        if (heroHeader) {
          heroHeader.style.display = "block";
          heroHeader.style.opacity = 1;
        }
      }
    }),
    { passive: true }
  );

  function throttle(fn, delay) {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...args);
    };
  }
});

onDestroy(() => {
  if (browser) {
    window.removeEventListener("wheel", onWheel);
  }
});

function removeHeroHeader() {
  heroHeader.style.display = "none";
  if (browser) {
    window.removeEventListener("wheel", onWheel);
  }
}

function onFrame() {
  scroller.speed += -scroller.speed * scroller.ease;
  // scroller.y -= scroller.speed;
  scroller.y -= Math.round(scroller.speed * 10) / 10;

  if (scroller.y < scroller.minY) {
    scroller.y = scroller.minY;
    scroller.speed = 0;
  } else if (scroller.y > scroller.maxY) {
    scroller.y = scroller.maxY;
    scroller.speed = 0;
  }

  var progress = scroller.y / scroller.maxY;

  if (heroHeader) {
    heroHeader.style.opacity = 1 - progress;
  }

  if (progress == 1) {
    removeHeroHeader();
  }

  requestId = null;

  if (scroller.speed) {
    requestId = requestAnimationFrame(onFrame);
  }
}

function onWheel(event) {
  var normalized;
  var delta = event.wheelDelta;

  if (delta) {
    normalized = delta % 120 == 0 ? delta / 120 : delta / 12;
  } else {
    delta = event.deltaY || event.detail || 0;
    normalized = -(delta % 3 ? delta * 10 : delta / 3);
  }

  scroller.speed += normalized;

  if (scroller.speed && !requestId) {
    requestId = requestAnimationFrame(onFrame);
  }
}
</script>

<div class="transition" bind:this={transition} />

<IntersectionObserver once {element} on:observe={loadVideo}>
  <section class="section-hero-header" bind:this={heroHeader}>
    <div class="section-hero-header__inner">
      <a
        href={section.featured_project?.handle?.current
          ? localizedPath(
              `/work/${section.featured_project.handle.current}`,
              $page.params.lang || "en"
            )
          : "#"}
        class="section-hero-header__copy"
      >
        <div class="main-container">
          <div class="section-hero-header__headline">
            <span style="text-transform: uppercase;"
              >Natalia Lassalle-Morillo</span
            >
          </div>
          <div class="section-hero-header__directional-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              style="enable-background:new 0 0 10.3 49.7"
              viewBox="0 0 10.3 49.7"
              ><path
                d="M6.2 42V0h-2v42h-4l5 7.6 5-7.6h-4z"
                style="fill:#fff"
              /></svg
            >
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
          <source data-src={section.video[0].video_file.url} type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
</IntersectionObserver>

<style>
.transition {
  background: black;
  width: 100vw;
  height: 100vh;
  z-index: 15;
  top: 0;
  position: fixed;
  transition: all 1s cubic-bezier(0.33, 1, 0.68, 1);
  pointer-events: none;
}

.section-hero-header {
  background-color: rgb(252, 247, 243);
  position: relative;
  width: 100%;
  display: flex;
  overflow: hidden;
  height: 100vh;
  z-index: 4;
  max-height: 60rem;
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
    max-height: 100vh;
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
  display: none;
}

@media screen and (min-width: 900px) {
  .section-hero-header__headline {
    bottom: auto;
    top: var(--level3);
    font-size: var(--mega);
    display: block;
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
  width: 0.85rem;
  position: absolute;
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
