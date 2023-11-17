<script>
import { MetaTags } from 'svelte-meta-tags';
import { page } from '$app/stores';
import SectionHeroHeader from '../components/sections/sctn-hero-header.svelte';
import LayoutSubpage from '../components/sections/layout-subpage.svelte';
import { onMount } from 'svelte';

export let data;

onMount(async () => {
  console.log(data);
});
</script>

<!-- <section>hero Header</section> -->
{#if data.content.page_layout}
  {#each data.content.page_layout as section}
    {#if section._type == 'sctn_hero_header'}
      <SectionHeroHeader {section} />
    {/if}
  {/each}
{/if} 


<LayoutSubpage {data}/>
	