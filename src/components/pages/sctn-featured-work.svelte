<script>
	import { onMount } from 'svelte';
	import FeaturedWork from './featured-work.svelte';
	export let section;
	let activeDrawer = null;
</script>

<section class="featured-work-list">
	<div class="visually-hidden">
		<h2>Our Work</h2>
	</div>
	<ul class="featured-work-list__work">
		{#each section.projects as project, i}
			<li>
				<FeaturedWork project="{project}" i="{i}" bind:activeDrawer />
			</li>
		{/each}
	</ul>
	<div class="featured-work-list__cta-container">
		<a
			href="/our-work"
			data-sveltekit-noscroll
			rel="internal"
			class="button  button--primary  button--medium"
		>
			View All Our Work
		</a>
	</div>
</section>

<style>
	.featured-work-list {
		padding-left: var(--level3);
		padding-right: var(--level3);
		width: 100%;
		padding-top: var(--level6);
	}

	@media screen and (min-width: 975px) {
		.featured-work-list {
			padding-left: 0;
			padding-right: 0;
			padding-top: 0;
		}
	}

	.featured-work-list li:last-child {
		border-bottom: 1px solid black;
	}

	.featured-work-list__work {
		margin-bottom: var(--level6);
	}

	.featured-work-list__cta-container,
	.featured-work-list__cta-container a {
		width: 100%;
		display: block;
	}

	.featured-work-list__cta-container {
		max-width: 21rem;
		margin-right: auto;
		margin-left: auto;
	}
</style>
