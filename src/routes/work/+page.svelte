<script>
    import Nav from '../../components/header.svelte';
	import { urlFor } from '$lib/sanity';
	import { MetaTags } from 'svelte-meta-tags';
	import { page } from '$app/stores';
	import LayoutSubpage from '../../components/sections/layout-subpage.svelte';
	export let data;
	let seo = data.content.seo; 

</script>

<svelte:head>
	<MetaTags
		title="{seo.title}"
		description="{seo.description}"
		canonical="https://www.canonical.ie/"
		openGraph="{{
			url: 'https://www.url.ie/a',
			title: seo.title,
			description: seo.description,
			images: [
				{
					url: urlFor(seo.banner_image.asset),
					width: 800,
					height: 600,
					alt: seo.banner_image.alt_text
						? seo.banner_image.alt_text
						: 'Missing Alt Text'
				}
			],
			site_name: 'SiteName'
		}}"
		twitter="{{
			handle: 'natalialassallemorillo.com',
			site: 'natalialassallemorillo.com',
			cardType: 'summary_large_image',
			title: seo.title,
			description: seo.description,
			image: urlFor(seo.banner_image.asset),
			imageAlt: seo.banner_image.alt_text
				? seo.banner_image.alt_text
				: 'Missing Alt Text'
		}}"
	/>
</svelte:head>


 <LayoutSubpage {data} bind:seo/>