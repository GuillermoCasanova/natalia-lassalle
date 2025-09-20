<script lang="ts">
import {
  currentLanguage,
  languages,
  addLanguageToUrl,
} from "$lib/stores/language";
import { onMount } from "svelte";
import { page } from "$app/stores";
import { goto } from "$app/navigation";

let isOpen = false;

function handleLanguageChange(langCode: string) {
  console.log("=== LANGUAGE SWITCHER DEBUG ===");
  console.log("Switching to language:", langCode);
  console.log("Current store value before change:", $currentLanguage);

  // Update the store
  $currentLanguage = langCode;
  isOpen = false;

  // Navigate to current URL with new language parameter
  const currentUrl = $page.url.pathname + $page.url.search;
  const newUrl = addLanguageToUrl(currentUrl, langCode);

  console.log("Current URL:", currentUrl);
  console.log("New URL with language:", newUrl);
  console.log("Navigating to:", newUrl);

  // Navigate to the new URL using SvelteKit's goto
  goto(newUrl);

  console.log("Store value after change:", $currentLanguage);
  console.log("================================");
}

function toggleDropdown() {
  isOpen = !isOpen;
}
</script>

<div class="language-switcher">
  <button
    class="language-button"
    on:click={toggleDropdown}
    aria-expanded={isOpen}
  >
    {languages.find((lang) => lang.code === $currentLanguage)?.name.slice(0, 2)}
    <svg
      class="chevron"
      class:rotate={isOpen}
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <path fill="currentColor" d="M5 8l5 5 5-5z" />
    </svg>
  </button>

  {#if isOpen}
    <ul class="language-dropdown">
      {#each languages as lang}
        <li>
          <button
            class="language-option"
            class:active={lang.code === $currentLanguage}
            on:click={() => handleLanguageChange(lang.code)}
          >
            {lang.name}
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
.language-switcher {
  position: relative;
  display: inline-block;
}

/* Desktop menu styles */
.menu-list .language-switcher .language-button {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: var(--h5);
  text-transform: uppercase;
  color: inherit;
  transition: all var(--duration-default) cubic-bezier(0.5, 1, 0.89, 1);
  position: relative;
}

.menu-list .language-switcher .language-button:hover {
  color: var(--primary-color, #000);
}

.menu-list .language-switcher .chevron {
  transition: transform var(--duration-default) cubic-bezier(0.5, 1, 0.89, 1);
  width: 12px;
  height: 12px;
}

.menu-list .language-switcher .chevron.rotate {
  transform: rotate(180deg);
}

.menu-list .language-switcher .language-dropdown {
  position: relative;
  top: calc(100% + 8px);
  right: 0;
  background: white;
  border: 1px solid #000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  list-style: none;
  margin: 0;
  padding: 8px 0;
  z-index: 1000;
  min-width: 140px;
}

@media screen and (min-width: 900px) {
  .menu-list .language-switcher .language-dropdown {
    position: absolute;
  }
}

.menu-list .language-switcher .language-option {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: var(--h5);
  text-align: left;
  transition: background-color var(--duration-default)
    cubic-bezier(0.5, 1, 0.89, 1);
  text-transform: uppercase;
}

.menu-list .language-switcher .language-option:hover {
  background-color: #f0f0f0;
}

.menu-list .language-switcher .language-option.active {
  background-color: #e0e0e0;
  font-weight: bold;
}

.menu-list .language-switcher .flag {
  font-size: 16px;
}

/* Mobile menu drawer styles */
.menu-drawer .language-switcher .language-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: var(--level1);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: var(--h1);
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  transition: all var(--duration-default) cubic-bezier(0.5, 1, 0.89, 1);
  position: relative;
  line-height: 1;
}

.menu-drawer .language-switcher .language-button:hover,
.menu-drawer .language-switcher .language-button:focus {
  color: black;
}

.menu-drawer .language-switcher .language-button:before {
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

.menu-drawer .language-switcher .language-button:hover:before,
.menu-drawer .language-switcher .language-button:focus:before {
  opacity: 1;
}

.menu-drawer .language-switcher .chevron {
  transition: transform var(--duration-default) cubic-bezier(0.5, 1, 0.89, 1);
  width: 16px;
  height: 16px;
}

.menu-drawer .language-switcher .chevron.rotate {
  transform: rotate(180deg);
}

.menu-drawer .language-switcher .language-dropdown {
  position: relative;
  top: calc(100% + 8px);
  right: 0;
  background: black;
  border: 1px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  list-style: none;
  margin: 0;
  padding: 8px 0;
  z-index: 1000;
  min-width: 160px;
}

.menu-drawer .language-switcher .language-option {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: var(--h3);
  text-align: left;
  transition: background-color var(--duration-default)
    cubic-bezier(0.5, 1, 0.89, 1);
  text-transform: uppercase;
  color: white;
  font-weight: bold;
}
.menu-drawer .language-switcher .language-button {
  display: inline-block;
}

.menu-drawer .language-switcher .language-option:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.menu-drawer .language-switcher .language-option.active {
  background-color: rgba(255, 255, 255, 0.2);
}

.menu-drawer .language-switcher .flag {
  font-size: 20px;
}
</style>
