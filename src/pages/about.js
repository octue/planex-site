import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'

import { BasicPage, CallToAction } from '../containers'
import getDatoSectionComponent from '../containers/sections/getDatoSectionComponent'

import GradientHero from '../components/sections/GradientHero'
import SolutionsAcrossScience from '../components/sections/SolutionsAcrossScience'
import DoMoreWithYourData from '../components/sections/DoMoreWithYourData'

export const query = graphql`
  query AboutPageQuery {
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
          alt
          title
        }
        heading
        subheading
      }
      sections {
        ... on DatoCmsJoinSection {
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
        ... on DatoCmsPeopleSection {
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
      }
    }
  }
`

const About = ({ location, data }) => {
  const navBarProps = { transparency: data.page.navbarTransparency }

  const sections = data.page.sections.map((section) => {
    const { id, ...rest } = section
    console.log('SECTION DATA', JSON.stringify(rest))
    const Component = getDatoSectionComponent(id)
    return <Component {...rest} />
  })

  return (
    <BasicPage location={location} navBarProps={navBarProps}>
      <HelmetDatoCms seo={data.page.seoMetaTags} />
      <CallToAction />
      <GradientHero
        heading={data.page.hero[0].heading}
        description={data.page.hero[0].subheading}
        image={data.page.hero[0].image}
      />
      <SolutionsAcrossScience />
      <DoMoreWithYourData />
      {sections}
    </BasicPage>
  )
}

export default About
