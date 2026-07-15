import { createClient } from '@sanity/client';
import { SANITY_PROJECT_ID, SANITY_TOKEN, SANITY_DATASET } from '$env/static/private';

export const sanityConfig = {
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET || 'production',
	apiVersion: '2022-11-14',
	token: SANITY_TOKEN,
	useCdn: false
};

export const client = createClient(sanityConfig);
