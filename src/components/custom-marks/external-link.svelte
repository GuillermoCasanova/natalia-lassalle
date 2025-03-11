<script lang="ts">
import type { MarkComponentProps } from "@portabletext/svelte";

export let portableText: MarkComponentProps<{
  blank: boolean;
  href: string;
}>;

$: ({ value } = portableText);
$: newWindow = value.blank;
$: href = value.href;
</script>

<a {href} rel="external" target={newWindow ? "_blank" : null}>
  <slot />
  {#if newWindow}
    <span class="external-link-icon">
      <svg>
        <use xlink:href="#icon-external-link" />
      </svg>
    </span>
  {/if}
</a>

<style>
.external-link-icon {
  width: 0.75rem;
  height: 0.75rem;
  display: inline-block;
  margin-right: var(--level1);
}

.external-link-icon svg {
  width: 100%;
  height: 100%;
}
</style>
