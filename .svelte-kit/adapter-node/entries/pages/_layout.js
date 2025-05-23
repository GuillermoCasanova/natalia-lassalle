import { c as client } from "../../chunks/sanity.js";
const ssr = true;
async function load({ url: { pathname } }) {
  const footerRequest = `*[_type == 'footer-settings'][0] {
        ...,
        blocks[] {
            ...,
            select(_type == "footer_link") => {
                ..., 
                'externalLink': externalLink->,
                'internalLink': internalLink->
            }
        }
    }`;
  const mainNavRequest = `*[_type == 'site-settings'][0] {
        main_nav-> {
            ..., 
            items[] {
                ...,
                select(navigationItemUrl.linkType == "internal") => {
                    'navigationItemUrl': navigationItemUrl {
                        ...,
                        internalLink->
                    }
                }
            }
        }
    }`;
  const navigation = await client.fetch(mainNavRequest);
  const footer = await client.fetch(footerRequest);
  return {
    navigation,
    footer,
    pathname
  };
}
export {
  load,
  ssr
};
