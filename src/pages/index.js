import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { Hero } from '../components/sections'
import TimeToBuild from '../components/shuffle/TimeToBuild/TimeToBuild'
import BuildWithTwined from '../components/shuffle/BuildWithTwined/BuildWithTwined'
import TakeWorkFurther from '../components/shuffle/TakeWorkFurther/TakeWorkFurther'
import HereToHelp from '../components/shuffle/HereToHelp/HereToHelp'
import TheTeam from '../components/shuffle/TheTeam/TheTeam'
import OurMission from '../components/shuffle/OurMission/OurMission'
import { BasicPage, CallToAction } from '../containers'
import { darkTheme } from '../themes'
import HexagonSection from '../components/sectionelements/sectionwithhexagon/HexagonSection'
import SvgHexagonSection from '../components/sectionelements/singlehexagonsection/SvgHexagonSection'
import HeroSection from '../components/sectionelements/herosection/HeroSection'

import { graphql, useStaticQuery } from 'gatsby'
import HelpSection from '../components/sectionelements/helpsection/HelpSection'
import JoinSection from '../components/sectionelements/joinsection/JoinSection'
import PartnerSection from '../components/sectionelements/partnersection/PartnerSection'

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
      <CallToAction />
      <ThemeProvider theme={darkTheme}>
        {/* <Hero /> */}
        <HeroSection Image={imageData} />
      </ThemeProvider>
      <HexagonSection />
      <SvgHexagonSection />
      <HelpSection />
      <PartnerSection />
      <JoinSection />
      {/* <TimeToBuild />
      <BuildWithTwined />
      <TakeWorkFurther />
      <HereToHelp />
      <TheTeam />
      <OurMission /> */}
    </BasicPage>
  )
}
