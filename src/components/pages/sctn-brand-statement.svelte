<script>
	import IntersectionObserver from 'svelte-intersection-observer';
	import PortableText from '@portabletext/svelte';
	import ModalTrigger from '../modal-trigger.svelte';
	import { onMount } from 'svelte';
	import { urlFor } from '$lib/sanity';

	export let section;
	export let element;

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

	onMount(() => {
		console.log(section);
	});
</script>

<section class="section-brand-statement" id="about">
	<div class="section-brand-statement__inner  main-container">
		<div class="section-brand-statement__video-container">
			<IntersectionObserver once element="{element}" on:observe="{loadVideo}">
				<div class="section-brand-statement__video">
					<div class="responsive-video">
						<video
							width="320"
							height="240"
							muted
							preload="none"
							autoplay="{section.autoplay || false}"
							controls="{!section.autoplay || false}"
							playsinline="{section.autoplay || false}"
							loop="{section.autoplay || false}"
							poster="{urlFor(section.video_poster.asset).width(750).auto('format')}"
							bind:this="{element}"
						>
							<source data-src="{section.video_file.url}" type="video/mp4" />
						</video>
					</div>
				</div>
			</IntersectionObserver>
		</div>
		<div class="section-brand-statement__copy">
			<div class="section-brand-statement__copy__headline">
				<PortableText blocks="{section.headline}" class="portable-text" />
			</div>

			<div class="section-brand-statement__copy__cta">
				<ModalTrigger
					bind:buttonText="{section.button_cta}"
					modalId="contact-modal"
					label="contact modal"
					classes="button--primary  button--medium"
				/>
			</div>
		</div>
	</div>
</section>

<style>
	.section-brand-statement {
		padding-top: var(--level7);
		background-color: var(--secondary-color);
		border-top: 1px solid black;
	}

	@media only screen and (min-width: 600px) {
		.section-brand-statement {
			padding-top: var(--level9);
			padding-bottom: var(--level9);
		}
	}

	@media only screen and (min-width: 975px) {
		.section-brand-statement {
			padding-top: calc(var(--level10) + var(--level3));
			padding-bottom: calc(var(--level10) + var(--level3));
		}
	}

	@media only screen and (min-width: 600px) {
		.section-brand-statement__inner {
			width: 100%;
			display: grid;
			grid-template-columns: 1fr 1fr;
			max-width: 65rem;
			margin-right: auto;
			margin-left: auto;
		}
	}

	@media only screen and (min-width: 600px) {
		.section-brand-statement__inner {
			max-width: 76rem;
		}
	}

	.section-brand-statement__video-container {
		border-radius: 200px;
		overflow: hidden;
		margin-bottom: var(--level6);
		max-width: 36rem;
		margin-right: 0;
		right: 0;
		left: auto;
		position: relative;
		margin-left: auto;
		width: 100%;
	}

	@media only screen and (min-width: 600px) {
		.section-brand-statement__video-container {
			width: 104%;
			right: -18rem;
			grid-column-start: 1;
			grid-column-end: 4;
			grid-row-start: 1;
			grid-row-end: 1;
			margin-bottom: 0;
			max-width: 58rem;
			border-radius: 400px;
		}
	}

	@media only screen and (min-width: 975px) {
		.section-brand-statement__video-container {
			width: 70%;
			right: -1rem;
		}
	}

	.section-brand-statement__video {
		width: 100%;
		position: relative;
		padding-bottom: 73%;
	}

	@media only screen and (min-width: 975px) {
		.section-brand-statement__video {
			padding-bottom: 70%;
		}
	}

	.section-brand-statement__video .responsive-video {
		position: absolute;
		height: 100%;
		width: 100%;
	}

	.section-brand-statement__video video {
		width: 100%;
		border-radius: 400px;
		overflow: hidden;
	}

	.section-brand-statement__copy {
		max-width: 34rem;
	}

	@media only screen and (min-width: 600px) {
		.section-brand-statement__copy {
			grid-column-start: 1;
			grid-column-end: 3;
			grid-row-start: 1;
			grid-row-end: 1;
			z-index: 1;
			position: relative;
			max-width: 32rem;
			justify-content: center;
			align-content: center;
			display: grid;
			padding-top: var(--level7);
		}
	}

	@media screen and (min-width: 975px) {
		.section-brand-statement__copy {
			max-width: 36rem;
		}
	}

	.section-brand-statement__copy__headline {
		font-size: var(--h1);
		font-family: var(--tertiary-font-family);
		line-height: 1.2;
		margin-bottom: var(--level5);
	}

	@media only screen and (min-width: 600px) {
		.section-brand-statement__copy__headline {
			margin-bottom: 0;
		}
	}

	@media only screen and (min-width: 975px) {
		.section-brand-statement__copy__headline {
			font-size: var(--kilo);
			margin-bottom: var(--level2);
		}
	}

	.section-brand-statement__copy__headline :global(strong) {
		font-family: var(--secondary-font-family);
		font-weight: normal;
	}

	.section-brand-statement__copy__cta {
		max-width: 14rem;
		width: 100%;
		margin-bottom: var(--level2);
	}
</style>
