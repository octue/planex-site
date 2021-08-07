import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'

import { BasicPage, CallToAction } from '../containers'

import GradientHero from '../components/sections/GradientHero'
import SolutionsAcrossScience from '../components/sections/SolutionsAcrossScience'
import DoMoreWithYourData from '../components/sections/DoMoreWithYourData'
import Team from '../components/sections/Team'
import JoinTheMovement from '../components/sections/JoinTheMovement'

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
        }
        heading
        subheading
      }
    }
  }
`

const About = ({ location, data }) => {
  const navBarProps = { transparency: data.page.navbarTransparency }
  return (
    <BasicPage location={location} navBarProps={navBarProps}>
      <HelmetDatoCms seo={data.page.seoMetaTags} />
      <CallToAction />
      <GradientHero
        heading={data.page.hero[0].heading}
        description={data.page.hero[0].subheading}
        imageData={data.page.hero[0].image.gatsbyImageData}
      />
      <SolutionsAcrossScience />
      <DoMoreWithYourData />
      <Team />
      <JoinTheMovement
        description={
          'Octue is a non-profit organisation working to free scientists from their daily data drudgery. Here are the latest supporters contributing to our codebase.'
        }
      />
    </BasicPage>
  )
}

export default About
