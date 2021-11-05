import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'

import { BasicPage, CallToAction, DatoSections } from '../containers'

import SectionManager from '../components/elements/SectionManager'
import GradientHero from '../components/sections/GradientHero'

export const query = graphql`
  query GetInvolvedPageQuery {
    page: datoCmsGetInvolvedPage {
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
        ...CustomSection
        ...TwoColumnSection
      }
    }
  }
`

const GetInvolved = ({ location, data }) => {
  const navBarProps = { transparency: data.page.navbarTransparency }
  return (
    <BasicPage location={location} navBarProps={navBarProps}>
      <HelmetDatoCms seo={data.page.seoMetaTags} />
      <CallToAction />
      <GradientHero {...data.page.hero[0]} />
      <SectionManager>
        <DatoSections sections={data.page.sections} />
      </SectionManager>
    </BasicPage>
  )
}

export default GetInvolved
