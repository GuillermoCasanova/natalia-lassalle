import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const config = {
  projectId: "43ajij5z",
  dataset: "production",
  apiVersion: "2022-11-14",
  // use current UTC date - see "specifying API version"!
  token: "skKfNNgILwxuXfQfQ97HXSLu99pc8h1F85pevC454YTmuFFtQgwVCdxGGK1h0usLl9xFiwqMAvtlGY2XPPWECTE3ABDzNmPl9K54f2dGs1YwOyUYOzaMFeYCdlfqru4ZWWM8kBqxech5NChxrrQcA4vsN4ZyBHVIgTmVtiafKWYYVulor47Q",
  // or leave blank for unauthenticated usage
  useCdn: false
  // `false` if you want to ensure fresh data
};
const client = sanityClient(config);
const imageBuilder = imageUrlBuilder(config);
const urlFor = (source) => imageBuilder.image(source);

export { client as c, urlFor as u };
//# sourceMappingURL=sanity-DpqZfrM0.js.map
