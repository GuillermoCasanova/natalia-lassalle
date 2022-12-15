<script>
	import PortableText from '@portabletext/svelte';
	import internalLink from '../custom-marks/internal-link.svelte';
	import externalLink from '../custom-marks/external-link.svelte';
	import mailtoLink from '../custom-marks/mailto-link.svelte';

	export let job_posts;
</script>

<section class="jobs-list">
	<div class="jobs-list__inner">
		{#if job_posts.length > 0}
			<h1 class="jobs-list__headline">Current Job Postings</h1>
			<ul>
				{#each job_posts as job_post}
					<li class="job-posting">
						<h2 class="job-posting__headline">
							{job_post.headline}
						</h2>

						<div class="job-posting__description">
							<PortableText
								blocks="{job_post.description}"
								serializers="{{
									marks: {
										internalLink: internalLink,
										externalLink: externalLink,
										mailtoLink: mailtoLink
									}
								}}"
							/>
						</div>
					</li>
				{/each}
			</ul>
		{:else}
			<h1 class="jobs-list__headline">Nothing here yet</h1>
			<p>There are no job postings at this time.</p>
		{/if}
	</div>
</section>

<style>
	.jobs-list__headline {
		font-family: var(--tertiary-font-family);
		margin-bottom: var(--level7);
	}

	.job-posting {
		margin-bottom: var(--level8);
	}

	@media screen and (min-width: 975px) {
		.job-posting {
			display: flex;
		}
	}

	ul .job-posting:last-child .job-posting__description {
		border-bottom: 0;
	}

	.jobs-list__inner {
		padding-left: var(--level4);
		padding-right: var(--level4);
		padding-top: var(--level8);
		max-width: 78rem;
		margin-right: auto;
		margin-left: auto;
	}

	.job-posting__headline {
		font-family: var(--tertiary-font-family);
		font-size: var(--h3);
		line-height: 1;
	}

	@media screen and (min-width: 975px) {
		.job-posting__headline {
			width: 30%;
			font-size: var(--h3);
		}
	}

	.job-posting__description {
		max-width: 72ch;
		padding-bottom: var(--level5);
		border-bottom: 1px solid var(--quaternary-color);
	}

	@media screen and (min-width: 975px) {
		.job-posting__description {
			width: 100%;
			max-width: calc(100% - 25rem);
			margin-right: 0;
			margin-left: auto;
		}
	}

	.job-posting__description :global(h1),
	.job-posting__description :global(h2),
	.job-posting__description :global(h3) {
		font-weight: normal;
		font-family: var(--tertiary-font-family);
		font-size: var(--h4);
	}

	.job-posting__description :global(ul),
	.job-posting__description :global(li) {
		list-style: disc;
	}

	.job-posting__description :global(ul) {
		padding-left: var(--level4);
		margin-bottom: var(--level4);
	}

	.job-posting__description :global(li) {
		margin-bottom: var(--level0);
	}
</style>
