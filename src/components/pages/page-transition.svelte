<script>
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';

	export let url = URL;
</script>

{#key url}
	<div in:fade="{{ duration: 200, delay: 220 }}" out:fade="{{ duration: 200 }}">
		<slot />
	</div>
{/key}
