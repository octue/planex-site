import React, { useState, useCallback, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { axios } from '../../../axios'

/**
 * For dynamic queries we use the dato API directly instead of via gatsby-source-datocms so we don't have the
 * gatsby-image integration.
 *
 * To enable ArticleCards to accept gatsbyImageData which we use throughout the project, we convert formats here...
 */
const datoToGatsbyImageData = ({ responsiveImage }) => {
  const {
    alt,
    title,
    src,
    srcSet,
    sizes,
    base64,
    width,
    height,
  } = responsiveImage

  return {
    alt,
    title,
    gatsbyImageData: {
      images: {
        sources: [],
        fallback: {
          src,
          srcSet,
          sizes,
        },
      },
      layout: 'constrained',
      placeholder: {
        fallback: base64,
      },
      width,
      height,
    },
  }
}

/**
 * A Pagination Handler service that renders a react component displaying paginated data fetched from a graphQL API.
 *
 * This handler could be implemented many ways... e.g. as a HOC or even rewritten as a hook 'usePaginationHandler'.
 *
 * I've chosen to do it as a component for... no real reason, other than "having a parent/container component
 * taking care of data fetching/updating" is a pretty common pattern in react.
 *
 */
const PaginatedArticlesHandler = ({ Component, initialItemsPerPage }) => {
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(undefined)

  const getArticles = useCallback(
    async (limit, skip) => {
      axios
        .post(
          'https://graphql.datocms.com/',
          {
            query: `
              query ArticlesQuery($limit: IntType!, $skip: IntType!) {
                allArticles(orderBy: originalDate_DESC, skip: $skip, first: $limit, locale: en) {
                  precis
                  originalDate
                  title
                  url
                  image {
                    responsiveImage(imgixParams: {auto: format, fit: crop, h: "220", w: "380"}) {
                      alt
                      width
                      webpSrcSet
                      title
                      srcSet
                      src
                      sizes
                      height
                      bgColor
                      base64
                      aspectRatio
                    }
                  }
                }
                _allArticlesMeta(locale: en) {
                  count
                }
              }
            `,
            variables: {
              limit: limit,
              skip: skip,
            },
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: `Bearer bc9b3c9d1d138c8a0e60bf6e0bf77c`, // YOU MUST SET A PUBLIC ONLY SCOPE ON THIS TOKEN
            },
          }
        )
        .catch((error) => {
          setLoading(false)
          setData(undefined)
          console.error('Error in fetching articles data', error)
        })
        .then((response) => {
          setLoading(false)
          setData(response?.data?.data)
        })
    },
    [setLoading, setData]
  )
  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value)
    },
    [setPage]
  )

  // Invoke the async function to get articles. Execute on mount and whenever the page or items per page changes
  useEffect(() => {
    setLoading(true)
    getArticles(itemsPerPage, (page - 1) * itemsPerPage)
  }, [page, itemsPerPage, setLoading, setData, getArticles])

  // Extract variables from the returned data
  const articlesCount = data && data._allArticlesMeta.count
  const pageCount =
    data && Math.ceil(data._allArticlesMeta.count / itemsPerPage)

  // Convert articles to have usable images
  const articles = useMemo(
    () =>
      data &&
      data.allArticles.map((article) => {
        const { image, ...rest } = article
        return {
          ...rest,
          image: datoToGatsbyImageData(image),
        }
      }),
    [data]
  )

  return (
    <Component
      articles={articles}
      articlesCount={articlesCount}
      itemsPerPage={itemsPerPage}
      loading={loading}
      onItemsPerPageChange={setItemsPerPage}
      onPageChange={handlePageChange}
      page={page}
      pageCount={pageCount}
    />
  )
}

PaginatedArticlesHandler.defaultProps = {
  initialItemsPerPage: 6,
}

PaginatedArticlesHandler.propTypes = {
  initialItemsPerPage: PropTypes.number,
}

export default PaginatedArticlesHandler
