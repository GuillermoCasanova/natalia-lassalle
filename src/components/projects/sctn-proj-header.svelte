<script>
	import { urlFor } from '$lib/sanity';
	export let section;
</script>

<section class="sctn-proj-header">
	<div class="sctn-proj-header__inner">
		<picture>
			<source
				srcset="{urlFor(section.background.asset).width(1550).height(790).auto('format')}, 
						{urlFor(section.background.asset).width(2300).height(1250).auto('format')} 2x"
				media="(min-width: 1800px)"
			/>
			<source
				srcset="{urlFor(section.background.asset).width(1550).height(790).auto('format')},
						{urlFor(section.background.asset).width(2050).height(1050).auto('format')} 2x"
				media="(min-width: 1280px)"
			/>
			<source
				srcset="{urlFor(section.background.asset).width(1000).height(500).auto('format')},
						{urlFor(section.background.asset).width(1500).height(1000).auto('format')} 2x"
				media="(min-width: 1000px)"
			/>
			<source
				srcset="{urlFor(section.background.asset).width(600).height(400).auto('format')},
						{urlFor(section.background.asset).width(800).height(600).auto('format')} 2x"
				media="(min-width: 600px)"
			/>
			<source
				srcset="{urlFor(section.background.asset)
					.width(400)
					.height(380)
					.fit('crop')
					.crop('focalpoint')
					.focalPoint(
						section.background.hotspot ? section.background.hotspot.x : 0.5,
						section.background.hotspot ? section.background.hotspot.y : 0.5
					)
					.auto('format')},
					{urlFor(section.background.asset)
					.width(700)
					.height(638)
					.fit('crop')
					.crop('focalpoint')
					.focalPoint(
						section.background.hotspot ? section.background.hotspot.x : 0.5,
						section.background.hotspot ? section.background.hotspot.y : 0.5
					)
					.auto('format')} 2x"
				media="(min-width: 200px)"
			/>
			<img
				alt="{section.background.alt_text}"
				src="{urlFor(section.background.asset).width(20).height(20).blur(100).auto('format')}"
			/>
		</picture>
	</div>
</section>

<style>
	.sctn-proj-header {
		width: 100%;
	}

	.sctn-proj-header__inner {
		position: relative;
		padding-bottom: 110%;
		background-color: var(--tertiary-color);
	}

	@media only screen and (min-width: 600px) {
		.sctn-proj-header__inner {
			padding-bottom: 80%;
		}
	}

	@media only screen and (min-width: 1000px) {
		.sctn-proj-header__inner {
			padding-bottom: 46%;
		}
	}

	.sctn-proj-header img {
		width: 100%;
		position: absolute;
		height: 100%;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		object-fit: cover;
	}
</style>
