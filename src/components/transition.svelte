<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicOut, cubicIn } from 'svelte/easing';
	export let refresh = '';
</script>

{#key refresh}
	<div
		in:fade="{{ duration: 500, delay: 150, easing: cubicIn }}"
		out:fade="{{ duration: 150, easing: cubicOut }}"
	>
		<slot />
	</div>
{/key}
