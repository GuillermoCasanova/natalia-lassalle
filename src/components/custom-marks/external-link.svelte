<script>
	import MarkComponentProps from '@portabletext/svelte';

	export let portableText = new MarkComponentProps({ page: {} });

	$: value = portableText.mark;
	$: newWindow = value.blank;
	$: href = value.href;
</script>

<a href="{href}" rel="external" target="{newWindow ? '_blank' : null}">
	<slot /> EXTERNAL
</a>
