<script>
import { MetaTags } from "svelte-meta-tags";
import { page } from "$app/stores";
import { getSeoImageMeta } from "$lib/seo";
import SectionRichText from "../../../components/sections/sctn-rich-text.svelte";
import SectionExperienceList from "../../../components/sections/sctn-experience-list.svelte";
import FeaturedProjectsSlideshow from "../../../components/featured-projects-slideshow.svelte";
export let data;
export let seo;

$: seoImage = getSeoImageMeta($page.data.content?.seo?.banner_image);
</script>

<svelte:head>
  <MetaTags
    title={$page.data.content.seo.title}
    description={$page.data.content.seo.description}
    canonical="https://natalialassallemorillo.com/about"
    openGraph={{
      url: "https://natalialassallemorillo.com/about",
      title: $page.data.content.seo.title,
      description: $page.data.content.seo.description,
      ...(seoImage ? { images: [seoImage] } : {}),
      site_name: "SiteName",
    }}
    twitter={{
      handle: "natalialassallemorillo.com",
      site: "natalialassallemorillo.com",
      cardType: "summary_large_image",
      title: $page.data.content.seo.title,
      description: $page.data.content.seo.description,
      ...(seoImage
        ? { image: seoImage.url, imageAlt: seoImage.alt }
        : {}),
    }}
  />
</svelte:head>

<div class="subpage">
  <div class="subpage__inner">
    <div class="subpage__left-content" data-left-content>
      <div class="subpage__content-body main-container">
        <!-- <section class="no-padding">
						<div >
							<h1>{$page.data.content.page_title}</h1>
						</div>
					</section> -->
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
