import { urlFor } from '$lib/sanity';

/** @param {{ asset?: unknown, alt_text?: string } | undefined | null} bannerImage */
export function getSeoImageUrl(bannerImage, width = 1200) {
	if (!bannerImage?.asset) return undefined;

	return urlFor(bannerImage.asset).width(width).auto('format').url();
}

/** @param {{ asset?: unknown, alt_text?: string } | undefined | null} bannerImage */
export function getSeoImageMeta(bannerImage, width = 1200) {
	const url = getSeoImageUrl(bannerImage, width);
	if (!url) return undefined;

	return {
		url,
		width: 800,
		height: 600,
		alt: bannerImage?.alt_text || 'Missing Alt Text'
	};
}
