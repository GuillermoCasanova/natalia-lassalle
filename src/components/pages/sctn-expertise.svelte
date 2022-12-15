<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import PortableText from '@portabletext/svelte';
	import NoParagraphTag from '../custom-blocks/no-paragraph-tag.svelte';

	export let subline;
	export let headline;
	export let expertise;
	onMount(() => {});
</script>

<section class="our-expertise" id="our-verticals">
	<div class="our-expertise__inner">
		<div class="our-expertise__header">
			<span class="our-expertise__subline">{subline}</span>
			<h2 class="our-expertise__headline">
				<PortableText
					blocks="{headline}"
					serializers="{{ blockStyles: { normal: NoParagraphTag } }}"
				/>
			</h2>
		</div>

		<ul class="our-expertise-list">
			{#each expertise as expertise_example}
				<li class="our-expertise-list__item">
					<div class="expertise">
						<h3 class="expertise__headline">{expertise_example.headline}</h3>
						<div class="expertise__description">
							<PortableText blocks="{expertise_example.description}" />
						</div>

						{#if expertise_example.list.length > 0}
							<ul class="expertise__work-list">
								{#each expertise_example.list as work}
									<li class="expertise__work-list__item">
										{work}
									</li>
								{/each}
							</ul>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	/* Our Expertise*/
	.our-expertise {
		background-color: var(--secondary-color);
	}

	.our-expertise__inner {
		padding-left: var(--level6);
		padding-right: var(--level6);
		padding-top: var(--level7);
	}

	@media screen and (min-width: 975px) {
		.our-expertise__inner {
			max-width: 82rem;
			padding-left: 0;
			padding-right: 0;
			margin-right: auto;
			margin-left: auto;
		}
	}

	.our-expertise__subline {
		text-transform: uppercase;
		font-size: var(--normal);
		letter-spacing: 0.2px;
	}
	.our-expertise__headline {
		font-weight: normal;
		font-size: var(--h1);
		font-family: var(--tertiary-font-family);
		margin-bottom: var(--level5);
	}

	@media screen and (min-width: 975px) {
		.our-expertise__headline {
			font-size: var(--kilo);
		}
	}

	.our-expertise__headline :global(strong) {
		font-family: var(--secondary-font-family);
		font-weight: normal;
	}

	.our-expertise-list {
		display: grid;
	}

	@media screen and (min-width: 600px) {
		.our-expertise-list {
			padding-left: var(--level4);
			padding-right: var(--level4);
			grid-template-columns: 1fr 1fr;
			column-gap: var(--level6);
		}
	}

	@media screen and (min-width: 975px) {
		.our-expertise-list {
			max-width: 70rem;
			margin-right: auto;
			margin-left: auto;
			column-gap: var(--level10);
			column-gap: var(--level7);
		}
	}

	/* Expertise*/
	.expertise {
		margin-bottom: var(--level8);
	}

	.expertise__headline {
		font-size: var(--h1);
		font-family: var(--secondary-font-family);
		font-style: italic;
		font-weight: normal;
		margin-bottom: var(--level1);
	}

	@media screen and (min-width: 975px) {
		.expertise__headline {
			font-size: var(--kilo);
		}
	}

	.expertise__description {
		font-family: var(--secondary-font-family);
		max-width: 45ch;
	}

	.expertise__work-list__item {
		text-transform: capitalize;
		font-weight: bold;
		margin-bottom: var(--level1);
		font-size: var(--normal);
	}
</style>
