import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { BasicPage, CallToAction } from '../containers'
import { darkTheme } from '../themes'
import MianPageHexagonSection from '../components/sectionelements/sectionwithhexagon/MianPageHexagonSection'
import SvgHexagonSection from '../components/sectionelements/singlehexagonsection/SvgHexagonSection'
import HeroSection from '../components/sectionelements/herosection/HeroSection'
import { graphql, useStaticQuery } from 'gatsby'
import HelpSection from '../components/sectionelements/helpsection/HelpSection'
import JoinSection from '../components/sectionelements/joinsection/JoinSection'
import PartnerSection from '../components/sectionelements/partnersection/PartnerSection'
import SEO from '../components/core/SEO'

export default function Index({ location }) {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "backgrounds/img.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid
  const navBarProps = {
    transparency: true,
  }
  const footerProps = {
    kind: 'big',
  }

  return (
    <BasicPage
      location={location}
      navBarProps={navBarProps}
      footerProps={footerProps}
    >
      <SEO pageMeta={{ title: 'Home' }} />
      <CallToAction />
      <ThemeProvider theme={darkTheme}>
        {/* <Hero /> */}
        <HeroSection
          heading={'Science to build on.'}
          description={'Faster data groundwork. More time for science.'}
          Image={imageData}
        />
      </ThemeProvider>
      <MianPageHexagonSection />
      <SvgHexagonSection />
      <HelpSection />
      <PartnerSection />
      <JoinSection
        description={
          'So why should someone modelling climate or energy systems need to be an expert coder? Yet scientists waste 95% of their day [Source:McKinsey] being general programmers, API architects and DevOps engineers. Our solution: a framework of open-source tools to create, connect, exchange and reuse analysis building blocks.'
        }
      />
    </BasicPage>
  )
}
