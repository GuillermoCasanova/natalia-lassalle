<script>
	export let section;
</script>

<section class="section-hero-header">
	<div class="section-hero-header__inner main-container">
		<div class="section-hero-header__content">
			<div class="section-hero-header__headline">
				<h1 class="visually-hidden">Maison Matador</h1>
				<svg role="presentation"><use xlink:href="#maison-logo"> </use></svg>
			</div>

			<div class="section-hero-header__body">
				<p>{section.subline}</p>
			</div>
		</div>
	</div>
</section>

<style>
	.section-hero-header {
		height: 100vh;
		max-height: 30rem;
		width: 100%;
		position: relative;
		overflow: hidden;
		background-color: var(--tertiary-color);
	}

	@media screen and (min-width: 600px) {
		.section-hero-header {
			height: 68vmin;
			max-height: none;
		}
	}

	@media screen and (min-width: 990px) {
		.section-hero-header {
			height: 60vmin;
			min-height: 40rem;
			max-height: none;
		}
	}

	@media screen and (min-width: 1891px) {
		.section-hero-header {
			height: 60vmin;
		}
	}

	.section-hero-header__inner {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
		position: relative;
	}

	.section-hero-header__background {
		position: absolute;
		z-index: 0;
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.section-hero-header__content {
		text-align: center;
		width: 100%;
		margin-top: var(--level6);
	}

	.section-hero-header__headline {
		margin-bottom: var(--level2);
		width: 100%;
		max-width: 94%;
		max-width: 26rem;
		margin-left: auto;
		margin-right: auto;
	}

	@media screen and (min-width: 600px) {
		.section-hero-header__headline {
			margin-bottom: var(--level5);
			max-width: 35rem;
		}
	}

	.section-hero-header__headline svg {
		width: 100%;
		height: 3rem;
		display: block;
	}

	@media screen and (min-width: 600px) {
		.section-hero-header__headline svg {
			height: 3.5rem;
		}
	}

	.section-hero-header__body * {
		font-size: var(--h5);
		font-family: var(--tertiary-font-family);
		text-transform: uppercase;
	}

	@media screen and (min-width: 600px) {
		.section-hero-header__body * {
			font-size: var(--h4);
		}
	}
</style>
