
import sanityClient from '@sanity/client';


const config = {
    projectId: '43ajij5z',
    dataset: 'production',
    apiVersion: '2022-11-14', // use current UTC date - see "specifying API version"!
    token: 'skKfNNgILwxuXfQfQ97HXSLu99pc8h1F85pevC454YTmuFFtQgwVCdxGGK1h0usLl9xFiwqMAvtlGY2XPPWECTE3ABDzNmPl9K54f2dGs1YwOyUYOzaMFeYCdlfqru4ZWWM8kBqxech5NChxrrQcA4vsN4ZyBHVIgTmVtiafKWYYVulor47Q', // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
};

const client = sanityClient(config);


import {FiEdit3} from 'react-icons/fi';

export default {
    name: "post",
    type: "document",
    title: "Text Post",
    icon: FiEdit3,
    options: {
        // show language filter for this document type, regardless of how documentTypes for the plugin is configured
        languageFilter: true,
    },
    fields: [
        {
            name: "title", 
            type: "localeString",
            title: "Post Title",
            validation: Rule => Rule.required()
        },
        {
            name: "handle",
            title: "Post Handle",
            type: "slug",
            options: {
                source: "title.en",
                maxLength: 100
            },
            validation: Rule => Rule.required()
        },
        {
            name: "authors",
            title: "Authors",
            type: "array",
            of: [{ type: "reference", to: { type: "post_author" } }]
        },
        {
            name: "seo",
            title: "Page SEO",
            type: "seo_head"
        },
        {
            name: "featured_image",
            title: "Featured Image",
            type: "default_image",
            validation: Rule => Rule.required()
        },
        {
            type: "localeRichText", 
            title: "Post Content", 
            name: "content",
            validation: Rule => Rule.required()
        },
        {
            name: 'featured',
            title: 'Featured Text',
            type: 'boolean',
            description: 'Mark as featured post, this will place it at the beginning of the list it is in. Only one post can be featured.',
            validation: Rule => Rule.custom(async (value, context) => {
              if (!value) return true 
      
              const existingFeaturedPost = await client.fetch(`
                *[_type == "post" && featured == true && !(_id in path("drafts.**"))][0] {
                  _id
                }
              `)
      
              if (existingFeaturedPost && existingFeaturedPost._id !== context.document._id) {
                return 'Only one post can be featured at a time'
              }
      
              return true
            })
          },
    ],
    preview: {
        select: {
            title: 'title.en',
            media: 'featured_image'
        },
        prepare(selection) {
            const { title, media } = selection
            return {
                title: title || 'Untitled Post',
                media: media
            }
        }
    }
}