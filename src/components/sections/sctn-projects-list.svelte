<script>
import {PortableText} from '@portabletext/svelte';
import Loader from '../loader.svelte'; 
import ProjectMedia from '../project-media-list.svelte';
import ThumbnailsContainer from '../thumbnails-container.svelte';
import RichText from '../rich-text.svelte';
import { urlFor } from '$lib/sanity';
import { page } from '$app/stores';

import { client } from '$lib/sanity';
import { onMount } from 'svelte';

export let seo;
export let projects; 


let slug = $page.params.slug;
let myData = [];
let thumbnailsContainer; 
let activeThumb;
let activeThumbInfo; 
let projectIsOpen; 

if(projects.length > 0) {
  console.log(projects); 
  formatDates(projects);
}


function updateMetaInfo(pMetaInfo, pProjectHandle) {
  seo = pMetaInfo; 
  let url = new URL(window.location.href);

  if(pProjectHandle == url.pathname.split('/').filter(Boolean).pop()) {
    return
  }
  const newUrl = `/work/${pProjectHandle}`; // The new URL you want to navigate to
  history.pushState({}, "", newUrl);
}


function showThumbnail(event, pName, pMedium) {
  if(!projectIsOpen) {
    activeThumb = event.target.dataset.thumbImage; 
    activeThumbInfo = {
      name: pName,
      medium: pMedium
    }
  }
}

function hideThumbnail(pSeo) {
    activeThumb = false; 

}

function getThumbURL(pMedia) {
    if(pMedia[0]) {
      return urlFor(pMedia[0]._type == 'image_with_figure' ? pMedia[0].image.asset : pMedia[0].asset).width(900).auto('format').url(); 
    }
}

function formatDates(pProjects) {
  pProjects.forEach((project)=> {
    console.log(project); 
    project.date_released = project.date_released.substring(0, 4); 
  }); 

  pProjects.sort((a, b) => {
  // Convert "date_released" to numbers for correct numeric sorting
  const yearA = parseInt(a.date_released);
  const yearB = parseInt(b.date_released);

  // Sort in descending order
  return yearB - yearA;
});
}

onMount(() => {
  let currentState = history ? history.state : false;
  let activeDrawer = null; 

  const closeDrawer = (pElem) => {
    const detailsSelector = pElem.closest('details'); 
    const projectContentContainer = detailsSelector.querySelector('[data-project-content-container]'); 
    const mediaContainer = detailsSelector.querySelector('[data-project-media-container]'); 

    activeDrawer = null;

    projectContentContainer.style.height = 0;
    projectContentContainer.style.opacity = 0;
    mediaContainer.style.opacity = 0; 
    const event = new Event('closed-drawer');
    mediaContainer.dispatchEvent(event);

    pElem.querySelector('summary').setAttribute('aria-expanded', false);

    setTimeout(() => {
      pElem.removeAttribute('open');
    }, 400);
  };

  const toggleDrawer = (event) => {
    event.preventDefault();
    openDrawer(event.currentTarget);
  };

  const openDrawer = (pDrawer) => { 

    const detailsSelector = pDrawer.closest('details'); 
    const projectContent = detailsSelector.querySelector('.project-summary-content'); 
    const projectContentContainer = detailsSelector.querySelector('[data-project-content-container]'); 

    pDrawer.setAttribute('aria-expanded', true);

    if (pDrawer.dataset.id == activeDrawer) {
      closeDrawer(pDrawer.closest('details'));
      toggleFading(pDrawer.closest('[data-projects-list]'), true); 
      projectIsOpen = false; 
      return;
    }

    pDrawer.closest('[data-projects-list]').querySelectorAll('details').forEach((elem) => {
      if (elem.querySelector('summary').dataset.id !== pDrawer.dataset.id) {
        closeDrawer(elem.closest('details'));
      }
    });

    pDrawer.closest('details').setAttribute('open', true);
    toggleFading(pDrawer.closest('[data-projects-list]'));
    loadMedia(pDrawer); 
    projectIsOpen = true; 

    projectContentContainer.style.height =  projectContent.offsetHeight + 'px';
    projectContentContainer.style.opacity = 1; 

    activeDrawer = pDrawer.dataset.id;

    setTimeout(()=> {
      scrollToProject(pDrawer, 0); 
    }, 300); 
  };

  const scrollToProject = (pElement, pOffsetPixels) => {
      // Find the target section element by its ID
      const targetSection = pElement;
      // Check if the target section exists
      if (targetSection) {
        // Get the final scroll position
        const scrollPosition = targetSection.offsetTop;
        // Scroll to the target section with smooth behavior
        document.querySelector('[data-left-content]').scrollTo({
          top: scrollPosition - pOffsetPixels,
          behavior: 'smooth',
        });
      }
  }; 

  const initDrawers = (pContainer) => {
    pContainer.querySelectorAll('details').forEach((elem) => {
        elem.querySelector('summary').addEventListener('click', (e) => {
        toggleDrawer(e);
      });

      elem
        .querySelectorAll('[data-project-content-container]')
        .forEach((elem) => {
          elem.style.height = 0;
          elem.style.opacity = 0; 
        });

        elem
        .querySelectorAll('[data-project-media-container]')
        .forEach((elem) => {
          elem.style.opacity = 0; 
        });
    });


    if(slug) {
      let projectHandle = slug; 

      document.querySelectorAll('summary').forEach((elem)=> {
            if(elem.dataset.handle == projectHandle) {
              setTimeout(()=> {
                openDrawer(elem); 
              }, 100);
            }
      }); 
    }

  }

  const toggleFading = (pContainer, revealAll = false) => {

    pContainer.querySelectorAll('details').forEach(element => {

        if(!revealAll && element.getAttribute('open')  === null) {
          element.style.opacity = .5; 
        } else {
          element.style.opacity = 1; 
        }
    });
  }; 

  const loadMedia = (pDrawer) => {
    const detailsSelector = pDrawer.closest('details'); 
    const mediaContainer = detailsSelector.querySelector('[data-project-media-container]'); 
    const event = new Event('load-media');
    mediaContainer.dispatchEvent(event);
    setTimeout(()=> {
      mediaContainer.style.opacity = 1; 
    }, 10); 
  }; 

  // Add an event listener for the popstate event
  window.addEventListener('popstate', (event) => {
    event.preventDefault(); 
    let url = new URL(window.location.href);
    let handle = url.pathname.split('/').filter(Boolean).pop();
    let drawer = document.querySelector(`summary[data-handle="${handle}"]`);

    let previousState = currentState;
    currentState = history.state;

    if (currentState > previousState) {
      // User clicked the forward button
    } else if (currentState < previousState) {
      // User clicked the back button
    } else {
      // console.log('other'); 
      // // State change due to other reasons
      openDrawer(drawer); 
    }

    
 
  });

  initDrawers(document.querySelector('[data-projects-list]'));
}); 
</script>

<section class="projects-archive-container" data-projects-list>
  <div class="projects-list-container">

    {#if projects}
      {#each projects as project, index}
        <article class="project-line-item">
            <details>
              <summary
              aria-expanded="false"
              aria-label="Open FAQ answer for question {index}"
              data-id="project-{index}"
              data-handle="{project.handle.current}"
              data-thumb-image="{getThumbURL(project.project_media)}"
              on:mouseenter={(event) => showThumbnail(event, project.name, project.medium)}
              on:mouseleave={(event) => hideThumbnail()}
              on:click={() => {
                hideThumbnail();
                updateMetaInfo(project.seo, project.handle.current);
              }}>
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

              <div  class="project-summary-content-container" data-project-content-container>
                <div class="project-summary-content">

                <div class="project-summary-main">
                  <h2 class="project-summary-headline">About THe Work</h2>
                  <div class="project-summary-about">
                      
                    <RichText text="{project.about}"/>
                    
                    <div class="project-summary-formats">
                      <span>{project.formats}</span>
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
                  <RichText text="{project.credits}"/>
                </div>
              </div>

              </div>

              <div />

              <div class="project-media" data-project-media-container>
                <div class="project-media__loader" data-loader>
                  <Loader></Loader>
                </div>
                {#if project.project_media}
                  <ProjectMedia mediaWrapper media={project.project_media}/>
                {/if}
              </div>

            </details>
        </article>
      {/each} 
    {/if}
  </div>
</section>

<ThumbnailsContainer bind:this={thumbnailsContainer} bind:activeThumb bind:activeThumbInfo/>

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
  summary:hover,
  summary:focus {
    border-top: var(--border-thickness) solid black !important;
    background-color: black !important;
    color: white !important;
    cursor: pointer;
  }
  details:hover,
  details:focus {
    opacity: 1 !important;
  }
}

@media screen and (min-width: 900px) {
  details[open] summary {
    background-color: black;
    color: var(--secondary-color);
    border-top: var(--border-thickness) solid black;
  }
/* 
  details[open] .project-media {
    opacity: 1;
  } */
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

.projects-list-container{
  width: 100%;
  padding-top: 0.5rem;
  background-color: var(--secondary-color);
}

@media screen and (min-width: 900px) {
  .projects-archive-container {
    width: 100vw;
    max-width: 100vw;
    position: absolute;
    left: 0; 
  }
  .projects-list-container {
    width: 53%;
    left: 1%;
    position: relative;
  }
}





/*------------------------------------*\
    #Project Media
\*------------------------------------*/

.project-media {
  background-color: black;
  color: white;
  padding: 2rem;
  position: relative;
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
    padding: 0; 
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    scrollbar-color: white black;
    scrollbar-width: thin;
  }
}

@media screen and (min-width: 1400px) {
  .project-media {
    width: 45%;
  }
}

 .project-media__loader {
  transition:  all .3s ease-in-out;
} 

@media screen and (min-width: 900px) {
  .project-media:after {
    content: " "; 
    position: fixed; 
    bottom: 0; 
    right: 0; 
    width: 45%;
    z-index: 2;
    height: 30vh;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
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

.project-summary-content :global(em) {
  text-transform: uppercase;
  font-family: var(--secondary-font-family);
  font-weight: normal;
  font-style: normal;
}

.project-summary-content-container {
  overflow: hidden;
  position: relative;
  transition:  all .2s ease-in-out;
}

.project-summary-content :global(strong) {
  text-transform: uppercase;
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
