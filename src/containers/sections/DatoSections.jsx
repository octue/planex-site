import React from 'react'
import PropTypes from 'prop-types'
import getDatoSectionComponent from './getDatoSectionComponent'

export const query = graphql`
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
        imgixParams: { auto: "format", fit: "crop", w: "150", h: "150" }
      )
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
`

const DatoSections = ({ sections }) => {
  const sectionComponents = sections.map((section) => {
    const { id, ...rest } = section
    const Component = getDatoSectionComponent(id)
    console.log(`Dato Section ${id} rendering with props`, rest)
    return <Component {...rest} />
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
