import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { BasicPage, CallToAction } from '../containers'
import { graphql } from 'gatsby'
import GradientHero from '../components/sections/GradientHero'

import SectionManager from '../components/elements/SectionManager'
import DatoSections from '../containers/sections/DatoSections'
import ArticlesBrowser from '../components/sections/ArticlesBrowser'
import PaginatedArticlesHandler from '../containers/pagination/PaginatedArticlesHandler'

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

const Articles = ({ location, data }) => {
  const navBarProps = { transparency: data.page.navbarTransparency }
  return (
    <BasicPage location={location} navBarProps={navBarProps}>
      <HelmetDatoCms seo={data.page.seoMetaTags} />
      <CallToAction />
      <GradientHero {...data.page.hero[0]} />
      <PaginatedArticlesHandler
        Component={ArticlesBrowser}
        initialItemsPerPage={6}
      />
      <SectionManager>
        <DatoSections sections={data.page.sections} />
      </SectionManager>
    </BasicPage>
  )
}

export default Articles
