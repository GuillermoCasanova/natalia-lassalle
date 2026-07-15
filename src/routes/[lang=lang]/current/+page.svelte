<script>
import { MetaTags } from "svelte-meta-tags";
import { getSeoImageMeta } from "$lib/seo";
import LayoutSubpage from "../../../components/sections/layout-subpage.svelte";
export let data;
$: seo = data.siteHead?.seo ?? data.content?.seo;
$: seoImage = getSeoImageMeta(seo?.banner_image);
</script>

<svelte:head>
  {#if seo}
  <MetaTags
    title={seo.title}
    description={seo.description}
    canonical="https://natalialassallemorillo.com/current"
    openGraph={{
      url: "https://natalialassallemorillo.com/current",
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
  {/if}
</svelte:head>

<LayoutSubpage {data} />
