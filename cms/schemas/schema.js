// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import page from './page'
import pageHome from './page-home'
import sctnHeroHeader from './page-sections/sctn-hero-header'
import expertiseExample from './expertise-example'
import sctnExperienceList from './page-sections/sctn-experience-list'
import image from './image'
import imageWithFigure from './image-with-figure'
import footerLink from './footer-email'
import footerEmail from './footer-link'
import footerSettings from './footer-settings'
import navigation from './documents/navigation'
import navItem from './objects/navItem'
import link from './objects/link'
import project from './project'
import projectList from './page-sections/sctn-projects-list'
import projectVideoBreak from './projects/proj-video-break'
import post from './documents/post'
import richtext from './objects/richtext'
import sctnRichText from './page-sections/sctn-rich-text'
import seoHead from './seo-head'
import siteSettings from './site-settings'
import tag from './documents/tag'
import video from './objects/video'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    page,
    pageHome, 
    sctnHeroHeader,
    richtext,
    expertiseExample,
    sctnExperienceList,
    post,
    project,
    projectList,
    projectVideoBreak,
    sctnRichText,
    seoHead,
    siteSettings,
    tag,
    imageWithFigure,
    image,
    footerLink,
    footerEmail, 
    footerSettings,
    navigation,
    navItem, 
    link,
    video
  ]),
})
