/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ pageMeta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteName
            lang
            locale
            title
            description
            image
            author
            authorTwitterHandle
            siteTwitterHandle
          }
        }
      }
    `
  )
  const siteMeta = site.siteMetadata

  const author = pageMeta?.author || siteMeta.author
  const authorTwitterHandle =
    pageMeta?.authorTwitterHandle ||
    siteMeta.authorTwitterHandle ||
    siteMeta.siteTwitterHandle
  const description = pageMeta?.description || siteMeta.description
  const lang = pageMeta?.lang || siteMeta.lang
  const locale = pageMeta?.locale || siteMeta.locale
  const image = pageMeta?.image || siteMeta.image
  const siteName = siteMeta.siteName
  const siteTwitterHandle = siteMeta.siteTwitterHandle
  const title = pageMeta?.title || siteMeta.title

  const needsTitleTemplate = title !== siteMeta.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={needsTitleTemplate ? `%s | ${siteMeta.title}` : null}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          name: 'author',
          content: author,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:image',
          content: image,
        },
        {
          property: 'og:locale',
          content: locale,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:site_name',
          content: siteName,
        },
        {
          name: 'twitter:site',
          content: siteTwitterHandle,
        },
        {
          name: 'twitter:image',
          content: image,
        },
        {
          name: 'twitter:creator',
          content: authorTwitterHandle,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  pageMeta: {},
}

SEO.propTypes = {
  pageMeta: PropTypes.shape({
    author: PropTypes.string,
    authorTwitterHandle: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.url,
    lang: PropTypes.string,
    locale: PropTypes.string,
    title: PropTypes.string,
  }),
}

export default SEO
