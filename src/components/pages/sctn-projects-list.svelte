<script>
import Nav from '../nav.svelte';
import PortableText from '@portabletext/svelte';
import ProjectMedia from '../project-media-list.svelte';
import { urlFor } from '$lib/sanity';
export let data;
</script>

<div class="projects-archive-container">
  <div class="projects-container">
    <Nav {...data.navigation} />
    {#each data.projects as project, index}
      <article class="project-line-item">
        {#if index == 0}
          <details open>
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
                  <div class="project-summary-formats">
                    <span><PortableText blocks={project.formats} /></span>
                  </div>
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
                <ProjectMedia media={project.project_media} />
              {/if}
            </div>
          </details>
        {/if}

        {#if index != 0}
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
                    {#if project.medium}
                      {project.medium.title}
                    {/if}
                  </p>
                </div>
              </div>
            </summary>

            <div class="project-summary-content">
              <div class="project-summary-main">
                <h2 class="project-summary-headline">About THe Work</h2>
                <div class="project-summary-about">
                  <PortableText blocks={project.about} />
                  <div class="project-summary-formats">
                    <span><PortableText blocks={project.formats} /></span>
                  </div>
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
                <ProjectMedia media={project.project_media} />
              {/if}
            </div>
          </details>
        {/if}
      </article>
    {/each}
  </div>
</div>

<div class="project-media-area" />

<style>
:root {
  --border-thickness: 1px;
}

video,
img {
  width: 100%;
}

details {
  display: block;
  width: 100%;
}

summary {
  border-bottom: var(--border-thickness) solid white;
  border-top: var(--border-thickness) solid transparent;
}

@media screen and (min-width: 900px) {
  summary:hover {
    border-top: var(--border-thickness) solid black;
    cursor: pointer;
  }
}

@media screen and (min-width: 900px) {
  details[open] summary {
    background-color: black;
    color: var(--secondary-color);
    border-top: var(--border-thickness) solid black;
  }

  details[open] .project-media {
    opacity: 1;
  }
}

@media screen and (min-width: 900px) {
  summary {
    border-bottom: var(--border-thickness) solid black;
  }
}

summary::marker {
  display: none !important;
  position: absolute;
  color: white;
  content: none;
}

/*------------------------------------*\
    #Work Container
\*------------------------------------*/

.projects-archive-container {
  position: relative;
}

.projects-container,
.nav-container {
  width: 100%;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-top: 0.5rem;
  background-color: var(--secondary-color);
}

.nav-container {
  position: absolute;
  top: 0;
  z-index: 2;
}
@media screen and (min-width: 900px) {
  .projects-container,
  .nav-container {
    width: 60%;
    padding-right: 1rem;
    padding-left: 1rem;
    overflow: hidden;
    height: 100vh;
    overflow: auto;
    position: relative;
  }
  .nav-container {
    height: auto;
    padding-top: 0;
    padding-bottom: 0;
  }
}

@media screen and (min-width: 1400px) {
  .projects-container,
  .nav-container {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    width: 50%;
    overflow: auto;
  }
}

/*------------------------------------*\
    #Work Media
\*------------------------------------*/

.project-media-area {
  background-color: black;
  height: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  z-index: -1;
  display: none;
}

@media screen and (min-width: 900px) {
  .project-media-area {
    display: block;
    height: 100vh;
  }
}

@media screen and (min-width: 1400px) {
  .project-media-area {
    width: 50%;
    display: block;
  }
}

.project-media {
  background-color: black;
  color: white;
  padding: 2rem;
}

@media screen and (min-width: 900px) {
  .project-media {
    width: 40%;
    background-color: black;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 0;
    height: 100vh;
    overflow: auto;
    padding: 1.5rem;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
}

@media screen and (min-width: 1400px) {
  .project-media {
    width: 50%;
    padding: 5rem;
  }
}

/*------------------------------------*\
    #Project Line Item
\*------------------------------------*/

.project-line-item {
  padding: 0;
  margin-bottom: 1.5rem;
}

@media screen and (min-width: 900px) {
  .project-line-item {
    padding: 0;
    margin-bottom: 0.5rem;
  }
}

/*------------------------------------*\
    #Project Summary
\*------------------------------------*/

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
  border-right: var(--border-thickness) black solid;
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
    border-top: var(--border-thickness) solid transparent;
    height: auto;
    display: flex;
    align-items: center;
    padding: 0.25rem;
    padding-left: 0.75rem;
  }
}

.project-publish-date {
  width: auto;
  border-left: var(--border-thickness) solid black;
  border-top: var(--border-thickness) solid black;
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
  border-top: var(--border-thickness) solid black;
  border-left: var(--border-thickness) solid black;
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
  border-top: var(--border-thickness) solid black;
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

.project-summary-content {
  padding: 2rem;
  padding-top: 3rem;
}

.project-summary-content :global(strong) {
  text-transform: uppercase;
  font-family: var(--secondary-font-family);
  font-weight: normal;
}

@media screen and (min-width: 900px) {
  .project-summary-content {
    display: grid;
    grid-template-columns: 2.5fr max-content;
    padding-left: 1rem;
    padding-right: 1rem;
    column-gap: 2rem;
  }
}

@media screen and (min-width: 1800px) {
  .project-summary-content {
    padding: 1rem;
    padding-top: 2rem;
    column-gap: 3em;
  }
}

.project-summary-about {
  width: 100%;
}

@media screen and (min-width: 900px) {
  .project-summary-about {
    font-size: var(--h6);
  }
}

@media screen and (min-width: 1800px) {
  .project-summary-about {
  }
}

.project-summary-formats {
  font-size: var(--h6);
  margin-bottom: 1.25rem;
}

@media screen and (min-width: 900px) {
  .project-summary-formats {
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }
}

.project-summary-formats span {
  position: relative;
  padding-left: 1rem;
  display: block;
}
.project-summary-formats span:before {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  content: '■';
}

.project-summary-credits :global(p) {
  margin-bottom: 0.5rem;
}

.project-summary-credits strong {
  font-family: var(--secondary-font-family);
  font-weight: normal;
}

@media screen and (min-width: 900px) {
  .project-summary-credits {
    font-size: var(--micro);
    max-width: 30ch;
    opacity: 0.4;
    transition: all 0.2s ease-in-out;
  }

  .project-summary-credits:hover {
    opacity: 1;
  }
}

@media screen and (min-width: 1400px) {
  .project-summary-credits {
    font-size: var(--mini);
    max-width: 32ch;
  }
}

@media screen and (min-width: 1400px) {
  .project-summary-main {
    width: 100%;
    max-width: 105ch;
    line-height: 1.5;
  }
}

.project-preview-videos {
  display: flex;
  width: 100%;
  overflow: auto;
  display: flex;
  margin-bottom: 2rem;
}

.project-preview-videos__item {
  width: 45%;
}

@media screen and (min-width: 1400px) {
  .project-preview-videos__item {
    width: 35%;
  }
}

@media screen and (min-width: 1800px) {
  .project-preview-videos__item {
    width: 45%;
  }
}

.project-preview-videos__video-container {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  padding-bottom: 60.6%;
}

.project-preview-videos__video-container video {
  position: absolute;
  width: 100%;
  object-fit: cover;
  height: 100%;
}
</style>
