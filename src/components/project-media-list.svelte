<script>
import Swiper from "swiper";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { urlFor } from "$lib/sanity";
import { onMount } from "svelte";

export let media;
export let mediaWrapper;
let imagesWrapper;

onMount(() => {
  let mediaQueries = {
    mediumUp: window.matchMedia("(min-width: 768px)"),
    largeUp: window.matchMedia("(min-width: 900px)"),
  };

  initSlideshow(imagesWrapper, mediaQueries, "largeUp");

  function initSlideshow(pWrapper, pMediaQueries, pDisableOn) {
    const imagesWrapper = pWrapper;

    const slideshow = {
      originalHtml: null,
      swiper: null,
      container: pWrapper.closest("[data-project-media-container]"),
      saveOriginalHtml() {
        this.originalHtml = Array.from(imagesWrapper.children).map((child) =>
          child.cloneNode(true)
        );
      },

      generateSlides() {
        const slides = Array.from(imagesWrapper.children)
          .map((child) => `<div class="swiper-slide">${child.outerHTML}</div>`)
          .join("");
        return slides;
      },

      setUpHtml() {
        this.saveOriginalHtml();
        const slides = this.generateSlides();

        imagesWrapper.innerHTML = `
        <div class="swiper-container">
          <div class="swiper-wrapper">
            ${slides}
          </div>
          <div class="swiper-button-next">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 40.27 12">
              <path style="fill: currentColor" d="m40.03,6.56c.32-.32.32-.83,0-1.15,0,0,0,0,0,0L34.85.22c-.33-.31-.84-.29-1.15.04-.29.31-.29.8,0,1.12l4.61,4.61-4.61,4.61c-.33.31-.34.82-.04,1.15.31.33.82.34,1.15.04.01-.01.02-.02.04-.04l5.19-5.18ZM.81,6.8h38.64v-1.63H.81c-.45,0-.81.36-.81.81h0c0,.45.36.82.81.82Z"/>
            </svg>
          </div>
          <div class="swiper-button-prev">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 40.27 12">
              <path style="fill: currentColor" d="m39.45,5.2H2.78l3.79-3.79c.33-.31.34-.82.04-1.15s-.82-.34-1.15-.04c-.01.01-.02.02-.04.04L.24,5.44c-.32.32-.32.83,0,1.15,0,0,0,0,0,0l5.18,5.19c.33.31.84.29,1.15-.04.29-.31.29-.8,0-1.12l-3.79-3.8h36.67c.45,0,.82-.36.82-.82s-.36-.82-.82-.82Z"/>
            </svg>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      `;

        let latestImages = imagesWrapper.querySelectorAll("img");
        latestImages.forEach((elem, index) => {
          elem.style.opacity = 0;
          elem.style.transitionDelay = `${index * 0.08}s`;
        });
      },

      setUpMediaQueries(pMediaQueries, pDisableOn) {
        const mediaQueryList = pMediaQueries[pDisableOn];
        this.disableOn = pDisableOn;

        mediaQueryList.addEventListener("change", (event) => {
          if (event.matches) {
            this.destroySwiper();
            this.resetOriginalHtml();
          } else {
            this.setUpHtml();
            this.initSwiper();
          }
        });
      },

      resetOriginalHtml() {
        // Remove current children
        while (imagesWrapper.firstChild) {
          imagesWrapper.removeChild(imagesWrapper.firstChild);
        }

        this.originalHtml.forEach((child) => {
          imagesWrapper.appendChild(child.cloneNode(true));
        });
      },

      destroySwiper() {
        if (this.swiper) {
          this.swiper.detachEvents();
          this.swiper.destroy(true, true);
          this.swiper = null;
        }
      },

      initSwiper() {
        this.swiper = new Swiper(
          imagesWrapper.querySelector(".swiper-container"),
          {
            modules: [Navigation, A11y],
            effect: "slide",
            loop: false,
            slidesPerView: "auto",
            centeredSlides: true,
            autoHeight: true,
            spaceBetween: 20,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          }
        );
      },

      init() {
        if (window.innerWidth < 900) {
          this.setUpHtml();
          this.initSwiper();
        }

        this.setUpMediaQueries(pMediaQueries, pDisableOn);
      },
    };

    const ImageAnimation = {
      imagesLoaded: 0,
      totalImages: 0,
      imagesHaveBeenLoaded: false,
      container: null,
      loader: null,
      images: null,

      init() {
        this.imagesLoaded = 0;
        this.totalImages = 0;
        this.imagesHaveBeenLoaded = false;
        this.container = pWrapper.closest("[data-project-media-container]");
        this.loader = this.container.querySelector("[data-loader]");
        this.images, this.totalImages;
        this.loader.style.opacity = 0;
        this.resetAnimation();

        this.container.addEventListener("load-media", (event) => {
          this.loader.style.opacity = 1;
          this.images = this.container.querySelectorAll("img");
          this.totalImages = this.images.length;

          this.images.forEach((image) => {
            image.removeAttribute("loading");
          });

          if (this.imagesHaveBeenLoaded) {
            setTimeout(() => {
              this.loader.style.opacity = 0;
            }, 300);

            this.animateImages();
            return;
          }

          this.images.forEach((image) => {
            if (image.complete) {
              this.imageLoaded();
            } else {
              image.addEventListener("load", this.imageLoaded.bind(this), {
                once: true,
              });
            }
          });
        });

        this.container.addEventListener("closed-drawer", (event) => {
          this.container.classList.remove("is-visible");
          this.resetAnimation();
        });
      },

      imageLoaded(event) {
        this.imagesLoaded += 1;

        if (this.imagesLoaded === this.totalImages) {
          this.imagesHaveBeenLoaded = true;
          this.animateImages();
        }
      },

      animateImages() {
        const mediaContainer = this.container.querySelector(".media-container");
        let latestImages = this.container.querySelectorAll("img");

        setTimeout(() => {
          this.loader.style.opacity = 0;
          mediaContainer?.classList.add("is-revealed");
          latestImages.forEach((elem, index) => {
            elem.style.transitionDelay = `${index * 0.08}s`;
            elem.style.opacity = 1;
          });
        }, 200);
      },

      resetAnimation() {
        const mediaContainer = this.container.querySelector(".media-container");
        mediaContainer?.classList.remove("is-revealed");
        let latestImages = this.container.querySelectorAll("img");
        latestImages.forEach((elem) => {
          elem.style.opacity = 0;
          elem.style.transitionDelay = "0s";
        });
      },
    };

    slideshow.init();
    ImageAnimation.init();
  }
});
</script>

<div class="media-container" bind:this={mediaWrapper}>
  <div
    class="media-container__inner"
    data-project-media-slideshow
    bind:this={imagesWrapper}
  >
    {#each media as media}
      {#if media._type == "default_image"}
        <div>
          <img
            src={urlFor(media.asset).width(900).auto("format").url()}
            alt={media.alt_text}
            loading="lazy"
          />
        </div>
      {/if}

      {#if media._type == "image_with_figure" && media.figure}
        <figure>
          <img
            src={urlFor(media.image.asset).width(900).auto("format").url()}
            alt={media.alt_text}
            loading="lazy"
          />
          <figcaption>{media.figure}</figcaption>
        </figure>
      {/if}
    {/each}
  </div>
</div>

<style>
.media-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-bottom: var(--level9);
  padding-top: var(--level5);
  transition: all 0.2s ease-in-out;
}

img {
  border: 1px solid rgb(31, 30, 30);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

@media screen and (max-width: 899px) {
  .media-container :global(img) {
    transform: translateY(8px);
  }

  .media-container.is-revealed :global(img) {
    transform: translateY(0);
  }
}

figcaption {
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
  figcaption {
    max-width: 50ch;
    margin: auto;
    height: var(--level3);
    margin-bottom: var(--level1);
  }

  img {
    margin-bottom: var(--level2);
  }
}

:global(.media-container .swiper-slide) {
  max-width: 88vw;
}
:global(.media-container .swiper-button-next),
:global(.media-container .swiper-button-prev) {
  position: absolute;
  z-index: 2;
  bottom: 1rem;
  width: 8%;
}

:global(.media-container .swiper-button-prev) {
  left: 1rem;
}

:global(.media-container .swiper-button-next) {
  right: 1rem;
}
</style>
