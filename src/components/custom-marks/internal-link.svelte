<script lang="ts">
import type { MarkComponentProps } from "@portabletext/svelte";
import { page } from "$app/stores";
import { localizedPath } from "$lib/stores/language";

export let portableText: MarkComponentProps<{
  _type?: string;
  name?: string;
  page?: {
    title: string | null;
    slug: string | null;
    _type: string;
  };
}>;

$: ({ value } = portableText);
$: type = value.page?._type;
$: page_title = value.page?.title || value.name;
$: handle = value.page?.slug;
$: lang = $page.params.lang || "en";
</script>

{#if !handle}
  <span title="Missing link destination">
    <slot />
  </span>
{:else if type === "project"}
  <a
    href={localizedPath(`/work/${handle}`, lang)}
    rel="internal"
    title="View {page_title || 'Untitled'} Case Study"
  >
    <slot />
  </a>
{:else}
  <a
    href={localizedPath(`/${handle}`, lang)}
    rel="internal"
    title="Go to {page_title || 'Untitled'} page"
  >
    <slot />
  </a>
{/if}
