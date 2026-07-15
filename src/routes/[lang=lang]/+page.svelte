<script>
import { MetaTags } from "svelte-meta-tags";
import { page } from "$app/stores";
import SectionRichText from "../../components/sections/sctn-rich-text.svelte";
import SectionProjectsList from "../../components/sections/sctn-projects-list.svelte";
import SectionExperienceList from "../../components/sections/sctn-experience-list.svelte";
import FeaturedProjectsSlideshow from "../../components/featured-projects-slideshow.svelte";
import SectionHeroHeader from "../../components/sections/sctn-hero-header.svelte";
export let data;
export let seo;
</script>

<MetaTags
  title={$page.data.siteHead.seo.title}
  description={$page.data.siteHead.seo.description}
  canonical="https://natalialassallemorillo.com"
  openGraph={{
    url: "https://natalialassallemorillo.com",
    title: $page.data.siteHead.seo.title,
    description: $page.data.siteHead.seo.description,
    images: [
      {
        url:
          $page.data.siteHead.seo.banner_image.url + "?auto=format&width=1200",
        width: 800,
        height: 600,
        alt: $page.data.siteHead.seo.banner_image.alt_text
          ? $page.data.siteHead.seo.banner_image.alt_text
          : "Missing Alt Text",
      },
    ],
    site_name: $page.data.siteHead.seo.title,
  }}
  twitter={{
    site: "natalialassallemorillo.com",
    cardType: "summary_large_image",
    title: $page.data.siteHead.seo.title,
    description: $page.data.siteHead.seo.description,
    image: $page.data.siteHead.seo.banner_image.url + "?auto=format&width=1200",
    imageAlt: $page.data.siteHead.seo.banner_image.alt_text
      ? $page.data.siteHead.seo.banner_image.alt_text
      : "Missing Alt Text",
  }}
/>

{#if data.content.page_layout}
  {#each data.content.page_layout as section}
    {#if section._type == "sctn_hero_header"}
      <SectionHeroHeader {section} />
    {/if}
  {/each}
{/if}

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

            {#if section._type == "sctn_projects_list"}
              <SectionProjectsList bind:seo />
            {/if}
          {/each}
        {/if}
      </div>
    </div>

    <div class="subpage__right-content">
      <FeaturedProjectsSlideshow featuredProjects={data.featuredProjects} />
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
