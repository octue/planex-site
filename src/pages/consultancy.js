import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { graphql, useStaticQuery } from 'gatsby'
import { darkTheme } from '../themes'
import { CssBaseline } from '@material-ui/core'

import { BasicPage, CallToAction } from '../containers'
import GradientHero from '../components/sections/GradientHero'
import Strategy from '../components/sections/Strategy'
import DigitalTwins from '../components/sections/DigitalTwins'
import DataServices from '../components/sections/DataServices'
import Support from '../components/sections/Support'

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
        <GradientHero
          heading={'Solve data dilemmas.'}
          description={'Inject extra strategic and tactical expertise.'}
          Image={imageData}
        />
        {/* <ConsultancyHexagonSection /> */}
      </ThemeProvider>
      <Strategy />
      <DigitalTwins />
      <DataServices />
      <Support />
    </BasicPage>
  )
}
