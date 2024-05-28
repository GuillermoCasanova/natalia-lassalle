<script>
import { urlFor } from "$lib/sanity";
import { MetaTags } from "svelte-meta-tags";
import { page } from "$app/stores";
import SectionRichText from "../../components/sections/sctn-rich-text.svelte";
import SectionProjectsList from "../../components/sections/sctn-projects-list.svelte";
import SectionExperienceList from "../../components/sections/sctn-experience-list.svelte";
export let data;
export let seo;
</script>

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

            {#if section._type == "sctn_projects_list" && data.projects}
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
@media screen and (min-width: 900px) {
  .subpage {
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    bottom: 0;
    padding-top: 3.75rem;
  }
}

.subpage__inner {
  width: 100%;
}

@media screen and (min-width: 900px) {
  .subpage__inner .subpage__left-content {
    width: 55%;
    padding-right: var(--level1);
    padding-left: var(--level1);
    height: 100vh;
    position: relative;
    background-color: white;
    z-index: 1;
    position: relative;
    scrollbar-color: black white;
    scrollbar-width: thin;
  }
}

@media screen and (min-width: 900px) {
  .subpage__inner .subpage__left-content {
    width: 55%;
    padding-right: var(--level3);
    padding-left: var(--level3);
  }
}

.subpage__content-body {
}

@media screen and (min-width: 900px) {
  .subpage__content-body {
    padding-right: var(--level1);
    padding-left: var(--level1);
    padding-top: var(--level4);
  }
}
@media screen and (min-width: 1400px) {
  .subpage__content-body {
    padding-right: var(--level8);
    padding-left: var(--level8);
  }
}

.subpage__right-content {
  display: none;
}

@media screen and (min-width: 900px) {
  .subpage__right-content {
    background-color: black;
    height: 100vh;
    display: flex;
    width: 40%;
    position: fixed;
    top: 0;
    right: 0;
  }
}

@media screen and (min-width: 1400px) {
  .subpage__right-content {
    width: 50%;
  }
}

@media screen and (min-width: 900px) {
  .subpage__right-content {
    width: 60%;
    padding-right: 1rem;
    padding-left: 1rem;
    overflow: hidden;
    height: 100vh;
    overflow: auto;
    background-color: black;
  }
}

@media screen and (min-width: 1400px) {
  .subpage__right-content {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    width: 45%;
    overflow: auto;
  }
}
</style>
