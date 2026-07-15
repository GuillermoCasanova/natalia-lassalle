<script>
import { MetaTags } from "svelte-meta-tags";
import LayoutSubpage from "../../../components/sections/layout-subpage.svelte";
export let data;
$: seo = data.siteHead?.seo ?? data.content?.seo;
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
      images: [
        {
          url: seo.banner_image?.url + "?auto=format&width=1200",
          width: 800,
          height: 600,
          alt: seo.banner_image?.alt_text
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
      image: seo.banner_image?.url + "?auto=format&width=1200",
      imageAlt: seo.banner_image?.alt_text
        ? seo.banner_image.alt_text
        : "Missing Alt Text",
    }}
  />
  {/if}
</svelte:head>

<LayoutSubpage {data} />
