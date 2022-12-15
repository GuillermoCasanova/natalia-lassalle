<script>
	import MarkComponentProps from '@portabletext/svelte';

	export let portableText = new MarkComponentProps({ page: {} });

	$: value = portableText.mark;
	$: page = value.page || {};
	$: type = page._type;
	$: handle = page.handle.current;
	$: page_title = page.page_title || page.name;
</script>

{#if type == 'project'}
	<a href="/our-work/{handle}" rel="internal" title="View {page_title} Case Study">
		<slot />
	</a>
{:else}
	<a href="{handle}" rel="internal" title="Go to {page_title} page">
		<slot />
	</a>
{/if}
