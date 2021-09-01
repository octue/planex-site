import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { BasicPage, CallToAction } from '../containers'
import DatoSections from '../containers/sections/DatoSections'

import SectionManager from '../components/elements/SectionManager'
import GradientHero from '../components/sections/GradientHero/GradientHero'
import BeMoreConstructive from '../components/sections/BeMoreConstructive'
import WhatWillYouBuild from '../components/sections/WhatWillYouBuild'
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

export default function Index({ location, data }) {
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
      <SectionManager>
        <BeMoreConstructive />
        <WhatWillYouBuild />
        <HowWeHelp />
        <Partners />
        <DatoSections sections={data.page.sections} />
      </SectionManager>
    </BasicPage>
  )
}
