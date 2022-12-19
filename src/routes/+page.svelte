<script>
import { MetaTags } from 'svelte-meta-tags';
import { urlFor } from '$lib/sanity';
import { page } from '$app/stores';
import SectionTeam from '../components/pages/sctn-team.svelte';
import SectionMarquee from '../components/pages/sctn-marquee.svelte';
import SectionHeroHeader from '../components/pages/sctn-hero-header.svelte';
import SectionBrandStatement from '../components/pages/sctn-brand-statement.svelte';
import SectionFeaturedWork from '../components/pages/sctn-featured-work.svelte';
import SectionExpertise from '../components/pages/sctn-expertise.svelte';
import { onMount } from 'svelte';
import PortableText from '@portabletext/svelte';

export let data;

onMount(async () => {
  console.log(data);
});
</script>

<!-- <section>hero Header</section> -->

<div class="work-container">
  {#each data.projects as project}
    <article class="project-line-item">
      <details>
        <summary>
          <div class="project-summary-header">
            <h1 class="project-column  project-name">
              {project.name}
            </h1>

            <div class="project-column  project-publish-date">
              <p>
                {project.date_released}
              </p>
            </div>

            <div class="project-column  project-medium">
              <p aria-label="Project Medium">
                {project.medium.title}
              </p>
            </div>
          </div>
        </summary>

        <div class="project-summary-content">
          <div class="project-summary-main">
            <h2 class="project-summary-headline">About THe Work</h2>
            <div class="project-summary-about">
              <PortableText blocks={project.about} />
              <PortableText blocks={project.formats} />
            </div>

            {#if project.preview_videos}
              <ul class="project-preview-videos">
                {#each project.preview_videos as video}
                  <li class="project-preview-videos__item">
                    <div class="project-preview-videos__video-container">
                      <video poster={urlFor(video.video_poster.asset)}>
                        <source src={video.video_file.url} />
                      </video>
                    </div>
                  </li>
                {/each}
              </ul>
            {/if}
          </div>

          <div class="project-summary-credits">
            <h2 class="project-summary-headline">Credits</h2>
            <PortableText blocks={project.credits} />
          </div>
        </div>

        <div />

        <div class="project-media">
          {#if project.project_media}
            {#each project.project_media as media}
              {#if media.asset}
                <div>
                  <p>{media.alt_text}</p>
                  <img
                    src={urlFor(media.asset).width(900).auto('format').url()}
                    alt={media.alt_text}
                    loading="lazy"
                  />
                </div>
              {/if}
            {/each}
          {/if}
        </div>
      </details>
    </article>
  {/each}
</div>

<style>
video,
img {
  width: 100%;
}

details {
  display: block;
  width: 100%;
}

summary {
  border-bottom: 2px solid white;
  border-top: 2px solid transparent;
}

summary:hover {
  border-top: 2px solid black;
  cursor: pointer;
}

@media screen and (min-width: 900px) {
  details[open] summary {
    background-color: black;
    color: #fff;
    border-top: 2px solid black;
  }

  details[open] .project-media {
    opacity: 1;
  }
}

@media screen and (min-width: 900px) {
  summary {
    border-bottom: 2px solid black;
  }
}

summary::marker {
  display: none !important;
  position: absolute;
  color: white;
  content: none;
}
.work-container {
  width: 100%;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-bottom: 3rem;
}

@media screen and (min-width: 900px) {
  .work-container {
    width: 60%;
    padding-right: 1rem;
    padding-left: 1rem;
    overflow: hidden;
  }

  .work-container:after {
    content: ' ';
    background-color: black;
    height: 100vw;
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    z-index: -1;
  }
}

@media screen and (min-width: 1400px) {
  .work-container {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    width: 50%;
  }
}

@media screen and (min-width: 900px) {
  .project-media {
    width: 40%;
    background-color: black;
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    overflow: auto;
    padding: 2rem;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
}

@media screen and (min-width: 1400px) {
  .project-media {
    width: 50%;
    padding: 5rem;
  }
  .project-media img {
    margin-bottom: 3rem;
  }
}

.project-line-item {
  padding: 0;
  margin-bottom: 1.5rem;
}

@media screen and (min-width: 900px) {
  .project-line-item {
    padding: 0;
    margin-bottom: 1rem;
  }
}

.project-summary-header {
  display: grid;
  align-items: center;
  grid-template-rows: 1fr 1fr;
  grid-template-columns:
    1fr
    1fr;
}

@media screen and (min-width: 900px) {
  .project-summary-header {
    display: flex;
    align-items: stretch;
  }
}

.project-column {
  border-right: 2px black solid;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0.5rem;
  padding-left: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  align-items: center;
}

@media screen and (min-width: 900px) {
  .project-column {
    white-space: nowrap;
    width: 100%;
    max-width: 10rem;
    height: 100%;
    border-top: 2px solid transparent;
    height: auto;
    display: flex;
    align-items: center;
  }
}

.project-publish-date {
  width: auto;
  border-left: 2px solid black;
  border-top: 2px solid black;
  justify-self: flex-start;
  margin-bottom: 0;
  height: 100%;
}

@media screen and (min-width: 900px) {
  .project-publish-date {
    margin-bottom: 0;
    padding-bottom: 0;
    padding-top: 0;
    font-size: var(--micro);
    height: auto;
    width: 14%;
    border-top: 0;
  }
}

@media screen and (min-width: 1400px) {
  .project-publish-date {
    font-size: var(--h6);
  }
}

.project-name {
  font-size: var(--h5);
  font-weight: normal;
  grid-row-start: 2;
  max-width: 100%;
  border-top: 2px solid black;
  border-left: 2px solid black;
}

@media screen and (min-width: 900px) {
  .project-name {
    order: 2;
    border-left: 0;
    width: 59%;
    padding-left: 1rem;
    text-overflow: ellipsis;
    font-size: var(--micro);
    font-weight: bold;
    border-top: 0;
  }
}

@media screen and (min-width: 1400px) {
  .project-name {
    font-size: var(--h6);
  }
}

.project-medium {
  margin-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  grid-row-start: 2;
  border-top: 2px solid black;
  font-size: var(--micro);
}

@media screen and (min-width: 900px) {
  .project-medium {
    order: 3;
    font-size: var(--h6);
    width: 35%;
    border-top: 0;
  }
}

@media screen and (min-width: 1400px) {
  .project-medium {
  }
}

p,
h1 {
  margin-bottom: 0;
}

.project-summary-content {
  padding: 2rem;
  padding-top: 3rem;
}

.project-summary-headline {
  text-transform: uppercase;
  font-weight: bold;
  font-size: var(--text-micro);
}

@media screen and (min-width: 900px) {
  .project-summary-headline {
    font-size: var(--h6);
  }
}

.project-summary-content :global(strong) {
  text-transform: uppercase;
  font-family: var(--secondary-font-family);
}

@media screen and (min-width: 900px) {
  .project-summary-content {
    display: grid;
    grid-template-columns: 2.5fr 1fr;
    padding-left: 1rem;
    padding-right: 1rem;
    column-gap: 1.5rem;
  }
}

.project-summary-about {
  width: 100%;
}

@media screen and (min-width: 1400px) {
  .project-summary-main {
    width: 100%;
  }

  .project-summary-credits {
    width: 100%;
    font-size: var(--micro);
  }
}

.project-preview-videos {
  display: flex;
  width: 100%;
  overflow: auto;
  display: flex;
}

.project-preview-videos__item {
  width: 50%;
}

.project-preview-videos__video-container {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  padding-bottom: 55.6%;
}

.project-preview-videos__video-container video {
  position: absolute;
  width: 100%;
  object-fit: cover;
  height: 100%;
}
</style>
