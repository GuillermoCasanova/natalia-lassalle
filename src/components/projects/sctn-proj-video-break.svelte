<script>
import { onMount } from "svelte";
import IntersectionObserver from "svelte-intersection-observer";
export let section;
let element;

function loadVideo(e) {
  let video = e.detail.target;

  if (e.detail.isIntersecting) {
    for (var source in video.children) {
      let videoSource = video.children[source];
      if (
        typeof videoSource.tagName === "string" &&
        videoSource.tagName === "SOURCE"
      ) {
        videoSource.src = videoSource.dataset.src;
      }
    }

    video.load();
    video.classList.remove("lazy");
  }
}
</script>

<IntersectionObserver once {element} on:observe={loadVideo}>
  <section class="sctn-proj-video-break">
    <figure class="sctn-proj-video-break__inner">
      <div class="sctn-proj-video-break__video responsive-video">
        <video
          width="320"
          height="240"
          muted
          preload="none"
          autoplay={section.autoplay || false}
          controls={!section.autoplay || false}
          playsinline={section.autoplay || false}
          loop={section.autoplay || false}
          poster={section.video_poster.url}
          bind:this={element}
        >
          <source data-src={section.video_file.url} type="video/mp4" />
        </video>
      </div>
      <figcaption>
        {section.figure}
      </figcaption>
    </figure>
  </section>
</IntersectionObserver>

<style>
.sctn-proj-video-break {
  width: 100%;
}

.sctn-proj-video-break__inner {
  width: 100%;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.sctn-proj-video-break__video {
  margin-bottom: var(--level2);
}

.sctn-proj-video-break figcaption {
  text-align: center;
  display: block;
  font-family: var(--secondary-font-family);
  font-size: var(--h5);
  font-style: italic;
}
</style>
