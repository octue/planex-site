import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { BasicPage, CallToAction } from '../containers'
import { graphql } from 'gatsby'
import ArticlesBrowser from '../components/sections/ArticlesBrowser'
import GradientHero from '../components/sections/GradientHero'

import SectionManager from '../components/elements/SectionManager'
import DatoSections from '../containers/sections/DatoSections'

export const query = graphql`
  query ArticlesPageQuery {
    page: datoCmsArticlesPage {
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
        ...HexBulletsSection
        ...JoinSection
        ...PeopleSection
        ...PartnersSection
      }
    }
  }
`

const Articles = ({ location, data }) => {
  const navBarProps = { transparency: data.page.navbarTransparency }
  return (
    <BasicPage location={location} navBarProps={navBarProps}>
      <HelmetDatoCms seo={data.page.seoMetaTags} />
      <CallToAction />
      <GradientHero {...data.page.hero[0]} />
      <ArticlesBrowser />
      <SectionManager>
        <DatoSections sections={data.page.sections} />
      </SectionManager>
    </BasicPage>
  )
}

export default Articles
