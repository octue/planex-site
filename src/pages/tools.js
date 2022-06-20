import { BasicPage, CallToAction } from '../containers'

// import ArticlesPreview from '../components/sections/ArticlesPreview'
import DatoSections from '../containers/sections/DatoSections'
import GradientHero from '../components/sections/GradientHero'
import { HelmetDatoCms } from 'gatsby-source-datocms'
// import HowToBegin from '../components/sections/HowToBegin'
import React from 'react'
import SectionManager from '../components/elements/SectionManager'
import ToolShowcase from '../components/sections/ToolShowcase'
// import ValidateCreateCommunicate from '../components/sections/ValidateCreateCommunicate'
import { graphql } from 'gatsby'

export const query = graphql`
  query ToolsPageQuery {
    page: datoCmsToolsPage {
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

const Tools = ({ location, data }) => {
  const navBarProps = { transparency: data.page.navbarTransparency }
  return (
    <BasicPage location={location} navBarProps={navBarProps}>
      <HelmetDatoCms seo={data.page.seoMetaTags} />
      <CallToAction />
      <GradientHero {...data.page.hero[0]} />
      <SectionManager>
        <ToolShowcase />
        {/* <ValidateCreateCommunicate />
        <HowToBegin />
        <ArticlesPreview /> */}
        <DatoSections sections={data.page.sections} />
      </SectionManager>
    </BasicPage>
  )
}

export default Tools
