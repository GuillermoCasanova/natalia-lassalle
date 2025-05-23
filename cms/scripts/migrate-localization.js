import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '43ajij5z',
  dataset: 'production',
  apiVersion: '2022-11-14',
  token: 'ska59wMxfmwjmQIixiRrOBN2aA1A27iuOqT121Y00tyCbor8D3qLFYxPsVulVwH7xMsrWPQLAL7WLLoMB9DH8YLeWRDx3d4kp1YcklAV0k6UAGb07Co80ai85MWj0KgXph57oReEugfGtjU4zrFsbuIvYMc4EqgxdIo2BbSyYSLYgzLGaTvK',
  useCdn: false
})

async function migrateLocalization() {
  try {
    // Fetch all projects
    const projects = await client.fetch('*[_type == "project"]')
    console.log(`Found ${projects.length} projects to migrate`)

    // Process each project
    for (const project of projects) {
      const updates = {
        name: {
          en: project.name || '',
          es: project.name || ''
        },
        about: {
          en: project.about || '',
          es: project.about || ''
        },
        credits: project.creditsList || [], // Keep the original creditsList structure
        creditsList: project.creditsList || [] // Keep the original creditsList structure
      }

      // Update the project
      const result = await client
        .patch(project._id)
        .set(updates)
        .commit()

      console.log(`Migrated project: ${project.name}`)
    }

    console.log('Migration completed successfully')
  } catch (error) {
    console.error('Migration failed:', error)
  }
}

migrateLocalization() 