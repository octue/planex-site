import React from 'react'
import { ThemeProvider } from '@material-ui/styles'

import { Hero } from '../components/sections'
import TimeToBuild from '../components/shuffle/TimeToBuild/TimeToBuild'
import BuildWithTwined from '../components/shuffle/BuildWithTwined/BuildWithTwined'
import TakeWorkFurther from '../components/shuffle/TakeWorkFurther/TakeWorkFurther'
import HereToHelp from '../components/shuffle/HereToHelp/HereToHelp'
import TheTeam from '../components/shuffle/TheTeam/TheTeam'
import OurMission from '../components/shuffle/OurMission/OurMission'
import SEO from '../components/core/SEO'
import { BasicPage, CallToAction } from '../containers'
import { darkTheme } from '../themes'

export default function Index({ location }) {
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
        <Hero />
      </ThemeProvider>
      <TimeToBuild />
      <BuildWithTwined />
      <TakeWorkFurther />
      <HereToHelp />
      <TheTeam />
      <OurMission />
    </BasicPage>
  )
}
