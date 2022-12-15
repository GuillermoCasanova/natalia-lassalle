<script>
	import PortableText from '@portabletext/svelte';
	export let section;
</script>

<section class="sctn-proj-intro">
	<div class="sctn-proj-intro__inner main-container">
		<div class="sctn-proj-intro__headline">
			<h1>{section.headline}</h1>
		</div>

		<div class="sctn-proj-intro__date">October 2021</div>

		<div class="sctn-proj-intro__body">
			<PortableText blocks="{section.body}" />
		</div>
	</div>
</section>

<style>
	.sctn-proj-intro__inner {
		text-align: center;
	}

	.sctn-proj-intro__headline {
		font-family: var(--tertiary-font-family);
		font-weight: normal;
		font-size: var(--h3);
	}

	@media only screen and (min-width: 900px) {
		.sctn-proj-intro__headline {
			font-size: var(--h2);
			margin-bottom: var(--level3);
		}
	}

	@media only screen and (min-width: 1000px) {
		.sctn-proj-intro__headline {
			font-size: var(--h2);
			margin-bottom: var(--level3);
		}
	}

	.sctn-proj-intro__date {
		margin-bottom: var(--level4);
		font-family: var(--quaternary-font-family);
		font-weight: 700;
		text-transform: uppercase;
		font-size: var(--h5);
		letter-spacing: var(--letter-spacing-1);
	}

	.sctn-proj-intro__body {
		max-width: 75ch;
		margin-right: auto;
		margin-left: auto;
		font-size: var(--h5);
		font-family: var(--primary-font-family);
	}

	.sctn-proj-intro__body p {
		line-height: var(--line-height-double);
		font-size: var(--h5);
	}

	@media only screen and (min-width: 700px) {
		.sctn-proj-intro__body {
			font-size: var(--h4);
		}
	}
</style>
