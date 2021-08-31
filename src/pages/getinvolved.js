import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'

import { BasicPage, CallToAction } from '../containers'

import GradientHero from '../components/sections/GradientHero'
import SponsorUs from '../components/sections/SponsorUs'
import Volunteer from '../components/sections/Volunteer'
import TellUsWhatYouNeed from '../components/sections/TellUsWhatYouNeed'
import AwesomeScientist from '../components/sections/AwesomeScientist'
import LastButNotLeast from '../components/sections/LastButNotLeast'

export const query = graphql`
  query GetInvolvedPageQuery {
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
        }
        heading
        subheading
      }
    }
  }
`

const GetInvolved = ({ location, data }) => {
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
      <SponsorUs />
      <Volunteer />
      <TellUsWhatYouNeed />
      <AwesomeScientist />
      <LastButNotLeast />
    </BasicPage>
  )
}

export default GetInvolved
