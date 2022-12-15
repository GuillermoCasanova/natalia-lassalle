<script>
	import { MetaTags } from 'svelte-meta-tags';
	import { urlFor } from '$lib/sanity';
	import { page } from '$app/stores';
	import SectionTeam from '../components/pages/sctn-team.svelte';
	import SectionMarquee from '../components/pages/sctn-marquee.svelte';
	import SectionHeroHeader from '../components/pages/sctn-hero-header.svelte';
	import SectionBrandStatement from '../components/pages/sctn-brand-statement.svelte';
	import SectionFeaturedWork from '../components/pages/sctn-featured-work.svelte';
	import SectionExpertise from '../components/pages/sctn-expertise.svelte';
	export let data;
</script>

<svelte:head>
	<MetaTags
		title="{$page.data.siteHead.seo.title}"
		description="{$page.data.siteHead.seo.description}"
		canonical="https://www.canonical.ie/"
		siteName="{$page.data.siteHead.seo.title}"
		openGraph="{{
			url: 'https://www.url.ie/a',
			title: $page.data.siteHead.seo.title,
			description: $page.data.siteHead.seo.description,
			images: [
				{
					url: urlFor($page.data.siteHead.seo.banner_image.asset).width(1200),
					width: 800,
					height: 600,
					alt: $page.data.siteHead.seo.banner_image.alt_text
						? $page.data.siteHead.seo.banner_image.alt_text
						: 'Missing Alt Text'
				}
			],
			site_name: $page.data.siteHead.seo.title
		}}"
		twitter="{{
			handle: '@MaisonMatador',
			site: '@MaisonMatador',
			cardType: 'summary_large_image',
			title: $page.data.siteHead.seo.title,
			description: $page.data.siteHead.seo.description,
			image: urlFor($page.data.siteHead.seo.banner_image.asset).width(1200),
			imageAlt: $page.data.siteHead.seo.banner_image.alt_text
				? $page.data.siteHead.seo.banner_image.alt_text
				: 'Missing Alt Text'
		}}"
	/>
</svelte:head>

{#each data.content.page_layout as section}
	{#if section._type == 'page_hero_header'}
		<SectionHeroHeader section="{section}" />
	{/if}
	{#if section._type == 'page_brand_statement'}
		<SectionBrandStatement section="{section}" />
	{/if}

	{#if section._type == 'page_featured_work_list'}
		<SectionFeaturedWork section="{section}" />
	{/if}

	{#if section._type == 'page_marquee'}
		<SectionMarquee section="{section}" />
	{/if}

	{#if section._type == 'page_team'}
		<SectionTeam {...section} />
	{/if}

	{#if section._type == 'sctn_expertise'}
		<SectionExpertise {...section} />
	{/if}
{/each}
