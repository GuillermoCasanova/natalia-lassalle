import { createImageUrlBuilder } from '@sanity/image-url';
import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from '$env/static/public';

const imageConfig = {
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET || 'production'
};

const imageBuilder = createImageUrlBuilder(imageConfig);

/** @param {import('@sanity/image-url').SanityImageSource} source */
export const urlFor = (source) => imageBuilder.image(source);
