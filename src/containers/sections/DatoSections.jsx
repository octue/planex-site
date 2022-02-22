import React from 'react'
import PropTypes from 'prop-types'
import getDatoSectionComponent from './getDatoSectionComponent'
import { graphql } from 'gatsby'

export const query = graphql`
  fragment ArticlesPreviewSection on DatoCmsArticlesPreviewSection {
    id
    articles {
      image {
        alt
        url
        gatsbyImageData(
          imgixParams: { auto: "format", fit: "crop", w: "380", h: "220" }
        )
        title
      }
      originalDate
      precis
      title
      url
    }
    heading
  }
  fragment HexBulletsSection on DatoCmsHexBulletsSection {
    id
    bullets {
      description
      heading
      variant
      image {
        alt
        url
        gatsbyImageData(
          imgixParams: { auto: "format", fit: "crop", w: "150", h: "150" }
        )
        title
      }
    }
    heading
  }

  fragment JoinSection on DatoCmsJoinSection {
    id
    description
    heading
    link {
      url
      openInNewTab
      optimiseInternalLink
    }
    githubCollaborators {
      handle
      avatar {
        gatsbyImageData(
          imgixParams: { auto: "format", fit: "crop", w: "150", h: "150" }
        )
        alt
        title
      }
    }
  }

  fragment PartnersSection on DatoCmsPartnersSection {
    id
    heading
    partnerLogos {
      alt
      gatsbyImageData(
        imgixParams: {
          auto: "compress,format"
          fit: "crop"
          w: "150"
          h: "150"
        }
      )
      customData
      url
    }
  }

  fragment PeopleSection on DatoCmsPeopleSection {
    id
    people {
      bio
      github
      avatar {
        gatsbyImageData(
          imgixParams: { auto: "format", fit: "crop", w: "150", h: "150" }
        )
        alt
        title
      }
      name
      role
      linkedin
      twitter
    }
    heading
    subheading
  }
  fragment CustomSection on DatoCmsCustomSection {
    id
    componentName
  }
  fragment TwoColumnSection on DatoCmsTwoColumnSection {
    heading
    id
    column1 {
      ...Typography
      ...HexGridLink
      ...FullWidthImage
      ...CtaLink
      ...CtaSubscribe
      ...CtaContact
    }
    column2 {
      ...Typography
      ...HexGridLink
      ...FullWidthImage
      ...CtaLink
      ...CtaContact
      ...CtaSubscribe
    }
  }
`

const DatoSections = ({ sections }) => {
  const sectionComponents = sections.map((section) => {
    const { id, ...rest } = section
    const Component = getDatoSectionComponent(id)
    // Turn on for a quick debug of all sections
    // console.log(`Dato Section ${id} rendering with props`, rest)
    return <Component key={id} {...rest} />
  })

  return <>{sectionComponents}</>
}

DatoSections.defaultProps = {
  sections: [],
}

DatoSections.propTypes = {
  sections: PropTypes.array,
}

export default DatoSections
