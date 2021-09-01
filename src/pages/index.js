import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { BasicPage, CallToAction } from '../containers'
import DatoSections from '../containers/sections/DatoSections'

import SectionManager from '../components/elements/SectionManager'
import GradientHero from '../components/sections/GradientHero'
import BeMoreConstructive from '../components/sections/BeMoreConstructive'
import HowWeHelp from '../components/sections/HowWeHelp'
import Partners from '../components/sections/Partners'

export const query = graphql`
  query HomePageQuery {
    page: datoCmsHomePage {
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

export default function Index({ location, data }) {
  const navBarProps = { transparency: data.page.navbarTransparency }
  return (
    <BasicPage location={location} navBarProps={navBarProps}>
      <HelmetDatoCms seo={data.page.seoMetaTags} />
      <CallToAction />
      <GradientHero {...data.page.hero[0]} />
      <SectionManager>
        <BeMoreConstructive />
        <HowWeHelp />
        <Partners />
        <DatoSections sections={data.page.sections} />
      </SectionManager>
    </BasicPage>
  )
}
