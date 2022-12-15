
export default {
    name: "seo_head", 
    title: "Page SEO",
    type: "object", 
    fields:[
        {
            name: "title",
            title: "Title",
            type: "string", 
            description: "Site title used for this page. Used for social, wwww sharing and SEO",
            validation: Rule => Rule.required(),
            options: {
                maxLength: 100
            }
        },
        {
            name: "description",
            title: "Description",
            type: "string", 
            description: "Page description for this page. Used for social, wwww sharing and SEO.",
            validation: Rule => Rule.required(),
            options: {
                maxLength: 100
            }
        },
        {
            name: "banner_image",
            title: "Share Open Graph Image",
            type: "default_image", 
            description: "Thumbnail image that appears on social shares or text messages. Used for social, wwww sharing and SEO.",
            validation: Rule => Rule.required(),
        }
    ]

}