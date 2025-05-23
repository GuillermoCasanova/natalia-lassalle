import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '43ajij5z',
  dataset: 'production',
  apiVersion: '2022-11-14',
  token: 'skKfNNgILwxuXfQfQ97HXSLu99pc8h1F85pevC454YTmuFFtQgwVCdxGGK1h0usLl9xFiwqMAvtlGY2XPPWECTE3ABDzNmPl9K54f2dGs1YwOyUYOzaMFeYCdlfqru4ZWWM8kBqxech5NChxrrQcA4vsN4ZyBHVIgTmVtiafKWYYVulor47Q',
  useCdn: false
})

async function migrateProjects() {
  try {
    // Fetch all projects
    const projects = await client.fetch('*[_type == "project"]')
    console.log(`Found ${projects.length} projects to migrate`)

    // Process each project
    for (const project of projects) {
      const updates = {
        title: {
          en: project.name || '',
          es: project.name || '' // Using the same name for both languages initially
        },
        description: {
          en: project.about?.en || project.about || '',
          es: project.about?.es || project.about || ''
        },
        slug: {
          _type: 'slug',
          current: project.handle?.current || project.name?.toLowerCase().replace(/\s+/g, '-')
        },
        mainImage: project.thumbnail,
        publishedAt: project.date_released,
        body: {
          en: project.about?.en || project.about || '',
          es: project.about?.es || project.about || ''
        },
        categories: project.medium ? [project.medium] : [],
        project_media: project.project_media || []
      }

      // Update the document
      await client
        .patch(project._id)
        .set(updates)
        .commit()

      console.log(`Migrated project: ${project.name || project._id}`)
    }

    console.log('Migration completed successfully!')
  } catch (error) {
    console.error('Migration failed:', error)
  }
}

migrateProjects() 