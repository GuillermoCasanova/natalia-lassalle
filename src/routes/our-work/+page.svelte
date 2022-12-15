<script>
	import { urlFor } from '$lib/sanity';
	import { MetaTags } from 'svelte-meta-tags';
	import { page } from '$app/stores';
	import SctnPageProjectList from '../../components/pages/sctn-proj-list.svelte';
	export let data;
</script>

<svelte:head>
	<MetaTags
		title="{$page.data.content.seo.title}"
		description="{$page.data.content.seo.description}"
		canonical="https://www.canonical.ie/"
		openGraph="{{
			url: 'https://www.url.ie/a',
			title: $page.data.content.seo.title,
			description: $page.data.content.seo.description,
			images: [
				{
					url: urlFor($page.data.content.seo.banner_image.asset),
					width: 800,
					height: 600,
					alt: $page.data.content.seo.banner_image.alt_text
						? $page.data.content.seo.banner_image.alt_text
						: 'Missing Alt Text'
				}
			],
			site_name: 'SiteName'
		}}"
		twitter="{{
			handle: '@MaisonMatador',
			site: '@MaisonMatador',
			cardType: 'summary_large_image',
			title: $page.data.content.seo.title,
			description: $page.data.content.seo.description,
			image: urlFor($page.data.content.seo.banner_image.asset),
			imageAlt: $page.data.content.seo.banner_image.alt_text
				? $page.data.content.seo.banner_image.alt_text
				: 'Missing Alt Text'
		}}"
	/>
</svelte:head>

<section class="no-padding">
	<div class="visually-hidden">
		<h1>{$page.data.content.page_title}</h1>
	</div>
</section>

{#each data.content.page_layout as section}
	{#if section._type == 'project_list'}
		<SctnPageProjectList section="{section}" />
	{/if}
{/each}
