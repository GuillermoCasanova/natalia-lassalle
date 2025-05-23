
import sanityClient from '@sanity/client';


const config = {
    projectId: '43ajij5z',
    dataset: 'production',
    apiVersion: '2022-11-14', // use current UTC date - see "specifying API version"!
    token: 'skKfNNgILwxuXfQfQ97HXSLu99pc8h1F85pevC454YTmuFFtQgwVCdxGGK1h0usLl9xFiwqMAvtlGY2XPPWECTE3ABDzNmPl9K54f2dGs1YwOyUYOzaMFeYCdlfqru4ZWWM8kBqxech5NChxrrQcA4vsN4ZyBHVIgTmVtiafKWYYVulor47Q', // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
};

const client = sanityClient(config);

import {FiBriefcase} from 'react-icons/fi'; 

export default   {
    name: 'project', 
    type: 'document', 
    title: 'Projects',
    icon: FiBriefcase, 
    fields: [

      {
        name: "name", 
        type: "string", 
        title: 'Name',
        validation: Rule => Rule.required()
      },
      {
        name: "handle", 
        type: "slug", 
        title: 'Project Handle',
        options: {
          source: "name",
          maxLength: 100
        }
      },
      {
        name: "seo",
        type: "seo_head",
        title: "Page SEO"
      },
      {
        name: "thumbnail",
        type: "default_image", 
        title: "Thumbnail",
        description: "An image used for the project thumbnail. Image is cropped to be 1x1 in most devices.",
        validation: Rule => Rule.required()
      },
      {
        name: 'featured',
        title: 'Featured Project',
        type: 'boolean',
        description: 'Mark as featured project, this will place it at the top of the list it is in. Only one can be featured at a time.',
        validation: Rule => Rule.custom(async (value, context) => {
          if (!value) return true 
  
          const existingFeaturedProject = await client.fetch(`
            *[_type == "project" && featured == true && !(_id in path("drafts.**"))][0] {
              _id
            }
          `)
  
          if (existingFeaturedProject && existingFeaturedProject._id !== context.document._id) {
            return 'Only one project can be featured at a time'
          }
  
          return true
        })
      },
      {
        type: "richtext", 
        title: "About The Work", 
        name: "about", 
        validation: Rule => Rule.required()
      },
      {
        type: "date", 
        title: "Date Released", 
        name: "date_released", 
        options: {
          dateFormat: "YYYY"
        },
        validation: Rule => Rule.required()
      },
      {
        type: "richtext", 
        title: "Credits", 
        name: "credits", 
      },
      {
        name: 'creditsList',
        title: 'Credits',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'work_credit' }]
          }
        ],
        description: 'A list of credit mentions',
        validation: Rule => Rule.required()
      },
      {
        name: "preview_videos", 
        type: "array", 
        title: "Preview Videos", 
        of:[{type:"iframe"}],
      },
      {
        name: "medium", 
        type: "reference", 
        title: "Medium", 
        to:[{type: 'tag'} ],
        validation: Rule => Rule.required()
      },
      {
        name: "project_media", 
        type: "array", 
        title: "Media Images", 
        of:[{type: 'default_image'}, {type: 'image_with_figure'} ],
        validation: Rule => Rule.required()
      }
    ]
}
