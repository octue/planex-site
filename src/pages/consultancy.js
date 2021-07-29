import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { BasicPage, CallToAction } from '../containers'
import { darkTheme } from '../themes'
import HeroSection from '../components/sectionelements/herosection/HeroSection'
import { graphql, useStaticQuery } from 'gatsby'
import StrategyHexagonSection from '../components/sectionelements/sectionwithhexagon/consultancyHexagonsections/StrategyHexagonSection'
import { CssBaseline } from '@material-ui/core'
import DigitalHexagonSection from '../components/sectionelements/sectionwithhexagon/consultancyHexagonsections/DigitalHexagonSection'
import DataServicesHexagonSection from '../components/sectionelements/sectionwithhexagon/consultancyHexagonsections/DataServicesHexagonSection'
import SupportHexagonSection from '../components/sectionelements/sectionwithhexagon/consultancyHexagonsections/SupportHexagonSection'

export default function Consultancy({ location }) {
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
        <CssBaseline />
        {/* <Hero /> */}
        <HeroSection
          heading={'Solve data dilemmas.'}
          description={'Inject extra strategic and tactical expertise.'}
          Image={imageData}
        />
        {/* <ConsultancyHexagonSection /> */}
      </ThemeProvider>
      <StrategyHexagonSection />
      <DigitalHexagonSection />
      <DataServicesHexagonSection />
      <SupportHexagonSection />
    </BasicPage>
  )
}
