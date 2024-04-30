

export default {
    name: "image_with_figure", 
    type: "object", 
    title: "Image with Figure & Metadata", 
    options: {
        hotspot: true
    },
    fields: [
        {
            type: 'default_image', 
            name: 'image', 
            title: "Image"
        },
        {
            type: "string", 
            name: "figure",
            title: "Figure"
        }
    ],
    preview: {
        select: {
          image: "image",
          title: "figure",
        },
        prepare(selection) {
          const { image, title } = selection;
          return {
            title: title || "Image With Figure",
            media: image,
          };
        },
      }
}

