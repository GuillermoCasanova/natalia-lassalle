<script lang="ts">
import type { MarkComponentProps } from "@portabletext/svelte";

export let portableText: MarkComponentProps<{
  _type?: string;
  name?: string;
  page?: {
    title: string | null;
    slug: string | null;
    _type: string; // This will tell us if it's a page or project
  };
}>;

$: ({ value } = portableText);
$: type = value.page?._type;
$: page_title = value.page?.title || value.name;
$: handle = value.page?.slug;

// Debug logging
$: console.log("Internal Link Value:", { value, type, page_title, handle });
</script>

{#if !handle}
  <span title="Missing link destination">
    <slot />
  </span>
{:else if type === "project"}
  <a
    href="/work/{handle}"
    rel="internal"
    title="View {page_title || 'Untitled'} Case Study"
  >
    <slot />
  </a>
{:else}
  <a
    href="/{handle}"
    rel="internal"
    title="Go to {page_title || 'Untitled'} page"
  >
    <slot />
  </a>
{/if}
