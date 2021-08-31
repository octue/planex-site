import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'

import { BasicPage, CallToAction } from '../containers'
import DatoSections from '../containers/sections/DatoSections'

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
        }
        heading
        subheading
      }
      sections {
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
      <GradientHero
        heading={data.page.hero[0].heading}
        description={data.page.hero[0].subheading}
        image={data.page.hero[0].image}
      />
      <ValidateCreateCommunicate />
      <HowToBegin />
      <ArticlesPreview />
      <DatoSections sections={data.page.sections} />
    </BasicPage>
  )
}

export default Twined
