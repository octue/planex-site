import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'

import { BasicPage, CallToAction } from '../containers'
import DatoSections from '../containers/sections/DatoSections'

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
        ...JoinSection
        ...PeopleSection
        ...PartnersSection
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
        image={data.page.hero[0].image}
      />
      <SolutionsAcrossScience />
      <DoMoreWithYourData />
      <DatoSections sections={data.page.sections} />
    </BasicPage>
  )
}

export default About
