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
  await import('datejs');
});
</script>

<div class="work-container">
  {#each data.projects as project}
    <article>
      <details>
        <summary>
          <h1>
            {project.name}
          </h1>

          <p>
            {new Date(project.date_released).toString('MMM yyyy')}
          </p>

          <p aria-label="Project Medium">
            {project.medium.title}
          </p>
        </summary>

        <div>
          <div>
            <h2>About THe Work</h2>
            <div>
              <PortableText blocks={project.about} />
            </div>

            <div>
              <PortableText blocks={project.formats} />
            </div>

            {#if project.preview_videos}
              <ul>
                {#each project.preview_videos as video}
                  <li>
                    <video poster={urlFor(video.video_poster.asset)}>
                      <source src={video.video_file.url} />
                    </video>
                  </li>
                {/each}
              </ul>
            {/if}
          </div>

          <div>
            <h2>Credits</h2>
            <PortableText blocks={project.credits} />
          </div>

          <div>
            {#if project.project_media}
              {#each project.project_media as media}
                {#if media.asset}
                  <p>{media.alt_text}</p>
                  <img
                    src={urlFor(media.asset).width(900).auto('format').url()}
                    alt={media.alt_text}
                    loading="lazy"
                  />
                {/if}
              {/each}
            {/if}
          </div>
        </div>
      </details>
    </article>
  {/each}
</div>

<style>
.work-container {
  width: 100%;
  padding: 2rem;
}
</style>
