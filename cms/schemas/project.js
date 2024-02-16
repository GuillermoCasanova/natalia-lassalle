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
        validation: Rule => Rule.required()
      },
      {
        name: "preview_videos", 
        type: "array", 
        title: "Preview Videos", 
        of:[{type:"project_video_break"}],
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
