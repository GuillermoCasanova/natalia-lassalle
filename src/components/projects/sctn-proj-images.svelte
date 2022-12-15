<script>
	export let section;
	import { urlFor } from '$lib/sanity';
</script>

<div class="main-container">
	<section
		class="sctn-proj-images {section.images.length >= 2 ? 'sctn-proj-images--multiple' : ''}"
	>
		{#if section.images.length == 1}
			<div class="sctn-proj-images__single-image">
				{#if section.images[0].figure}
					<figure>
						<div class="sctn-proj-images__single-image__inner">
							<img
								src=""
								srcset="{urlFor(section.images[0].image.asset).width(400).auto('format')} 400w,
							 		 {urlFor(section.images[0].image.asset).width(600).auto('format')} 600w,
							 		 {urlFor(section.images[0].image.asset).width(800).auto('format')} 800w  
							 		 {urlFor(section.images[0].image.asset).width(1200).auto('format')} 1200w,
							 		 {urlFor(section.images[0].image.asset).width(1600).auto('format')} 1600w"
								sizes="calc(100vw - 3.5rem)"
								loading="lazy"
								decoding="async"
								alt="{section.images[0].image.alt_text}"
							/>
						</div>
						<figcaption>{section.images[0].figure}</figcaption>
					</figure>
				{:else}
					<div class="sctn-proj-images__single-image__inner">
						<img
							src=""
							srcset="{urlFor(section.images[0].image.asset).width(400).auto('format')} 400w,
								  {urlFor(section.images[0].image.asset).width(600).auto('format')} 600w,
								  {urlFor(section.images[0].image.asset).width(800).auto('format')} 800w  
								  {urlFor(section.images[0].image.asset).width(1200).auto('format')} 1200w,
								  {urlFor(section.images[0].image.asset).width(1600).auto('format')} 1600w"
							sizes="calc(100vw - 3.5rem)"
							loading="lazy"
							decoding="async"
							alt="{section.images[0].image.alt_text}"
						/>
					</div>
				{/if}
			</div>
		{/if}
		{#if section.images.length >= 2}
			{#each section.images as imageFile}
				<div class="sctn-proj-images__multiple-image">
					{#if imageFile.figure}
						<figure>
							<div class="sctn-proj-images__multiple-image__inner">
								<img
									srcset="	
								{urlFor(imageFile.image.asset)
										.width(200)
										.height(200)
										.fit('crop')
										.focalPoint(
											imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
											imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
										)
										.auto('format')} 200w,
									{urlFor(imageFile.image.asset)
										.width(400)
										.height(400)
										.fit('crop')
										.focalPoint(
											imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
											imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
										)
										.auto('format')} 400w, 
											{urlFor(imageFile.image.asset)
										.width(600)
										.height(600)
										.fit('crop')
										.focalPoint(
											imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
											imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
										)
										.auto('format')} 600w, 
											{urlFor(imageFile.image.asset)
										.width(800)
										.height(800)
										.fit('crop')
										.focalPoint(
											imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
											imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
										)
										.auto('format')} 800w, 
									{urlFor(imageFile.image.asset)
										.width(1200)
										.height(1200)
										.fit('crop')
										.focalPoint(
											imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
											imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
										)
										.auto('format')} 1200w,
									{urlFor(imageFile.image.asset)
										.width(1200)
										.height(1200)
										.fit('crop')
										.focalPoint(
											imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
											imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
										)
										.auto('format')} 1600w
										"
									sizes="calc(100vw/2 - 3.5rem)"
									alt="{imageFile.image.alt_text}"
									src="{urlFor(imageFile.image.asset)
										.width(20)
										.height(20)
										.blur(100)
										.auto('format')}"
									decoding="async"
									loading="lazy"
								/>
							</div>
							<figcaption>{imageFile.figure}</figcaption>
						</figure>
					{:else}
						<div class="sctn-proj-images__multiple-image__inner">
							<img
								srcset="	
							{urlFor(imageFile.image.asset)
									.width(200)
									.height(200)
									.fit('crop')
									.focalPoint(
										imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
										imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
									)
									.auto('format')} 200w,
								{urlFor(imageFile.image.asset)
									.width(400)
									.height(400)
									.fit('crop')
									.focalPoint(
										imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
										imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
									)
									.auto('format')} 400w, 
										{urlFor(imageFile.image.asset)
									.width(600)
									.height(600)
									.fit('crop')
									.focalPoint(
										imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
										imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
									)
									.auto('format')} 600w, 
										{urlFor(imageFile.image.asset)
									.width(800)
									.height(800)
									.fit('crop')
									.focalPoint(
										imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
										imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
									)
									.auto('format')} 800w, 
								{urlFor(imageFile.image.asset)
									.width(1200)
									.height(1200)
									.fit('crop')
									.focalPoint(
										imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
										imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
									)
									.auto('format')} 1200w,
								{urlFor(imageFile.image.asset)
									.width(1200)
									.height(1200)
									.fit('crop')
									.focalPoint(
										imageFile.image.hotspot ? imageFile.image.hotspot.x : 0.5,
										imageFile.image.hotspot ? imageFile.image.hotspot.y : 0.5
									)
									.auto('format')} 1600w
									"
								sizes="calc(100vw/2 - 3.5rem)"
								alt="{imageFile.image.alt_text}"
								src="{urlFor(imageFile.image.asset).width(20).height(20).blur(100).auto('format')}"
								decoding="async"
								loading="lazy"
							/>
						</div>
					{/if}
				</div>
			{/each}
		{/if}
	</section>
</div>

<style>
	figcaption {
		text-align: center;
		display: block;
		font-family: var(--secondary-font-family);
		font-size: var(--h5);
		font-style: italic;
	}

	figure {
		margin: 0;
	}

	.sctn-proj-images {
		margin-bottom: var(--level4);
	}

	.sctn-proj-images__single-image {
		position: relative;
		width: 100%;
		max-width: 80rem;
		margin-left: auto;
		margin-right: auto;
	}

	.sctn-proj-images__single-image__inner {
		width: 100%;
		padding-bottom: 52.6%;
		position: relative;
		margin-bottom: var(--level2);
		background-color: var(--secondary-color);
	}

	.sctn-proj-images__single-image__inner img {
		position: absolute;
		object-fit: cover;
		width: 100%;
		height: 100%;
		max-inline-size: 100%;
	}

	.sctn-proj-images__single-image figcaption {
		text-align: center;
		display: block;
		font-family: var(--secondary-font-family);
		font-size: var(--h5);
		font-style: italic;
	}

	.sctn-proj-images--multiple {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: var(--level4);
		grid-row-gap: var(--level4);
		max-width: 80rem;
		margin-left: auto;
		margin-right: auto;
		padding-bottom: 0;
	}

	@media only screen and (min-width: 900px) {
		.sctn-proj-images--multiple {
			grid-column-gap: var(--level6);
			grid-row-gap: var(--level6);
			padding-bottom: var(--level6);
		}
	}

	@media only screen and (min-width: 1000px) {
	}

	.sctn-proj-images__multiple-image {
		width: 100%;
		position: relative;
	}

	.sctn-proj-images__multiple-image figcaption {
		text-align: left;
	}

	.sctn-proj-images__multiple-image__inner {
		width: 100%;
		overflow: hidden;
		padding-bottom: 100%;
		position: relative;
		margin-bottom: var(--level2);
		background-color: rgb(210, 210, 210);
	}

	.sctn-proj-images__multiple-image__inner img {
		position: absolute;
		object-fit: cover;
		width: 100%;
		max-inline-size: 100%;
		height: 100%;
	}
</style>
