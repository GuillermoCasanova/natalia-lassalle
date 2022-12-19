<script>
import { MetaTags } from 'svelte-meta-tags';
import { page } from '$app/stores';
import SectionHeroHeader from '../components/pages/sctn-hero-header.svelte';
import SectionProjectsList from '../components/pages/sctn-projects-list.svelte';
import { onMount } from 'svelte';

export let data;

onMount(async () => {
  console.log(data);
});
</script>

<!-- <section>hero Header</section> -->

{#if data.content.page_layout}
  {#each data.content.page_layout as section}
    <!-- {#if section._type == 'sctn_hero_header'}
    <SectionHeroHeader {section} />
  {/if} -->

    {#if section._type == 'sctn_projects_list'}
      <SectionProjectsList {data} />
    {/if}
  {/each}
{/if}
