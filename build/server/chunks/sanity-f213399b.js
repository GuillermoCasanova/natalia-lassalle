import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const config = {
  projectId: "gnft3vvt",
  dataset: "mm-dataset",
  apiVersion: "2021-03-25",
  token: "sk3UF9wdQiUuTGnxosrIFUuokBTXTge66CfxmSwUMGeI60wyGqF6Ptomk2TPnYDJCHQy3HnTvL5Pnz2z5dR6sWUx6Yy3RWBIoczZTYM31i2ck8ku8jTL8zizUPcLZM1eNLIpfUNGc7rw9bwvKVg7ELyrohMzhaZ5cmgAkm4LeNah37ldf9EG",
  useCdn: false
};
const client = sanityClient(config);
const imageBuilder = imageUrlBuilder(config);
const urlFor = function(source) {
  return imageBuilder.image(source);
};

export { client as c, urlFor as u };
//# sourceMappingURL=sanity-f213399b.js.map
