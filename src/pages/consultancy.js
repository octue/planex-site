import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import SectionManager from '../components/elements/SectionManager'
import GradientHero from '../components/sections/GradientHero'
import Strategy from '../components/sections/Strategy'
import DigitalTwins from '../components/sections/DigitalTwins'
import DataServices from '../components/sections/DataServices'
import Support from '../components/sections/Support'
import { BasicPage, CallToAction } from '../containers'
import DatoSections from '../containers/sections/DatoSections'

export const query = graphql`
  query ConsultancyPageQuery {
    page: datoCmsConsultancyPage {
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
        ...HexBulletsSection
        ...JoinSection
        ...PeopleSection
        ...PartnersSection
      }
    }
  }
`

export default function Consultancy({ location, data }) {
  const navBarProps = { transparency: data.page.navbarTransparency }
  const footerProps = {
    kind: 'big',
  }

  return (
    <BasicPage
      location={location}
      navBarProps={navBarProps}
      footerProps={footerProps}
    >
      <HelmetDatoCms seo={data.page.seoMetaTags} />
      <CallToAction />
      <GradientHero {...data.page.hero[0]} />
      <SectionManager>
        {/* <ConsultancyHexagonSection /> */}
        <Strategy />
        <DigitalTwins />
        <DataServices />
        <Support />
        <DatoSections sections={data.page.sections} />
      </SectionManager>
    </BasicPage>
  )
}
