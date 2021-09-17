import React from 'react'
import PropTypes from 'prop-types'
import getDatoComponent from './getDatoComponent'
import { graphql } from 'gatsby'

export const query = graphql`
  fragment HexGridLink on DatoCmsHexGridLink {
    id
    __typename
    hexGrid {
      entryName
      horizontal
      variant
      grid {
        addLink
        image {
          gatsbyImageData(
            imgixParams: { auto: "format", fit: "crop", w: "150", h: "150" }
          )
          url
          title
          alt
        }
        openInNewTab
        optimiseInternalLink
        url
        xCoordinate
        yCoordinate
      }
    }
  }

  fragment CtaContact on DatoCmsCtaContact {
    id
    __typename
    text
    originalId
  }

  fragment CtaSubscribe on DatoCmsCtaSubscribe {
    id
    __typename
    text
    originalId
  }

  fragment CtaLink on DatoCmsCtaLink {
    id
    __typename
    text
    url
    optimiseInternalLink
    openInNewTab
    originalId
  }

  fragment FullWidthImage on DatoCmsFullWidthImage {
    id
    __typename
    originalId
    subheading
    heading
  }

  fragment Typography on DatoCmsTypography {
    id
    balance
    component
    gutterBottom
    variant
    color
    __typename
    content {
      value
    }
  }
`

const DatoModularField = ({ blocks }) => {
  const datoComponents = blocks.map((block) => {
    const { id, ...rest } = block
    const Component = getDatoComponent(id)
    console.log(`Dato Component ${id} rendering with props`, rest)
    return <Component key={id} {...rest} />
  })

  return <>{datoComponents}</>
}

DatoModularField.defaultProps = {
  blocks: [],
}

DatoModularField.propTypes = {
  blocks: PropTypes.array,
}

export default DatoModularField
