<script>
	import MarkComponentProps from '@portabletext/svelte';

	export let portableText = new MarkComponentProps(this);

	$: value = portableText.mark;
	$: email = value.mailto;
</script>

<a href="mailto:{email}" title="Open email service to email {email}">
	<slot />
</a>
