<script>
// @ts-nocheck

import Nav from '../components/nav.svelte';
import Footer from '../components/footer.svelte';
import SvgGraphics from '../components/svg-graphics.svelte';
import ContactForm from '../components/contact-form.svelte';
import { afterNavigate, beforeNavigate } from '$app/navigation';
import { fade } from 'svelte/transition';
import { cubicOut } from 'svelte/easing';
import { onMount } from 'svelte';
import { page } from '$app/stores';

export let data;

let ready = true;

$: loading = false;
$: pathName = $page.url.pathname;

function scrollToSection(pHash, pBehavior) {
  let element = document.querySelector(pHash);
  let headerOffset = document.querySelector('header').offsetHeight - 5;
  let elemPosition = element.getBoundingClientRect().top;
  let offsetPosition = elemPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: pBehavior,
  });
}

afterNavigate((navigation) => {
  loading = false;

  console.log('after nav');

  if (!navigation.to.url.hash) {
    window.scrollTo({ top: 0 });
  }

  if ($page.url.hash) {
    scrollToSection($page.url.hash, 'auto');
  }
});

beforeNavigate(() => {
  loading = true;
  console.log('before nav');
});

onMount(() => {
  document.querySelectorAll('a[href^="/#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      if (pathName === '/') {
        e.preventDefault();
        scrollToSection(this.getAttribute('href').replace('/', ''), 'smooth');
      }
    });
  });
});
</script>

{#if loading}
  <!-- <div
    class="loading-screen"
    in:fade={{ duration: 500, easing: cubicOut }}
    out:fade={{ duration: 600, easing: cubicOut }}
  /> -->
{/if}

<Nav {...data.navigation} />

<main data-sveltekit-prefetch>
  <slot />
</main>

<!-- <Footer {...data.footer} bind:showFooter="{ready}" /> -->

<!-- <ContactForm /> -->

<SvgGraphics />

<style>
@import '../styles/base.css';
@import '../styles/grid.css';

.loading-screen {
  position: fixed;
  background-color: #fff;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
}
</style>
