// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import documents
import navigation from './documents/navigation'
import post from './documents/post'
import tag from './documents/tag'
import workCredit from './documents/work-credit'
import workType from './documents/work-type'
import postAuthor from './documents/post-author'

// Import page sections
import page from './page'
import pageHome from './page-home'
import sctnHeroHeader from './page-sections/sctn-hero-header'
import sctnExperienceList from './page-sections/sctn-experience-list'
import projectList from './page-sections/sctn-projects-list'
import sctnRichText from './page-sections/sctn-rich-text'
import textsList from './page-sections/sctn-texts-list'

// Import projects
import project from './project'
import projectVideoBreak from './projects/proj-video-break'

// Import objects
import navItem from './objects/navItem'
import link from './objects/link'
import richtext from './objects/richtext'
import video from './objects/video'
import iframe from './objects/iframe'

// Import images
import image from './image'
import imageWithFigure from './image-with-figure'

// Import footer
import footerLink from './footer-email'
import footerEmail from './footer-link'
import footerSettings from './footer-settings'

// Import other components
import expertiseExample from './expertise-example'
import seoHead from './seo-head'
import siteSettings from './site-settings'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Documents
    navigation,
    post,
    tag,
    workCredit,
    workType,
    postAuthor,
    
    // Page sections
    page,
    pageHome,
    sctnHeroHeader,
    sctnExperienceList,
    projectList,
    sctnRichText,
    textsList,
    
    // Projects
    project,
    projectVideoBreak,
    
    // Objects
    navItem,
    link,
    richtext,
    video,
    iframe,
    
    // Images
    image,
    imageWithFigure,
    
    // Footer
    footerLink,
    footerEmail,
    footerSettings,
    
    // Other components
    expertiseExample,
    seoHead,
    siteSettings
  ]),
})
