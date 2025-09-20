<script>
import { currentLanguage } from "$lib/stores/language";

export let activeThumb;
export let activeThumbInfo;

// $: thumbSrc = activeThumb ? urlFor(activeThumb) : false;
</script>

{#if activeThumb}
  <div class="thumbnails-container">
    <div class="thumbnails-container__inner">
      <div class="thumbnail">
        <div class="thumbnail__inner">
          <img
            src={activeThumb}
            role="presentation"
            aria-hidden="true"
            alt="placeholder"
            loading="eager"
            class="responsive-image"
          />
        </div>
        <div class="thumbnail__details">
          <p class="thumbnail__details__name">
            {activeThumbInfo.name}
          </p>
          <p class="thumbnail__details__medium">
            - {activeThumbInfo.medium?.title || ""}
          </p>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
.thumbnails-container {
  position: fixed;
  right: 2.5vw;
  height: 100vh;
  z-index: 100;
  width: 40vw;
  left: auto;
}

.thumbnails-container__inner {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  padding-bottom: 20vh;
}

.thumbnail {
  position: relative;
  width: 100%;
  max-width: 50rem;
}

.thumbnail__inner {
  position: relative;
  padding-bottom: 54%;
}

.thumbnail__details {
  position: absolute;
  bottom: -3rem;
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  color: gray;
  font-size: var(--micro);
  text-transform: uppercase;
}

.thumbnail__details__name {
  margin-right: var(--level0);
}

img {
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  height: 100%;
  width: 100%;
}
</style>
