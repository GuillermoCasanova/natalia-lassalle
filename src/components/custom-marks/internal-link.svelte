<script lang="ts">
import type { MarkComponentProps } from "@portabletext/svelte";

export let portableText: MarkComponentProps<{
  _type?: string;
  name?: string;
  page: {
    title: string | null;
    slug: string | null;
  };
}>;

$: ({ value } = portableText);
$: type = value._type;
$: page_title = value.page.title || value.name;
$: handle = value.page.slug;
</script>

{#if type == "project"}
  <a
    href="/our-work/{handle}"
    rel="internal"
    title="View  {page_title} Case Study"
  >
    <slot />
  </a>
{:else}
  <a href="/{handle}" rel="internal" title="Go to {page_title} page">
    <slot />
  </a>
{/if}
