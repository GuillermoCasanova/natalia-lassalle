<script>
	import PortableText from '@portabletext/svelte';
	export let section;
</script>

<section class="sctn-proj-copy">
	<div class="sctn-proj-copy__inner main-container">
		{#if section.headline}
			<div class="sctn-proj-copy__headline">
				<h2>{section.headline}</h2>
			</div>
		{/if}

		<div class="sctn-proj-copy__body">
			<PortableText blocks="{section.body}" />
		</div>
	</div>
</section>

<style>
	.sctn-proj-copy__inner {
		text-align: center;
	}

	.sctn-proj-copy__headline * {
		font-family: var(--quaternary-font-family);
		font-weight: 700;
		font-size: var(--h4);
		letter-spacing: var(--letter-spacing-1);
		text-transform: uppercase;
	}

	@media only screen and (min-width: 900px) {
		.sctn-proj-copy__headline {
			margin-bottom: var(--level3);
		}
	}

	@media only screen and (min-width: 1000px) {
		.sctn-proj-copy__headline {
			margin-bottom: var(--level3);
		}
	}

	.sctn-proj-copy__body {
		max-width: 75ch;
		margin-right: auto;
		margin-left: auto;
		font-size: var(--h5);
		font-family: var(--primary-font-family);
	}

	.sctn-proj-copy__body :global(em) {
		/* font-style: normal;
		font-weight: 700; */
	}

	.sctn-proj-copy__body p {
		line-height: var(--line-height-double);
		font-size: var(--h5);
	}

	@media only screen and (min-width: 600px) {
		.sctn-proj-copy__body {
			font-size: var(--h4);
		}
	}

	@media only screen and (min-width: 900px) {
		.sctn-proj-copy__body {
			font-size: var(--h4);
		}
	}

	@media only screen and (min-width: 1000px) {
		.sctn-proj-copy__body {
			font-size: var(--h4);
		}
	}
</style>
