<script>
/** @type {import('./$types').PageData} */
import Texts from "../../components/sections/sctn-texts.svelte";
import { MetaTags } from "svelte-meta-tags";
import { urlFor } from "$lib/sanity";

export let data;
let posts = data.streamed.posts;
let seo = data.content.seo;
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
      images: [
        {
          url: seo.banner_image.url + "?auto=format&width=1200",
          width: 800,
          height: 600,
          alt: seo.banner_image.alt_text
            ? seo.banner_image.alt_text
            : "Missing Alt Text",
        },
      ],
      site_name: "SiteName",
    }}
    twitter={{
      handle: "natalialassallemorillo.com",
      site: "natalialassallemorillo.com",
      cardType: "summary_large_image",
      title: seo.title,
      description: seo.description,
      image: seo.banner_image.url + "?auto=format&width=1200",
      imageAlt: seo.banner_image.alt_text
        ? seo.banner_image.alt_text
        : "Missing Alt Text",
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
