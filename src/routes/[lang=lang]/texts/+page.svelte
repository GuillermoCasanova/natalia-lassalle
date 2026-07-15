<script>
/** @type {import('./$types').PageData} */
import Texts from "../../../components/sections/sctn-texts.svelte";
import { MetaTags } from "svelte-meta-tags";
import { getSeoImageMeta } from "$lib/seo";

export let data;
let posts = data.posts;
let seo = data.content.seo;

$: seoImage = getSeoImageMeta(seo?.banner_image);
</script>

<svelte:head>
  <MetaTags
    title={seo.title}
    description={seo.description}
    canonical="https://natalialassallemorillo.com/texts"
    openGraph={{
      url: "https://natalialassallemorillo.com/texts",
      title: seo.title,
      description: seo.description,
      ...(seoImage ? { images: [seoImage] } : {}),
      site_name: "SiteName",
    }}
    twitter={{
      handle: "natalialassallemorillo.com",
      site: "natalialassallemorillo.com",
      cardType: "summary_large_image",
      title: seo.title,
      description: seo.description,
      ...(seoImage ? { image: seoImage.url, imageAlt: seoImage.alt } : {}),
    }}
  />
</svelte:head>

{#if data.content.page_layout}
  {#each data.content.page_layout as section}
    {#if section._type == "sctn_texts_list"}
      <Texts {section} {posts} />
    {/if}
  {/each}
{/if}
