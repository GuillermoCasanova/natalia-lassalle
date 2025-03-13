<script>
import { urlFor } from "$lib/sanity";
import { MetaTags } from "svelte-meta-tags";
import { page } from "$app/stores";
import SectionRichText from "../../components/sections/sctn-rich-text.svelte";
import SectionProjectsList from "../../components/sections/sctn-projects-list.svelte";
import SectionExperienceList from "../../components/sections/sctn-experience-list.svelte";
import FeaturedProjectsSlideshow from "../../components/featured-projects-slideshow.svelte";
export let data;
export let seo;
import { onMount } from "svelte";

onMount(() => {
  console.log($page.data.content.page_layout);
});
</script>

<svelte:head>
  <MetaTags
    title={$page.data.content.seo.title}
    description={$page.data.content.seo.description}
    canonical="https://natalialassallemorillo.com/contact"
    openGraph={{
      url: "https://natalialassallemorillo.com/contact",
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

<div class="subpage">
  <div class="subpage__inner">
    <div class="subpage__left-content" data-left-content>
      <div class="subpage__content-body main-container">
        {#if data.content.page_layout}
          {#each data.content.page_layout as section}
            {#if section._type == "sctn_rich_text"}
              <SectionRichText {section} />
            {/if}

            {#if section._type == "sctn_experience_list"}
              <SectionExperienceList {section} />
            {/if}
          {/each}
        {/if}
      </div>
    </div>

    <div class="subpage__right-content">
      <FeaturedProjectsSlideshow />
    </div>
  </div>
</div>

<style>
@media screen and (min-width: 900px) {
  .main-container {
    padding-top: var(--level6);
  }
}
</style>
