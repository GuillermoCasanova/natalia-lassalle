<script>
	import PortableText from '@portabletext/svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { urlFor } from '$lib/sanity';
	import { removeTrapFocus } from '$lib/trapFocus';
	import { element } from 'svelte/internal';
	import { onMount } from 'svelte';
	export let project;
	export let i;
	export let activeDrawer;
	export let drawerId = 'project_' + i + '_content';
	export let video;

	let case_study_video;
	let drawer;
	let drawerIsOpen = true;
	let contentHeight = '0px';

	const toggleDrawer = (event) => {
		activeDrawer = null;
		drawerIsOpen = !drawerIsOpen;

		if (drawerIsOpen) {
			activeDrawer = event.currentTarget.dataset.contentId;
			console.log(activeDrawer);
			animateDrawer(activeDrawer);
			case_study_video.currentTime = 0;
			case_study_video.play();
		} else {
			case_study_video.pause();
			event.target.blur();
		}
	};

	const closeDrawer = (event) => {
		drawerIsOpen = false;
	};

	$: if (activeDrawer !== drawerId) {
		contentHeight = 0;
		closeDrawer();
	}

	const animateDrawer = () => {
		let height = drawer
			.querySelector('[data-content]')
			.querySelector('[data-content-inner]').offsetHeight;

		contentHeight = height + 'px';
	};

	function loadVideo(e) {
		let video = e.detail.target;

		if (e.detail.isIntersecting) {
			console.log('intersect!');

			for (var source in video.children) {
				let videoSource = video.children[source];
				if (typeof videoSource.tagName === 'string' && videoSource.tagName === 'SOURCE') {
					videoSource.src = videoSource.dataset.src;
				}
			}

			video.load();
			video.classList.remove('lazy');
		}
	}

	onMount(() => {});
</script>

<div class="featured-work" data-featured-work-drawer bind:this="{drawer}">
	<div class="featured-work__inner">
		<div class="featured-work__summary">
			<button
				class="featured-work__summary__toggle"
				data-content-id="project_{i}_content"
				aria-controls="project_{i}"
				aria-expanded="{drawerIsOpen}"
				data-toggle
				aria-label="Toggle {project.name} case study overview"
				on:click="{toggleDrawer}"
			>
				<span class="icon"> </span>
				<span class="visually-hidden"> Toggle Project </span>
			</button>
			<div class="featured-work__summary__header" id="drawerId">
				<div>
					<a
						data-sveltekit-noscroll
						href="/our-work/{project.handle.current}"
						rel="internal"
						title="View {project.name} full case study"
						class="featured-work__summary__name"
					>
						<h3>
							{project.name} 
						</h3>
					</a>
				</div>

				<p class="featured-work__summary__work-done">
					{#each project.work_done as work, t}<span
							>{work}{#if t < project.work_done.length - 1},{/if}
						</span>
					{/each}
				</p>
			</div>
		</div>

		<div
			class="featured-work__content"
			id="project_{i}_content"
			aria-hidden="{!drawerIsOpen}"
			role="region"
			aria-describedby="{drawerId}"
			style:height="{contentHeight}"
			data-content
		>
			<div class="featured-work__content__inner" data-content-inner>
				{#if project.brand_video === null}
					<div class="featured-work__content__image-container">
						<div class="featured-work__content__image">
							{#if project.seo.banner_image.hotspot}
								<img
									srcset="
									{urlFor(project.seo.banner_image.asset)
										.width(400)
										.height(200)
										.focalPoint(
											project.seo.banner_image.hotspot.x,
											project.seo.banner_image.hotspot.y
										)
										.crop('focalpoint')
										.fit('crop')
										.auto('format')} 300w,
										{urlFor(project.seo.banner_image.asset)
										.width(900)
										.focalPoint(
											project.seo.banner_image.hotspot.x,
											project.seo.banner_image.hotspot.y
										)
										.crop('focalpoint')
										.fit('crop')
										.auto('format')} 800w,
											{urlFor(project.seo.banner_image.asset)
										.width(1000)
										.height(500)
										.focalPoint(
											project.seo.banner_image.hotspot.x,
											project.seo.banner_image.hotspot.y
										)
										.crop('focalpoint')
										.fit('crop')
										.auto('format')} 900w
											"
									sizes="(min-width: 975px) 32w,(min-width: 975px) 15vw, 90vw"
									src="{urlFor(project.seo.banner_image.asset)
										.width(20)
										.height(20)
										.blur(100)
										.auto('format')}"
									alt="{project.name}"
									role="presentation"
									decoding="async"
									loading="lazy"
								/>
							{:else}
								<img
									src="{urlFor(project.seo.banner_image.asset)
										.width(100)
										.height(100)
										.blur(20)
										.auto('format')}"
									srcset="
									{urlFor(project.seo.banner_image.asset).width(400).auto('format')} 400w,
										{urlFor(project.seo.banner_image.asset).width(900).auto('format')} 900w,
											{urlFor(project.seo.banner_image.asset).width(1000).auto('format')} 1000w"
									sizes="(min-width: 975px) 15vw, 90vw"
									alt="{project.name}"
									role="presentation"
									decoding="async"
									loading="lazy"
								/>
							{/if}
						</div>
					</div>
				{:else}
					<IntersectionObserver once element="{video}" on:observe="{loadVideo}">
						<div
							class="featured-work__content__video-container"
							role="presentation"
							aria-hidden="true"
						>
							<div class="featured-work__content__video  responsive-video">
								<video
									width="320"
									height="240"
									muted
									preload="none"
									autoplay="{true}"
									controls="{false}"
									playsinline="{true}"
									loop="{true}"
									bind:this="{video}"
								>
									<source data-src="{project.brand_video.url}" type="video/mp4" />
								</video>
							</div>
						</div>
					</IntersectionObserver>
				{/if}

				<div class="featured-work__content__copy">
					<ul class="featured-work__content__brand-stats" aria-label="Brand Stats">
						{#each project.overview.brand_stats as stat}
							<li class="featured-work__content__brand-stats__stat">
								{stat}
							</li>
						{/each}
					</ul>
					<div class="featured-work__content__overview">
						<PortableText blocks="{project.overview.overview}" />
					</div>
					<div class="featured-work__content__cta-link-container">
						<a
							href="/our-work/{project.handle.current}"
							rel="internal"
							title="View {project.name} full case study"
							tabindex="-1"
							data-sveltekit-noscroll
							class="featured-work__content__cta-link"
						>
							View Full Case Study
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.featured-work {
		width: 100%;
		border-top: 1px solid black;
		padding-top: var(--level3);
		position: relative;
		overflow: hidden;
	}

	@media only screen and (min-width: 600px) {
		.featured-work {
			padding-top: var(--level3);
			padding-bottom: var(--level3);
			padding-left: var(--level4);
			padding-right: var(--level5);
		}
	}

	@media only screen and (min-width: 975px) {
		.featured-work {
			padding-top: var(--level4);
			padding-bottom: var(--level4);
		}
	}

	.featured-work__inner {
		max-width: 82rem;
		margin-right: auto;
		margin-left: auto;
		padding-left: var(--level3);
		padding-right: var(--level3);
	}

	.featured-work__summary {
		display: flex;
	}

	.featured-work__summary__toggle {
		position: absolute;
		right: 0;
		top: 0;
		background-color: transparent;
		border: none;
		outline: none;
		font-size: var(--h3);
		width: 100%;
		height: 100%;
		background-color: transparent;
		margin-top: 0;
		z-index: 0;
		transition: all var(--duration-long) cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	.featured-work__summary__toggle:hover,
	.featured-work__summary__toggle:focus {
		background: var(--tertiary-color);
	}

	.featured-work__summary__toggle:hover .icon,
	.featured-work__summary__toggle:focus .icon {
		transform: rotate(90deg);
	}

	.featured-work__summary__toggle:before {
		width: 100%;
		content: ' ';
		height: 100%;
		background-color: red;
	}

	.featured-work__summary__toggle:hover {
		cursor: pointer;
	}

	.featured-work__summary__toggle .icon {
		width: 1.5rem;
		height: 1.5rem;
		position: absolute;
		display: flex;
		right: var(--level2);
		margin-right: 0;
		margin-left: auto;
		top: var(--level4);
		margin-top: 0;
		transition: all var(--duration-default) cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	@media screen and (min-width: 600px) {
		.featured-work__summary__toggle .icon {
			height: 1.5rem;
			width: 1.5rem;
			margin: auto;
			right: var(--level8);
			top: 2.5rem;
		}
	}

	.featured-work__summary__toggle .icon:after,
	.featured-work__summary__toggle .icon:before {
		content: ' ';
		height: 1px;
		background-color: black;
		position: absolute;
		right: 0;
		height: 0.1rem;
		width: 100%;
		z-index: -1;
		transition: all 0.2s ease;
		top: 0;
		bottom: 0;
		margin: auto;
	}

	.featured-work__summary__toggle .icon:before {
		transform: rotate(90deg);
	}

	.featured-work__summary__toggle[aria-expanded='true'] .icon,
	.featured-work__summary__toggle[aria-expanded='true'] .icon:before {
		transform: rotate(0);
	}

	@media only screen and (min-width: 600px) {
		.featured-work__summary__header {
			display: grid;
			width: 100%;
			grid-template-columns: 1fr 1.75fr;
			align-items: center;
		}
	}

	@media only screen and (min-width: 975px) {
		.featured-work__summary__header {
			grid-template-columns: 1.25fr 1.75fr;
		}
	}

	.featured-work__summary__name {
		font-family: var(--secondary-font-family);
		font-weight: normal;
		font-style: italic;
		font-size: var(--h3);
		line-height: var(--line-height);
		z-index: 1;
		position: relative;
		display: inline-block;
		transition: all var(--duration-default) cubic-bezier(0.075, 0.82, 0.165, 1);
		pointer-events: none;
	}

	@media (hover: hover) {
		.featured-work__summary__name {
			pointer-events: all;
		}
	}

	.featured-work__summary__name:hover,
	.featured-work__summary__name:focus {
		transform: translateX(10px);
	}

	.featured-work__summary__name h3 {
		font-weight: normal;
		margin-bottom: 0;
	}

	@media only screen and (min-width: 600px) {
		.featured-work__summary__name {
			font-size: var(--h2);
			flex-shrink: 0;
		}
	}

	@media only screen and (min-width: 900px) {
		.featured-work__summary__name {
			font-size: var(--h1);
			flex-shrink: 0;
		}
	}

	.featured-work__summary__work-done {
		color: var(--quaternary-color);
		font-family: var(--secondary-font-family);
		font-weight: normal;
		font-style: italic;
		line-height: var(--line-height);
		margin-bottom: var(--level3);
		position: relative;
		z-index: 1;
		pointer-events: none;
	}

	@media only screen and (min-width: 600px) {
		.featured-work__summary__work-done {
			font-size: var(--h4);
			padding-right: 2.5rem;
			margin-bottom: 0;
			max-width: 89%;
		}
	}

	.featured-work__content {
		transition: all 0.4s ease-in-out;
		opacity: 1;
		position: relative;
		z-index: 1;
	}

	@media screen and (min-width: 600px) {
		.featured-work__content {
		}
	}

	.featured-work__content__inner {
		padding-top: var(--level4);
	}

	@media screen and (min-width: 975px) {
		.featured-work__content__inner {
			padding-top: var(--level5);
			display: grid;
			align-items: flex-start;
			grid-template-columns: 1fr 1.75fr;
		}
	}

	.featured-work__content[aria-hidden='true'] {
		height: 0;
		overflow: hidden;
		position: relative;
	}

	.featured-work__content__image-container,
	.featured-work__content__video-container {
		width: 80%;
		margin-bottom: var(--level6);
	}

	.featured-work__content__image {
		position: relative;
		width: 100%;
		padding-bottom: 56.2%;
		overflow: hidden;
	}

	.featured-work__content__image img {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.featured-work__content__brand-stats__stat {
		text-transform: capitalize;
		font-weight: bold;
		margin-bottom: var(--level3);
		line-height: 1.15;
		font-size: var(--h6);
		margin-right: var(--level2);
	}

	@media only screen and (min-width: 600px) {
		.featured-work__content__brand-stats__stat {
			font-size: var(--h5);
		}
	}

	.featured-work__content__copy {
		display: grid;
		grid-template-columns: 1fr 1.25fr;
		width: 95%;
		padding-bottom: var(--level4);
	}

	@media screen and (min-width: 975px) {
		.featured-work__content__copy {
			grid-template-columns: 1fr 1.75fr;
			padding-left: var(--level9);
			width: 98%;
			align-items: flex-start;
			column-gap: var(--level5);
			padding-top: var(--level2);
		}
	}

	.featured-work__content__overview {
		font-size: var(--h6);
		font-family: var(--secondary-font-family);
		line-height: 1.5;
		top: -0.5rem;
		position: relative;
	}

	@media only screen and (min-width: 600px) {
		.featured-work__content__overview {
			font-size: var(--h5);
		}
	}

	@media only screen and (min-width: 975px) {
		.featured-work__content__overview {
			padding-right: var(--level4);
		}
	}

	.featured-work__content__cta-link {
		font-family: var(--secondary-font-family);
		font-style: italic;
		position: relative;
		display: inline-block;
		margin-bottom: var(--level4);
	}

	@media screen and (minw-width: 600px) {
		.featured-work__content__cta-link {
			margin-bottom: 0;
			font-size: var(--h5);
		}
	}

	.featured-work__content__cta-link-container {
		grid-column-start: 2;
	}

	@media screen and (min-width: 600px) {
		.featured-work__content__cta-link-container {
			justify-self: start;
			column-count: 2;
		}
	}

	.featured-work__content__cta-link:hover:before,
	.featured-work__content__cta-link:focus:before {
		animation: hover-link var(--duration-long) forwards;
	}

	.featured-work__content__cta-link:before {
		content: ' ';
		position: absolute;
		bottom: -2px;
		right: 0;
		width: 100%;
		background-color: var(--accent-color);
		height: 2px;
		pointer-events: none;
	}
</style>
