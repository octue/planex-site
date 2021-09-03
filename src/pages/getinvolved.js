import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'

import { BasicPage, CallToAction, DatoSections } from '../containers'

import SectionManager from '../components/elements/SectionManager'
import GradientHero from '../components/sections/GradientHero'
import SponsorUs from '../components/sections/SponsorUs'
import Volunteer from '../components/sections/Volunteer'
import TellUsWhatYouNeed from '../components/sections/TellUsWhatYouNeed'
import AwesomeScientist from '../components/sections/AwesomeScientist'
import LastButNotLeast from '../components/sections/LastButNotLeast'

export const query = graphql`
  query GetInvolvedPageQuery {
    page: datoCmsGetInvolvedPage {
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
        fullHeight
        gradient
      }
      sections {
        ...ArticlesPreviewSection
        ...HexBulletsSection
        ...JoinSection
        ...PeopleSection
        ...PartnersSection
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
      <GradientHero {...data.page.hero[0]} />
      <SectionManager>
        <SponsorUs />
        <Volunteer />
        <TellUsWhatYouNeed />
        <AwesomeScientist />
        <LastButNotLeast />
        <DatoSections sections={data.page.sections} />
      </SectionManager>
    </BasicPage>
  )
}

export default GetInvolved
