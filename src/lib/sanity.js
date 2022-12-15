

// import  {
//     sanityClient,
//     createPreviewSubscriptionHook,
//     createImageUrlBuilder,
//     createPortableTextComponent
// } from '@sanity/client';

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'; 


const config = {
    projectId: 'gnft3vvt',
    dataset: 'mm-dataset',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: 'sk3UF9wdQiUuTGnxosrIFUuokBTXTge66CfxmSwUMGeI60wyGqF6Ptomk2TPnYDJCHQy3HnTvL5Pnz2z5dR6sWUx6Yy3RWBIoczZTYM31i2ck8ku8jTL8zizUPcLZM1eNLIpfUNGc7rw9bwvKVg7ELyrohMzhaZ5cmgAkm4LeNah37ldf9EG', // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
};


export const client = sanityClient(config);
export const imageBuilder = imageUrlBuilder(config);


// eslint-disable-next-line no-unused-vars
export const urlFor  = function(source) {
    return imageBuilder.image(source)
}



// export const usePreviewSubscription = createPreviewSubscriptionHook(config); 

// export const PortableText = createPortableTextComponent({
//     ...config,
//     seralizers: {},
// });