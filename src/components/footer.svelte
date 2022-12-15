<script>
	import { onMount } from 'svelte';

	export let blocks;

	let footer_columns = '';

	let blocksLength = blocks.length;

	export let column_total = '';

	if (blocksLength <= 3) {
		column_total = 'columns-3';
	}

	if (blocksLength == 4) {
		column_total = 'columns-4';
	}

	$: column_class = column_total;
</script>

<footer class="{column_class}">
	<div class="footer__inner">
		{#each blocks as block}
			<div class="footer__block">
				{#if block._type == 'footer_link'}
					<h1 class="footer-block__headline">{block.headline}</h1>
					{#if block.linkType == 'external'}=
						<a
							class="footer-block__link"
							href="{block.href}"
							target="{block.blank ? '_blank' : null}"
							rel="external">{block.url_text}</a
						>
					{/if}

					{#if block.linkType == 'internal'}
						<a class="footer-block__link" href="/{block.internalLink.handle.current}" rel="internal"
							>{block.url_text}</a
						>
					{/if}
				{/if}

				{#if block._type == 'footer_email_link'}
					<h1 class="footer-block__headline">{block.headline}</h1>
					<a class="footer-block__link" href="mailto:{block.url}">
						{block.url}
					</a>
				{/if}
			</div>
		{/each}
	</div>
</footer>

<style>
	footer {
		border-top: 1px solid black;
		padding-top: var(--level8);
		padding-bottom: var(--level4);
		background-color: var(--tertiary-color);
	}

	@media screen and (min-width: 600px) {
		footer {
			padding-top: var(--level7);
			padding-bottom: var(--level2);
		}
	}

	@media screen and (min-width: 975px) {
		footer.columns-4 .footer__inner {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}

		footer.columns-3 .footer__inner {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	.footer__inner {
		padding-left: var(--level6);
		padding-right: var(--level6);
		max-width: 86rem;
		margin-right: auto;
		margin-left: auto;
		display: grid;
		column-gap: var(--level8);
	}

	.footer__block {
		margin-bottom: var(--level6);
	}

	.footer-block__headline {
		font-weight: normal;
		text-transform: uppercase;
		font-size: var(--h5);
		font-family: var(--tertiary-font-family);
		margin-bottom: var(--level2);
		letter-spacing: 0.5px;
	}

	.footer-block__link {
		font-family: var(--secondary-font-family);
		font-style: italic;
		font-size: var(--h5);
	}

	.footer-block__link:hover,
	.footer-block__link:focus {
		text-decoration: underline;
	}
</style>
