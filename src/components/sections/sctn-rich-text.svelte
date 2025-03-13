<script>
import RichText from "../rich-text.svelte";

export let section;
</script>

<section class="rich-text">
  <RichText text={section.text} />
</section>
