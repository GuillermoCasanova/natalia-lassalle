<script>
	import { urlFor } from '$lib/sanity';
	import PortableText from '@portabletext/svelte';
	export let section;
</script>

<section class="no-padding">
	<ul class="project-list">
		{#each section.projects as project}
			<li>
				<div class="project-thumbnail">
					<a
						href="/our-work/{project.handle.current}"
						tabindex="-1"
						class="project-thumbnail__image-container"
					>
						<div class="responsive-square-image">
							<img
								src=""
								srcset="{urlFor(project.thumbnail.asset).width(400).auto('format')} 400w,
							 		 {urlFor(project.thumbnail.asset).width(600).auto('format')} 600w,
							 		 {urlFor(project.thumbnail.asset).width(800).auto('format')} 800w  
							 		 {urlFor(project.thumbnail.asset).width(1200).auto('format')} 1200w,
							 		 {urlFor(project.thumbnail.asset).width(1600).auto('format')} 1600w"
								sizes="calc(100vw - 3.5rem)"
								loading="lazy"
								decoding="async"
								alt="{project.thumbnail.alt_text}"
							/>
						</div>
					</a>
					<div class="project-thumbnail__info-container">
						<div class="project-thumbnail__info-container__inner">
							<h2 class="project-thumbnail__headline">
								{project.name}
							</h2>

							{#if project.short_summary}
								<div class="project-thumbnail__description">
									<p>
										{project.short_summary}
									</p>
								</div>
							{/if}

							<a
								href="/our-work/{project.handle.current}"
								class="project-thumbnail__button  button  button--primary  button--medium"
								rel="internal"
								title="View {project.name} Case Study">Read More</a
							>
						</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</section>

<style>
	.project-list {
		display: flex;
		flex-direction: column;
	}

	@media only screen and (min-width: 600px) {
		.project-list li:nth-child(even) .project-thumbnail {
			flex-direction: row-reverse;
		}
	}

	.project-thumbnail {
		width: 100%;
		display: flex;
		text-decoration: none;
		flex-direction: column;
	}

	@media only screen and (min-width: 600px) {
		.project-thumbnail {
			flex-direction: row;
		}
	}

	.project-thumbnail__image-container {
		background-color: var(--tertiary-color);
		width: 100%;
	}

	@media only screen and (min-width: 600px) {
		.project-thumbnail__image-container {
			width: 50%;
		}
	}

	.project-thumbnail__info-container {
		padding: var(--level5);
		padding-bottom: var(--level8);
		width: 100%;
		display: flex;
		align-items: center;
		background-color: #f2f0ec;
	}

	@media only screen and (min-width: 600px) {
		.project-thumbnail__info-container {
			width: 50%;
		}
	}

	.project-thumbnail__info-container__inner {
		max-width: 48ch;
		margin-right: auto;
		margin-left: auto;
	}

	.responsive-square-image {
		position: relative;
		width: 100%;
		padding-bottom: 100%;
		height: 100%;
	}

	.responsive-square-image img {
		position: absolute;
		object-fit: cover;
		height: 100%;
		width: 100%;
	}

	.project-thumbnail__headline {
		font-family: var(--tertiary-font-family);
		font-size: var(--h1);
		font-weight: normal;
	}

	.project-thumbnail__description {
		font-family: var(--secondary-font-family);
	}

	.project-thumbnail__button {
		max-width: 13rem;
	}
</style>
