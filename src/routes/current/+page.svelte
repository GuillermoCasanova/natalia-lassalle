<script>
import { urlFor } from "$lib/sanity";
import { MetaTags } from "svelte-meta-tags";
import { page } from "$app/stores";
import LayoutSubpage from "../../components/sections/layout-subpage.svelte";
export let data;
</script>

<svelte:head>
  <MetaTags
    title={$page.data.content.seo.title}
    description={$page.data.content.seo.description}
    canonical="https://natalialassallemorillo.com/current"
    openGraph={{
      url: "https://natalialassallemorillo.com/current",
      title: $page.data.content.seo.title,
      description: $page.data.content.seo.description,
      images: [
        {
          url:
            $page.data.content.seo.banner_image.url + "?auto=format&width=1200",
          width: 800,
          height: 600,
          alt: $page.data.content.seo.banner_image.alt_text
            ? $page.data.content.seo.banner_image.alt_text
            : "Missing Alt Text",
        },
      ],
      site_name: "SiteName",
    }}
    twitter={{
      handle: "natalialassallemorillo.com",
      site: "natalialassallemorillo.com",
      cardType: "summary_large_image",
      title: $page.data.content.seo.title,
      description: $page.data.content.seo.description,
      image:
        $page.data.content.seo.banner_image.url + "?auto=format&width=1200",
      imageAlt: $page.data.content.seo.banner_image.alt_text
        ? $page.data.content.seo.banner_image.alt_text
        : "Missing Alt Text",
    }}
  />
</svelte:head>

<LayoutSubpage {data} />
