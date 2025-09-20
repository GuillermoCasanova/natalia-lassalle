export default {
    name: 'tag', 
    title: "Work Medium", 
    type: 'document', 
    fields: [
        {
            name: 'title',
            type: "localeString",
            title: "Name",
            hidden: false, // Hide from the UI
        }
    ],
    preview: {
        select: {
            title: 'title.en'
        }
    }
}