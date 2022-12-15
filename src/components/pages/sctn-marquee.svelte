<script>
	import { onMount } from 'svelte';
	export let section;

	onMount(() => {
		console.log(section);
	});
</script>

<section class="marquee-section">
	<div class="marquee-section__inner">
		<p class="marquee-section__text">{section.text}</p>
		<p class="marquee-section__text" role="presentation">{section.text}</p>
		<p class="marquee-section__text" role="presentation">{section.text}</p>
		<p class="marquee-section__text" role="presentation">{section.text}</p>
	</div>
</section>

<style>
	@keyframes marquee-scroll {
		100% {
			transform: translateX(-112%);
		}
	}

	@keyframes marquee-scroll-small {
		100% {
			transform: translateX(-243.5%);
		}
	}

	.marquee-section {
		border-top: 1px solid black;
		border-bottom: 1px solid black;
		padding-bottom: 0;
		background-color: var(--secondary-color);
		overflow: hidden;
		position: relative;
	}

	.marquee-section__inner {
		display: flex;
		flex-wrap: nowrap;
		padding-top: var(--level5);
		padding-bottom: var(--level5);
		animation: marquee-scroll-small 20s linear infinite;
	}

	@media screen and (min-width: 600px) {
		.marquee-section__inner {
			padding-top: var(--level7);
			padding-bottom: var(--level7);
			animation: marquee-scroll 30s linear infinite;
		}
	}

	.marquee-section__text {
		flex-shrink: 0;
		padding-right: 6rem;
		font-size: var(--h3);
		font-family: var(--secondary-font-family);
		font-style: italic;
		margin-bottom: 0;
		line-height: 1;
		position: relative;
	}

	@media screen and (min-width: 700px) {
		.marquee-section__text {
			font-size: var(--h2);
		}
	}

	@media screen and (min-width: 975px) {
		.marquee-section__text {
			font-size: var(--h1);
		}
	}

	.marquee-section__text:after {
		content: ' ';
		height: 2px;
		width: 4rem;
		background: black;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 1rem;
		margin: auto;
	}
</style>
