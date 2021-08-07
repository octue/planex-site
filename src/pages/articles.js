import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { BasicPage, CallToAction } from '../containers'
import { graphql } from 'gatsby'
import JoinTheMovement from '../components/sections/JoinTheMovement'
import ArticlesBrowser from '../components/sections/ArticlesBrowser'

export const query = graphql`
  query ArticlesPageQuery {
    page: datoCmsAboutPage {
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
        }
        heading
        subheading
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
      <ArticlesBrowser />
      <JoinTheMovement
        description={
          'Octue is a non-profit organisation working to free scientists from their daily data drudgery. Here are the latest supporters contributing to our codebase.'
        }
      />
    </BasicPage>
  )
}

export default Articles