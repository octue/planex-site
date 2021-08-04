import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { BasicPage, CallToAction } from '../containers'
import HeroSection from '../components/sectionelements/herosection/HeroSection'
import { graphql } from 'gatsby'
import JoinSection from '../components/sectionelements/joinsection/JoinSection'
import GetInvolvedHexagonSection from '../components/sectionelements/sectionwithhexagon/GetInvolvedHexagonSection'
import VolunteerSection from '../components/sectionelements/getinvolvedsections/VolunteerSection'
import TellUsSection from '../components/sectionelements/getinvolvedsections/TellUsSection'
import AwesomeScientistSection from '../components/sectionelements/getinvolvedsections/AwesomeScientistSection'
import LastLeastSection from '../components/sectionelements/getinvolvedsections/LastLeastSection'

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
      <HeroSection
        heading={data.page.hero[0].heading}
        description={data.page.hero[0].subheading}
        imageData={data.page.hero[0].image.gatsbyImageData}
      />
      <GetInvolvedHexagonSection />
      <VolunteerSection />
      <TellUsSection />
      <AwesomeScientistSection />
      <LastLeastSection />
      <JoinSection
        description={
          'Octue is a non-profit organisation working to free scientists from their daily data drudgery. Here are the latest supporters contributing to our codebase.'
        }
      />
    </BasicPage>
  )
}

export default GetInvolved
