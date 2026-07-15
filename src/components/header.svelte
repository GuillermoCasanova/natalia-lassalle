<script>
import { trapFocus, removeTrapFocus } from "$lib/trapFocus";
import { page } from "$app/stores";
import ModalTrigger from "./modal-trigger.svelte";
import LanguageSwitcher from "./language-switcher.svelte";
import { localizedPath } from "$lib/stores/language";
import { onMount } from "svelte";

export let main_nav;
export let lang = "en";

function getPageSlug(internalLink) {
  const handle = internalLink?.handle;
  if (!handle) return null;
  const slug = typeof handle === "string" ? handle : handle.current;
  return slug || null;
}

$: navLinks = main_nav?.items ?? [];
let container;
let currentPage;
let isHomePage = true;

$: {
  currentPage = $page.url.pathname;
  isHomePage = currentPage === `/${lang}` || currentPage === `/${lang}/`;
}

//
// Menu Drawer JS
//
let navIsOpen = false;
let toggleText = "Open Menu";
let drawerMenuContainer;
let menuDrawerToggle;
let showNavItems = false;

$: navIsOpen;
$: toggleText;
$: showNavItems;

$: pathName = $page.url.pathname;

let toggleMenuDrawer = function (event) {
  navIsOpen = !navIsOpen;

  if (navIsOpen) {
    openMenuDrawer(event, drawerMenuContainer);
  } else {
    event.preventDefault();
    closeMenuDrawer(event, menuDrawerToggle);
  }
};

let openMenuDrawer = function (event, elementToFocus = false) {
  // drawerMenuContainer.querySelector('aside').style.height = `calc(101vh - ${
  //   document.querySelector('header').clientHeight + 'px'
  // })`;
  // drawerMenuContainer.querySelector('aside').style.top =
  //   document.querySelector('header').clientHeight + 1 + 'px';

  setTimeout(() => {
    showNavItems = true;
  }, 100);

  trapFocus(elementToFocus);
};

let closeMenuDrawer = function (event, elementToFocus = false) {
  navIsOpen = navIsOpen ? !navIsOpen : !!navIsOpen;
  setTimeout(() => {
    showNavItems = !showNavItems;
  }, 0);
  removeTrapFocus(elementToFocus);
  menuDrawerCloseAnim(drawerMenuContainer);
};

let onKeyUp = (event) => {
  if (event.code.toUpperCase() !== "ESCAPE") return;

  const openDetailsElement = event.target.closest("details[open]");
  if (!openDetailsElement) return;

  openDetailsElement === drawerMenuContainer
    ? closeMenuDrawer(event, menuDrawerToggle)
    : false;
};

let menuDrawerCloseAnim = function (pDetailsElement) {
  let animationStart;

  const handleAnimation = (time) => {
    if (animationStart === undefined) {
      animationStart = time;
    }

    const elapsedTime = time - animationStart;

    if (elapsedTime < 400) {
      window.requestAnimationFrame(handleAnimation);
    } else {
      pDetailsElement.removeAttribute("open");
      if (pDetailsElement.closest("details[open]")) {
        trapFocus(
          pDetailsElement.closest("details[open]"),
          pDetailsElement.querySelector("summary")
        );
      }
    }
  };

  window.requestAnimationFrame(handleAnimation);
};
</script>

<header
  bind:this={container}
  class:menu-opening={navIsOpen}
  class:is-transparent={isHomePage}
>
  <div class="header__inner">
    <div class="header__logo">
      {#if isHomePage}
        <a
          href={localizedPath("/", lang)}
          title="Natalia Lassalle Morillo home"
          rel="internal"
          on:click={closeMenuDrawer}
          data-sveltekit-noscroll
        >
          <h1 class="header__logo__inner">
            <span class="visually-hidden"> Natalia Lassalle Morillo </span>
            <svg role="presentation" aria-hidden="true"
              ><use xlink:href="#logo" /></svg
            >
          </h1>
        </a>
      {:else}
        <a
          class="header__logo__inner"
          href={localizedPath("/", lang)}
          title="Natalia Lassalle Morillo home"
          rel="internal"
          on:click={closeMenuDrawer}
          data-sveltekit-noscroll
        >
          <span class="visually-hidden"> Natalia Lassalle Morillo </span>
          <svg role="presentation" aria-hidden="true"
            ><use xlink:href="#logo" /></svg
          >
        </a>
      {/if}
    </div>

    <div class="header__menu-drawer">
      <details
        id="menu-drawer-container"
        class="header-menu-drawer-container"
        on:keyup={onKeyUp}
        bind:this={drawerMenuContainer}
      >
        <summary
          class="header__menu-icon"
          aria-label="Main navigation"
          aria-expanded={navIsOpen}
          data-header-drawer-toggle
          role="button"
          bind:this={menuDrawerToggle}
          on:click={toggleMenuDrawer}
        >
          <span class="header__menu-icon-top-bar" />
          <span class="header__menu-icon-middle-bar" />
          <span class="header__menu-icon-bottom-bar" />

          <span class="header__icon__text visually-hidden" data-toggle-text>
            {#if navIsOpen}
              Close Menu
            {:else}
              Open Menu
            {/if}
          </span>
        </summary>
        <aside
          tabindex="-1"
          class="header-menu-drawer"
          class:menu-opening={navIsOpen}
          class:menu-closing={!navIsOpen}
        >
          <nav class="menu-drawer">
            <div class="menu-drawer__inner">
              <ul
                class="menu-drawer__items"
                class:show-nav-items={showNavItems}
              >
                {#each navLinks as navItem, index}
                  <li
                    class="menu-drawer__item"
                    style="transition-delay: {0.1 * index + 's'}"
                  >
                    {#if navItem.navigationItemUrl?.linkType == "external"}
                      <a
                        on:click={closeMenuDrawer}
                        class="menu-drawer__link"
                        href={navItem.navigationItemUrl.href}
                        target={navItem.navigationItemUrl.blank
                          ? "_blank"
                          : null}
                        rel="external"
                        title="Go to external link at {navItem.navigationItemUrl
                          .href}"
                      >
                        {navItem.text || "Untitled"}
                      </a>
                    {/if}

                    {#if navItem.navigationItemUrl?.linkType == "internal" && getPageSlug(navItem.navigationItemUrl.internalLink)}
                      <a
                        data-sveltekit-noscroll
                        on:click={closeMenuDrawer}
                        class="menu-drawer__link"
                        href={localizedPath(
                          `/${getPageSlug(navItem.navigationItemUrl.internalLink)}`,
                          lang
                        )}
                        rel="internal"
                        title="Go to {navItem.text?.toLowerCase() ||
                          'page'} page"
                        class:is-active={pathName ==
                          localizedPath(
                            `/${getPageSlug(navItem.navigationItemUrl.internalLink)}`,
                            lang
                          )}
                      >
                        {navItem.text || "Untitled"}
                      </a>
                    {/if}

                    {#if navItem.navigationItemUrl?.linkType == "anchor"}
                      {#if navItem.text && "contact us".indexOf(navItem.text.toLowerCase()) >= 0}
                        <ModalTrigger
                          buttonText={navItem.text || "Contact"}
                          modalId="contact-modal"
                          label="contact modal"
                          classes="menu-drawer__link"
                        />
                      {:else}
                        <a
                          on:click={closeMenuDrawer}
                          class="menu-drawer__link"
                          href={navItem.navigationItemUrl.anchorLink}
                          rel="internal"
                          title="Go to {navItem.text?.toLowerCase() ||
                            'section'} section"
                        >
                          {navItem.text || "Untitled"}
                        </a>
                      {/if}
                    {/if}
                  </li>
                {/each}
                <li class="menu-drawer__item" style="transition-delay: 0s">
                  <LanguageSwitcher />
                </li>
              </ul>
            </div>
          </nav>
        </aside>
      </details>
    </div>

    <div class="header__menu-list">
      <nav class="menu-list">
        <div class="menu-list__inner">
          <ul class="menu-list__items" class:show-nav-items={showNavItems}>
            {#each navLinks as navItem, index}
              <li
                class="menu-list__item"
                style="transition-delay: {0.1 * index + 's'}"
              >
                {#if navItem.navigationItemUrl?.linkType == "external"}
                  <a
                    on:click={closeMenuDrawer}
                    class="menu-list__link"
                    href={navItem.navigationItemUrl.href}
                    target={navItem.navigationItemUrl.blank ? "_blank" : null}
                    rel="external"
                    title="Go to external link at {navItem.navigationItemUrl
                      .href}"
                  >
                    {navItem.text || "Untitled"}
                  </a>
                {/if}

                {#if navItem.navigationItemUrl?.linkType == "internal" && getPageSlug(navItem.navigationItemUrl.internalLink)}
                  <a
                    data-sveltekit-noscroll
                    on:click={closeMenuDrawer}
                    class="menu-list__link"
                    href={localizedPath(
                      `/${getPageSlug(navItem.navigationItemUrl.internalLink)}`,
                      lang
                    )}
                    rel="internal"
                    title="Go to {navItem.text?.toLowerCase() || 'page'} page"
                    aria-current={pathName ==
                    localizedPath(
                      `/${getPageSlug(navItem.navigationItemUrl.internalLink)}`,
                      lang
                    )
                      ? "page"
                      : false || null}
                    class:is-active={pathName ==
                      localizedPath(
                        `/${getPageSlug(navItem.navigationItemUrl.internalLink)}`,
                        lang
                      )}
                  >
                    {navItem.text || "Untitled"}
                  </a>
                {/if}

                {#if navItem.navigationItemUrl?.linkType == "anchor"}
                  {#if navItem.text && "contact us".indexOf(navItem.text.toLowerCase()) >= 0}
                    <ModalTrigger
                      bind:buttonText={navItem.text}
                      modalId="contact-modal"
                      label="contact modal"
                      classes="menu-list__link"
                    />
                  {:else}
                    <a
                      on:click={closeMenuDrawer}
                      class="menu-list__link"
                      href={navItem.navigationItemUrl.anchorLink}
                      rel="internal"
                      title="Go to {navItem.text?.toLowerCase() ||
                        'section'} section"
                    >
                      {navItem.text || "Untitled"}
                    </a>
                  {/if}
                {/if}
              </li>
            {/each}
            <li class="menu-list__item">
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</header>

<style>
/*------------------------------------*\
    	#Header
	\*------------------------------------*/

header {
  z-index: 1;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  z-index: 5;
  position: relative;
  background-color: white;
  transition: all var(--duration-default) cubic-bezier(0.5, 1, 0.89, 1);
}

header.is-transparent {
  background-color: transparent;
  position: absolute;
}

@media screen and (min-width: 940px) {
  header,
  header.is-transparent {
    position: relative;
    background-color: var(--secondary-color);
  }
}

header.menu-opening {
  background: transparent;
}

@media screen and (min-width: 900px) {
  header.menu-opening {
    background: transparent;
  }

  header {
    border-bottom: 1px solid black;
  }
}

.header__inner {
  display: grid;
  grid-template-areas: "logo navigation";
  grid-template-columns: 2fr 1fr;
  margin-bottom: 0;
  padding-left: var(--level2);
  padding-right: var(--level2);
  padding-top: var(--level2);
  padding-bottom: var(--level2);
}

@media screen and (min-width: 900px) {
  .header__inner {
    margin-right: auto;
    margin-left: auto;
    padding-left: var(--level4);
    padding-right: var(--level4);
    grid-template-columns: 1fr 2fr;
    padding-top: var(--level1);
    padding-bottom: var(--level1);
  }
}

.header__logo {
  position: relative;
  max-width: 15rem;
  grid-area: logo;
  justify-self: start;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
}

@media screen and (min-width: 900px) {
  .header__logo {
    max-width: 14rem;
  }
}

:global(header.menu-opening .header__logo svg) {
  fill: #fff;
}

.header__logo a {
  display: block;
  width: 100%;
  transition: all var(--duration-default) cubic-bezier(0.5, 1, 0.89, 1);
}

.header__logo a:hover,
.header__logo a:focus {
}

.header__logo__inner {
  position: relative;
  overflow: hidden;
  padding-bottom: 20%;
  width: 100%;
  margin-bottom: 0;
}

.header__logo__inner svg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  height: 100%;
  width: 100%;
}

:global(header.is-transparent .header__logo__inner svg) {
  fill: white;
}

@media screen and (min-width: 900px) {
  :global(header.is-transparent .header__logo__inner svg) {
    fill: black;
  }
}

.header__menu-drawer {
  grid-area: navigation;
  justify-self: end;
}

@media only screen and (min-width: 900px) {
  .header__menu-drawer {
    display: none;
  }
}

/*------------------------------------*\
    	#Menu Drawer  
\*------------------------------------*/

@keyframes headerDrawerOpen {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes headerDrawerClose {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.header-menu-drawer.menu-opening {
  animation: headerDrawerOpen 0.3s cubic-bezier(0.5, 1, 0.89, 1) forwards;
  pointer-events: all;
}

.header-menu-drawer.menu-closing {
  animation: headerDrawerClose var(--duration-default)
    cubic-bezier(0.11, 0, 0.5, 0) forwards;
  pointer-events: none;
}

.header-menu-drawer.menu-closing * {
  transition-delay: 0 !important;
}

.header-menu-drawer {
  position: absolute;
  width: 100%;
  overflow: hidden;
  left: 0;
  right: 0;
  background: black;
  z-index: 0;
  height: 100vh;
  opacity: 0;
  top: 0;
  will-change: opacity;
}

.menu-drawer__inner {
  padding-left: var(--level5);
  padding-right: var(--level5);
  padding-top: calc(var(--level8) + var(--level8));
}

.menu-drawer__item {
  font-size: var(--h4);
  margin-bottom: var(--level3);
  flex-basis: 0;
  opacity: 0;
  will-change: opacity;
  transition: all 0.4s cubic-bezier(0.5, 1, 0.89, 1);
  text-align: right;
}

.menu-drawer__items.show-nav-items .menu-drawer__item {
  opacity: 1;
}

.menu-drawer__link {
  position: relative;
  display: inline-block;
  text-align: center;
  background-color: transparent;
  border: none;
  color: white;
  text-transform: uppercase;
  font-size: var(--h1);
  font-weight: bold;
  padding: var(--level1);
  line-height: 1;
}

.menu-drawer__link:hover,
.menu-drawer__link:focus {
  color: black;
}

:global(button.menu-drawer__link) {
  padding-top: var(--level1);
  padding-bottom: var(--level1);
}

:global(.menu-drawer__link):hover:before,
:global(.menu-drawer__link):focus:before,
:global(.menu-drawer__link):active:before {
  opacity: 1;
}

:global(.menu-drawer__link):before {
  content: " ";
  width: 100%;
  height: 100%;
  background: white;
  left: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  z-index: -1;
  transition: all 0 cubic-bezier(0.5, 1, 0.89, 1);
}

:global(.menu-drawer__link):hover:before,
:global(.menu-drawer__link):focus:before {
  opacity: 1;
}

/*------------------------------------*\
    	#Menu List 
\*------------------------------------*/

.menu-list__items {
  display: flex;
  align-items: center;
}

.header__menu-list {
  align-items: center;
  justify-content: space-between;
  grid-area: navigation;
  justify-self: end;
  justify-self: end;
  min-width: 38rem;
  display: none;
}

@media screen and (min-width: 900px) {
  .header__menu-list {
    display: flex;
  }
}

.menu-list {
  width: 100%;
  margin-right: 0;
  margin-left: auto;
}

.menu-list__inner,
.menu-list__items {
  width: 100%;
}

.menu-list__items {
  display: flex;
  justify-content: flex-end;
}

.menu-list__item {
  margin-right: var(--level5);
}

.menu-list__items .menu-list__item:last-child {
  margin-right: 0;
}

.menu-list__link {
  padding-left: var(--level1);
  padding-right: var(--level1);
  padding-bottom: 0.15rem;
  font-size: var(--h5);
  position: relative;
  background: transparent;
  border: none;
  text-transform: uppercase;
  line-height: 1;
}

:global(.menu-list__link):before {
  content: " ";
  width: 1.5rem;
  height: 2px;
  background: black;
  left: 0;
  bottom: -1px;
  right: 0;
  margin: auto;
  position: absolute;
  opacity: 0;
  z-index: -1;
  transition: all 0 cubic-bezier(0.5, 1, 0.89, 1);
}

:global(.menu-list__link):hover:before,
:global(.menu-list__link):focus:before {
  opacity: 1;
}

:global(.menu-list__link)[aria-current]:before {
  opacity: 1;
}

/*------------------------------------*\
    	#Menu Drawer  Icon
	\*------------------------------------*/

.header__menu-icon {
  background: transparent;
  position: relative;
  border: none;
  outline: 0;
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 3rem;
  transition: all var(--duration-long) ease;
}

.header__menu-icon:hover {
  cursor: pointer;
}

.header__menu-icon .header__icon__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  opacity: 1;
  transform: scale(1);
  width: 100%;
}

.header__menu-icon-top-bar,
.header__menu-icon-middle-bar,
.header__menu-icon-bottom-bar {
  width: 70%;
  height: 2px;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: black;
  margin: auto;
  transition: all var(--duration-default) ease;
  will-change: transform opacity;
}

:global(header.is-transparent .header__menu-icon .header__menu-icon-top-bar),
:global(header.is-transparent .header__menu-icon .header__menu-icon-middle-bar),
:global(
  header.is-transparent .header__menu-icon .header__menu-icon-bottom-bar
) {
  background-color: white;
}

@media screen and (min-width: 940px) {
  :global(header.is-transparent .header__menu-icon .header__menu-icon-top-bar),
  :global(
    header.is-transparent .header__menu-icon .header__menu-icon-middle-bar
  ),
  :global(
    header.is-transparent .header__menu-icon .header__menu-icon-bottom-bar
  ),
  .header__menu-icon .header__menu-icon-top-bar,
  .header__menu-icon .header__menu-icon-middle-bar,
  .header__menu-icon .header__menu-icon-bottom-bar {
    background-color: black;
  }
}

.header__menu-icon .header__menu-icon-top-bar {
  transform: translateY(-0.6rem);
}

.header__menu-icon .header__menu-icon-bottom-bar {
  transform: translateY(0.6rem);
}

.header__menu-icon[aria-expanded="true"] {
}

.header__menu-icon[aria-expanded="true"] .header__menu-icon-middle-bar {
  opacity: 0;
  background: white;
}

.header__menu-icon[aria-expanded="true"] .header__menu-icon-top-bar {
  transform: rotate(45deg);
  top: 0;
  background: white;
}

.header__menu-icon[aria-expanded="true"] .header__menu-icon-bottom-bar {
  transform: rotate(-45deg);
  top: 0;
  background: white;
}
</style>
