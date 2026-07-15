<script>
import { MetaTags } from "svelte-meta-tags";
import { getSeoImageMeta } from "$lib/seo";
import SectionRichText from "../../../../components/sections/sctn-rich-text.svelte";
import SectionProjectsList from "../../../../components/sections/sctn-projects-list.svelte";
import SectionExperienceList from "../../../../components/sections/sctn-experience-list.svelte";
export let data;
let seo = data.content.seo;

function getCurrentProject(pHandle) {
  let projects = data.projects;

  if (!projects) {
    console.error("Projects data is missing");
    return;
  }

  projects.forEach((project) => {
    if (project.handle.current == data.projHandle) {
      seo = project.seo;
    }
  });
}

getCurrentProject(data.projHandle);

$: seoImage = getSeoImageMeta(seo?.banner_image);
</script>

<MetaTags
  title={seo.title}
  description={seo.description}
  canonical="https://natalialassallemorillo.com/work"
  openGraph={{
    url: "https://natalialassallemorillo.com/work",
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

<div class="subpage is-projects-page">
  <div class="subpage__inner">
    <div class="subpage__left-content is-projects-page" data-left-content>
      <div class="subpage__content-body">
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
