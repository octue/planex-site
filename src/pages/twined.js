import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'

import { BasicPage, CallToAction } from '../containers'
import DatoSections from '../containers/sections/DatoSections'

import SectionManager from '../components/elements/SectionManager'
import GradientHero from '../components/sections/GradientHero'
import ValidateCreateCommunicate from '../components/sections/ValidateCreateCommunicate'
import HowToBegin from '../components/sections/HowToBegin'
import ArticlesPreview from '../components/sections/ArticlesPreview'

export const query = graphql`
  query TwinedPageQuery {
    page: datoCmsTwinedPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      navbarTransparency
      hero {
        whatsThis {
          value
        }
        image {
          gatsbyImageData
          alt
          title
        }
        heading
        subheading
        fullHeight
        gradient
      }
      sections {
        ...ArticlesPreviewSection
        ...HexBulletsSection
        ...JoinSection
        ...PeopleSection
        ...PartnersSection
      }
    }
  }
`

const Twined = ({ location, data }) => {
  const navBarProps = { transparency: data.page.navbarTransparency }
  return (
    <BasicPage location={location} navBarProps={navBarProps}>
      <HelmetDatoCms seo={data.page.seoMetaTags} />
      <CallToAction />
      <GradientHero {...data.page.hero[0]} />
      <SectionManager>
        <ValidateCreateCommunicate />
        <HowToBegin />
        <ArticlesPreview />
        <DatoSections sections={data.page.sections} />
      </SectionManager>
    </BasicPage>
  )
}

export default Twined
