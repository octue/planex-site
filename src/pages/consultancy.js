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

export default function Index({ location }) {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "backgrounds/consultancy.png" }) {
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
        <HeroSection
          heading={'Solve data dilemmas.'}
          description={'Inject extra strategic and tactical expertise.'}
          Image={imageData}
        />
      </ThemeProvider>
    </BasicPage>
  )
}
