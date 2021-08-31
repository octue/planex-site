import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { BasicPage, CallToAction } from '../containers'

import GradientHero from '../components/sections/GradientHero/GradientHero'
import BeMoreConstructive from '../components/sections/BeMoreConstructive'
import WhatWillYouBuild from '../components/sections/WhatWillYouBuild'
import HowWeHelp from '../components/sections/HowWeHelp'
import Partners from '../components/sections/Partners'
import JoinTheMovement from '../components/sections/JoinTheMovement'

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
      <BeMoreConstructive />
      <WhatWillYouBuild />
      <HowWeHelp />
      <Partners />
      <JoinTheMovement
        description={
          'So why should someone modelling climate or energy systems need to be an expert coder? Yet scientists waste 95% of their day [Source:McKinsey] being general programmers, API architects and DevOps engineers. Our solution: a framework of open-source tools to create, connect, exchange and reuse analysis building blocks.'
        }
      />
    </BasicPage>
  )
}
