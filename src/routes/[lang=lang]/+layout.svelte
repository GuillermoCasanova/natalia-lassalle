<script>
// @ts-nocheck

import "normalize.css";
import "../../styles/base.css";
import "../../styles/grid.css";
import Nav from "../../components/header.svelte";
import SvgGraphics from "../../components/svg-graphics.svelte";
import ContactForm from "../../components/contact-form.svelte";
import { afterNavigate, beforeNavigate } from "$app/navigation";
import { fade } from "svelte/transition";
import { cubicIn } from "svelte/easing";
import { cubicOut } from "svelte/easing";
import { onMount } from "svelte";
import { page } from "$app/stores";
import { browser } from "$app/environment";
import Loader from "$lib/components/loader.svelte";
import { initializeLanguageFromParams } from "$lib/stores/language";

export let data;

$: navigationData = data.navigation;
$: lang = data.currentLanguage;

let ready = true;

$: loading = false;
$: pathName = $page.url.pathname;

function scrollToSection(pHash, pBehavior) {
  let element = document.querySelector(pHash);
  let headerOffset = document.querySelector("header").offsetHeight - 5;
  let elemPosition = element.getBoundingClientRect().top;
  let offsetPosition = elemPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: pBehavior,
  });
}

afterNavigate((navigation) => {
  loading = false;

  if (!navigation.to.url.hash) {
    window.scrollTo({ top: 0 });
  }

  if ($page.url.hash) {
    scrollToSection($page.url.hash, "auto");
  }
});

beforeNavigate(({ to }) => {
  if (to.route.id) {
    loading = true;
  }
});

onMount(() => {
  initializeLanguageFromParams(data.currentLanguage);

  document.querySelectorAll('a[href^="/#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (pathName === `/${lang}` || pathName === `/${lang}/`) {
        e.preventDefault();
        scrollToSection(this.getAttribute("href").replace("/", ""), "smooth");
      }
    });
  });
});

$: if (browser) {
  document.documentElement.lang = lang;
}
</script>

{#if loading}
  <div
    class="loading-screen"
    in:fade={{ duration: 300, easing: cubicIn }}
    out:fade={{ duration: 300, easing: cubicOut }}
  >
    <Loader />
  </div>
{/if}

<Nav {...navigationData} {lang} />

<main data-sveltekit-prefetch>
  <slot />
</main>

<ContactForm modalCopy={data.contactModal} />

<SvgGraphics />

<style>
.loading-screen {
  position: fixed;
  background-color: #000000;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
}
</style>
