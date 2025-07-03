<script>
import { PortableText } from "@portabletext/svelte";
import { page } from "$app/stores";
import InternalLinkRenderer from "./custom-marks/internal-link.svelte";
import ExternalLinkRenderer from "./custom-marks/external-link.svelte";
import MailtoLinkRenderer from "./custom-marks/mailto-link.svelte";

export let text;
let language = $page.data.language || "en";

const components = {
  marks: {
    internalLink: InternalLinkRenderer,
    externalLink: ExternalLinkRenderer,
    mailtoLink: MailtoLinkRenderer,
  },
};
</script>

{#if text}
  <PortableText value={text} {components} />
{/if}
