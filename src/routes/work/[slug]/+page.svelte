<script>
	import { urlFor } from '$lib/sanity';
	import { MetaTags } from 'svelte-meta-tags';
	import SctnProjHeader from '../../../components/projects/sctn-proj-header.svelte';
	import SctnProjIntro from '../../../components/projects/sctn-proj-intro.svelte';
	import SctnProjImages from '../../../components/projects/sctn-proj-images.svelte';
	import SctnProjCopy from '../../../components/projects/sctn-proj-copy.svelte';
	import SctnProjVideobreak from '../../../components/projects/sctn-proj-video-break.svelte';
	import { page } from '$app/stores';

	export let data;
</script>

<svelte:head>
	<MetaTags
		title="{$page.data.project.seo.title}"
		description="{$page.data.project.seo.description}"
		canonical="https://www.canonical.ie/"
		openGraph="{{
			url: 'https://www.url.ie/a',
			title: $page.data.project.seo.title,
			description: $page.data.project.seo.description,
			images: [
				{
					url: urlFor($page.data.project.seo.banner_image.asset),
					width: 800,
					height: 600,
					alt: $page.data.project.seo.banner_image.alt_text
						? $page.data.project.seo.banner_image.alt_text
						: 'Missing Alt Text'
				}
			],
			site_name: 'SiteName'
		}}"
		twitter="{{
			handle: '@MaisonMatador',
			site: '@MaisonMatador',
			cardType: 'summary_large_image',
			title: $page.data.project.seo.title,
			description: $page.data.project.seo.description,
			image: urlFor($page.data.project.seo.banner_image.asset),
			imageAlt: $page.data.project.seo.banner_image.alt_text
				? $page.data.project.seo.banner_image.alt_text
				: 'Missing Alt Text'
		}}"
	/>
</svelte:head>

<article>
	{#each data.project.project_layout as section}
		{#if section._type == 'project_header'}
			<SctnProjHeader section="{section}" />
		{/if}
		{#if section._type == 'project_intro'}
			<SctnProjIntro section="{section}" />
		{/if}
		{#if section._type == 'project_images'}
			<SctnProjImages section="{section}" />
		{/if}
		{#if section._type == 'project_copy'}
			<SctnProjCopy section="{section}" />
		{/if}
		{#if section._type == 'project_video_break'}
			<SctnProjVideobreak section="{section}" />
		{/if}
	{/each}
</article>
