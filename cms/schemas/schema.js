// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import page from './page'
import pageHome from './page-home'
import sctnHeroHeader from './page-sections/sctn-hero-header'
import sctnBrandStatement from './page-sections/sctn-brand-statement'
import sctnFeaturedWorkList from './page-sections/sctn-featured-work-list'
import expertiseExample from './expertise-example'
import sctnExpertise from './page-sections/sctn-expertise'
import sctnMarquee from './page-sections/sctn-marquee'
import sctnJobsList from './objects/sctn-jobs-list'
import jobPost from './objects/job-post'
import project from './project'
import projectList from './page-sections/sctn-projects-list'
import projectHeader from './projects/proj-header'
import projectIntro from './projects/proj-intro'
import projectImages from './projects/proj-images'
import projectCopy from './projects/proj-copy'
import projectOverview from './projects/proj-overview'
import projectVideoBreak from './projects/proj-video-break'
import seoHead from './seo-head'
import siteSettings from './site-settings'
import image from './image'
import imageWithFigure from './image-with-figure'
import footerLink from './footer-email'
import footerEmail from './footer-link'
import footerSettings from './footer-settings'
import navigation from './documents/navigation'
import navItem from './objects/navItem'
import link from './objects/link'
import modal from './documents/modal'
import modalDefaultState from './objects/modal-default-state'
import modalSuccessState from './objects/modal-success-state'
import richtext from './objects/richtext'
import tag from './documents/tag'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    modal,
    modalDefaultState,
    modalSuccessState,
    page,
    pageHome, 
    sctnHeroHeader,
    sctnBrandStatement,
    sctnFeaturedWorkList,
    sctnJobsList,
    jobPost, 
    sctnMarquee,
    richtext,
    expertiseExample,
    sctnExpertise,
    project,
    projectList,
    projectHeader,
    projectIntro,
    projectImages,
    projectCopy,
    projectOverview,
    projectVideoBreak,
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
    link
  ]),
})
