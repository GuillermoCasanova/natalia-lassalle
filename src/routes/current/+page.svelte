<script>
	import { urlFor } from '$lib/sanity';
	import { MetaTags } from 'svelte-meta-tags';
	import { page } from '$app/stores';
	import LayoutSubpage from '../../components/sections/layout-subpage.svelte';
	export let data;
	console.log(data); 
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
			handle: 'natalialassallemorillo.com',
			site: 'natalialassallemorillo.com',
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


<LayoutSubpage {data}/>
	