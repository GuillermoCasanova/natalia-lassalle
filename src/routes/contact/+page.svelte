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
</script>

<svelte:head>
  <MetaTags
    title={$page.data.content.seo.title}
    description={$page.data.content.seo.description}
    canonical="https://www.canonical.ie/"
    openGraph={{
      url: "https://www.url.ie/a",
      title: $page.data.content.seo.title,
      description: $page.data.content.seo.description,
      images: [
        {
          url: urlFor($page.data.content.seo.banner_image.asset),
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
      image: urlFor($page.data.content.seo.banner_image.asset),
      imageAlt: $page.data.content.seo.banner_image.alt_text
        ? $page.data.content.seo.banner_image.alt_text
        : "Missing Alt Text",
    }}
  />
</svelte:head>

<div class="subpage">
  <div class="subpage__inner">
    <div class="subpage__left-content" data-left-content>
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
              <SectionProjectsList bind:seo />
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
