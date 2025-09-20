import {type SchemaTypeDefinition} from 'sanity'

import page from './documents/page'
import project from './documents/project'
import workType from './documents/work-type'
import postAuthor from './documents/post-author'
import post from './documents/post'
import tag from './documents/tag'
import workCredit from './documents/work-credit'
import navigation from './documents/navigation'

import sctnHeroHeader from './page-sections/sctn-hero-header'
import sctnExperienceList from './page-sections/sctn-experience-list'
import sctnProjectsList from './page-sections/sctn-projects-list'
import sctnRichText from './page-sections/sctn-rich-text'
import sctnTextsList from './page-sections/sctn-texts-list'

import navItem from './objects/navItem'
import link from './objects/link'
import richtext from './objects/richtext'
import video from './objects/video'
import iframe from './objects/iframe'

import image from './image'
import imageWithFigure from './image-with-figure'

import footerLink from './footer-link'
import footerEmail from './footer-email'
import footerSettings from './footer-settings.js'

import expertiseExample from './expertise-example'
import seoHead from './seo-head'
import siteSettings from './site-settings.js'
import localeString from './objects/localeString'
import localeRichText from './objects/localeRichText'

const schemaTypes = [
  // Documents
  page,
  project,
  workType,
  postAuthor,
  post,
  tag,
  workCredit,
  navigation,

  // Page sections
  sctnHeroHeader,
  sctnExperienceList,
  sctnProjectsList,
  sctnRichText,
  sctnTextsList,

  // Objects
  navItem,
  link,
  richtext,
  video,
  iframe,
  localeString,
  localeRichText,
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
  siteSettings,
]

export default schemaTypes 