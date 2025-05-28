import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const config = {
    projectId: '43ajij5z',
    dataset: 'production',
    apiVersion: '2022-11-14', // use current UTC date - see "specifying API version"!
    token: 'skKfNNgILwxuXfQfQ97HXSLu99pc8h1F85pevC454YTmuFFtQgwVCdxGGK1h0usLl9xFiwqMAvtlGY2XPPWECTE3ABDzNmPl9K54f2dGs1YwOyUYOzaMFeYCdlfqru4ZWWM8kBqxech5NChxrrQcA4vsN4ZyBHVIgTmVtiafKWYYVulor47Q', // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
};

// Initialize the client
const client = createClient(config);
const imageBuilder = imageUrlBuilder(config);

// Export the client and helper functions
export { client, imageBuilder };

// Helper function for image URLs
export const urlFor = (source) => imageBuilder.image(source);
