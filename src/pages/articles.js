import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { BasicPage, CallToAction } from '../containers'
import { graphql } from 'gatsby'
import ArticlesBrowser from '../components/sections/ArticlesBrowser'

export const query = graphql`
  query ArticlesPageQuery {
    page: datoCmsArticlesPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
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
    </BasicPage>
  )
}

export default Articles
