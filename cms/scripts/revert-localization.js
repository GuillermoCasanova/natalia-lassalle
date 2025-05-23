import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '43ajij5z',
  dataset: 'production',
  apiVersion: '2022-11-14',
  token: 'ska59wMxfmwjmQIixiRrOBN2aA1A27iuOqT121Y00tyCbor8D3qLFYxPsVulVwH7xMsrWPQLAL7WLLoMB9DH8YLeWRDx3d4kp1YcklAV0k6UAGb07Co80ai85MWj0KgXph57oReEugfGtjU4zrFsbuIvYMc4EqgxdIo2BbSyYSLYgzLGaTvK',
  useCdn: false
})

async function revertLocalization() {
  try {
    // Fetch all projects
    const projects = await client.fetch('*[_type == "project"]')
    console.log(`Found ${projects.length} projects to revert`)

    // Process each project
    for (const project of projects) {
      const updates = {
        name: project.name?.en || project.name || '',
        about: project.about?.en || project.about || '',
        credits: project.creditsList || [], // Keep the original creditsList structure
        creditsList: project.creditsList || [] // Keep the original creditsList structure
      }

      // Update the project
      const result = await client
        .patch(project._id)
        .set(updates)
        .commit()

      console.log(`Reverted project: ${project.name?.en || project.name}`)
    }

    console.log('Revert completed successfully')
  } catch (error) {
    console.error('Revert failed:', error)
  }
}

revertLocalization() 