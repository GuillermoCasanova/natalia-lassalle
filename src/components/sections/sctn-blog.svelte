<script>
import { PortableText } from "@portabletext/svelte";
import internalLink from "../custom-marks/internal-link.svelte";
import externalLink from "../custom-marks/external-link.svelte";
import mailtoLink from "../custom-marks/mailto-link.svelte";
import { urlFor } from "$lib/sanity";
import { onMount } from "svelte";

export let posts;
export let section;
let dateOptions = {
  day: "2-digit",
  year: "numeric",
  month: "long",
};

let projectIsOpen = true;

onMount(() => {
  let activeDrawer = null;

  const closeDrawer = (pElem) => {
    const detailsSelector = pElem.closest("details");
    const projectContentContainer = detailsSelector.querySelector(
      "[data-details-content]"
    );

    activeDrawer = null;

    projectContentContainer.style.width = 0;
    projectContentContainer.style.opacity = 0;
    const event = new Event("closed-drawer");

    pElem.querySelector("summary").setAttribute("aria-expanded", false);
    detailsSelector.style.opacity = 0.5;

    setTimeout(() => {
      pElem.removeAttribute("open");
    }, 400);
  };

  const toggleDrawer = (event) => {
    event.preventDefault();
    openDrawer(event.currentTarget);
  };

  const openDrawer = (pDrawer) => {
    const detailsSelector = pDrawer.closest("details");
    const projectContent = detailsSelector.querySelector("article");
    const projectContentContainer = detailsSelector.querySelector(
      "[data-details-content]"
    );

    pDrawer.setAttribute("aria-expanded", true);

    if (pDrawer.dataset.id == activeDrawer) {
      closeDrawer(pDrawer.closest("details"));
      toggleFading(pDrawer.closest("[data-articles-list]"), true);
      projectIsOpen = false;
      return;
    }

    pDrawer
      .closest("[data-articles-list]")
      .querySelectorAll("details")
      .forEach((elem) => {
        if (elem.querySelector("summary").dataset.id !== pDrawer.dataset.id) {
          closeDrawer(elem.closest("details"));
        }
      });

    pDrawer.closest("details").setAttribute("open", true);
    toggleFading(pDrawer.closest("[data-articles-list]"));
    projectIsOpen = true;

    projectContentContainer.style.width = projectContent.offsetWidth + "px";
    projectContentContainer.style.opacity = 1;

    activeDrawer = pDrawer.dataset.id;
  };

  const initDrawers = (pContainer) => {
    pContainer.querySelectorAll("details").forEach((elem) => {
      elem.querySelector("summary").addEventListener("click", (e) => {
        toggleDrawer(e);
      });

      elem.querySelectorAll("[data-details-content]").forEach((elem) => {
        elem.style.width = 0;
        elem.style.opacity = 0;
      });
    });
  };

  const toggleFading = (pContainer, revealAll = false) => {
    pContainer.querySelectorAll("details").forEach((element) => {
      if (!revealAll && element.getAttribute("open") === null) {
        element.style.opacity = 0.5;
      } else {
        element.style.opacity = 1;
      }
    });
  };

  initDrawers(document.querySelector("[data-articles-list]"));
});
</script>

<div class="blog-container">
  <div class="mobile-blog">
    {#each posts as post}
      <article class="post">
        <div class="post__data">
          {new Date(post._createdAt).toLocaleDateString("en-US", dateOptions)}
        </div>
        <h1 class="post__title">
          {post.title}
        </h1>
        <div class="post__featured-image">
          <div class="post__featured-image__inner">
            <img
              src=""
              srcset="{urlFor(post.featured_image.asset)
                .width(400)
                .auto('format')} 400w,
                              {urlFor(post.featured_image.asset)
                .width(600)
                .auto('format')} 600w,
                              {urlFor(post.featured_image.asset)
                .width(800)
                .auto('format')} 800w  
                              {urlFor(post.featured_image.asset)
                .width(1200)
                .auto('format')} 1200w,
                              {urlFor(post.featured_image.asset)
                .width(1600)
                .auto('format')} 1600w"
              sizes="calc(100vw - 3.5rem)"
              loading="lazy"
              decoding="async"
              alt={post.featured_image.alt_text}
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
              },
            }}
          />
        </div>
      </article>
    {/each}
  </div>

  <div class="desktop-blog" data-articles-list>
    {#each posts as post, index}
      <div class="desktop-blog__post">
        <details>
          <summary
            aria-label="Open full article number {index}"
            aria-expanded="false"
            data-id="project-{index}"
          >
            <div class="desktop-blog-post__summary-text">
              <h3>
                {post.title}
              </h3>
            </div>
          </summary>
          <div data-details-content>
            <article class="post">
              <div class="post__date">
                {new Date(post._createdAt).toLocaleDateString(
                  "en-US",
                  dateOptions
                )}
              </div>

              <h1 class="post__title">
                {post.title}
              </h1>

              <div class="post__featured-image">
                <div class="post__featured-image__inner">
                  <img
                    src=""
                    srcset="{urlFor(post.featured_image.asset)
                      .width(400)
                      .auto('format')} 400w,
                                    {urlFor(post.featured_image.asset)
                      .width(600)
                      .auto('format')} 600w,
                                    {urlFor(post.featured_image.asset)
                      .width(800)
                      .auto('format')} 800w  
                                    {urlFor(post.featured_image.asset)
                      .width(1200)
                      .auto('format')} 1200w,
                                    {urlFor(post.featured_image.asset)
                      .width(1600)
                      .auto('format')} 1600w"
                    sizes="calc(100vw - 3.5rem)"
                    loading="lazy"
                    decoding="async"
                    class="responsive-image"
                    alt={post.featured_image.alt_text}
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
                    },
                  }}
                />
              </div>
            </article>
          </div>
        </details>
      </div>
    {/each}
  </div>
</div>

<style>
@media screen and (min-width: 768px) {
  .blog-container {
    background-color: black;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    padding-top: 3rem;
  }
}

.desktop-blog {
  display: none;
}

@media screen and (min-width: 768px) {
  .desktop-blog {
    display: flex;
  }
}

@media screen and (min-width: 768px) {
  .mobile-blog {
    display: none;
  }
}

[data-details-content] {
  transition: all 0.3s ease-in-out;
  height: 100vh;
  overflow: auto;
  scrollbar-color: black white;
  scrollbar-width: thin;
}

.desktop-blog__post {
  position: relative;
  border: 2px solid black;
  background-color: white;
  border-right: 0;
  border-top: 0;
  overflow: hidden;
}

.desktop-blog .desktop-blog__post:last-child {
  border-right: 2px solid black;
}

@media screen and (min-width: 768px) {
  details {
    position: relative;
    width: auto;
    left: 0;
    display: grid;
    height: 100vh;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr max-content;
  }

  details:hover {
    opacity: 1 !important;
  }
  .desktop-blog__post summary {
    position: relative;
    right: 0;
    left: auto;
    grid-column: 2;
    width: 4rem;
    display: flex;
    justify-content: center;
    padding-top: 2rem;
    height: 100%;
  }

  .desktop-blog__post summary:hover {
    cursor: pointer;
    background-color: black !important;
    color: white !important;
  }
}

.desktop-blog-post__summary-text {
  position: absolute;
  height: 100%;
  text-wrap: nowrap;
  writing-mode: vertical-rl;
}

.desktop-blog-post__summary-text h3 {
  font-size: var(--h5);
  text-align: left;
  padding-top: 2vh;
  font-weight: normal;
  font-family: var(--secondary-font-family);
}

@media screen and (min-width: 768px) {
  article {
    width: 100ch;
    max-width: 58rem;
    padding-left: var(--level5);
    padding-right: var(--level5);
    padding-bottom: 10rem;
    padding-top: var(--level5);
  }
}

.post__featured-image {
  position: relative;
  margin-bottom: var(--level5);
}

.post__featured-image__inner {
  position: relative;
  padding-bottom: 52.6%;
  overflow: hidden;
}

.post__date {
  margin-bottom: var(--level2);
  text-transform: uppercase;
  font-size: var(--h5);
}

.post__title {
  font-family: var(--secondary-font-family);
  line-height: 1.2;
  font-size: var(--h1);
  margin-bottom: var(--level5);
}

@media screen and (min-width: 768px) {
  .post__body {
    padding-left: var(--level7);
    padding-right: var(--level7);
  }
}
</style>
