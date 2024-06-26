<script>
// @ts-nocheck
import { urlFor } from "$lib/sanity";
import { MetaTags } from "svelte-meta-tags";
import SectionRichText from "../../components/sections/sctn-rich-text.svelte";
import SectionProjectsList from "../../components/sections/sctn-projects-list.svelte";
import SectionExperienceList from "../../components/sections/sctn-experience-list.svelte";
export let data;
export let projects;
let seo = data.content.seo;
</script>

<svelte:head>
  <MetaTags
    title={seo.title}
    description={seo.description}
    canonical="https://www.canonical.ie/"
    openGraph={{
      url: "https://www.url.ie/a",
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: urlFor(seo.banner_image.asset),
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
      image: urlFor(seo.banner_image.asset),
      imageAlt: seo.banner_image.alt_text
        ? seo.banner_image.alt_text
        : "Missing Alt Text",
    }}
  />
</svelte:head>

<div class="subpage is-projects-page">
  <div class="subpage__inner">
    <div class="subpage__left-content is-projects-page" data-left-content>
      <div class="subpage__content-body">
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
              <SectionProjectsList projects={data.projects} bind:seo />
            {/if}
          {/each}
        {/if}
      </div>
    </div>

    <div class="subpage__right-content" />
  </div>
</div>

<style>
.subpage__left-content.is-projects-page {
  overflow: visible !important;
}

.subpage.is-projects-page {
  overflow: hidden !important;
}
.subpage__inner .subpage__left-content {
  overflow: hidden !important;
}
</style>
