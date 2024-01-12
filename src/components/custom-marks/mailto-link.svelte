<script lang="ts">
	import type { MarkComponentProps } from '@portabletext/svelte';
	
	export let portableText: MarkComponentProps<{
	  mailto: string;
	}>;
	
	$: ({ value } = portableText);
	$: email = value.mailto;
	</script>
	
	<a href="mailto:{email}" title="Open email service to email {email}">
	  <slot />
	</a>
	