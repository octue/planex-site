import React from 'react'
import { ThemeProvider } from '@material-ui/styles'

import BasicPage from '../components/layout/BasicPage'
import { Hero } from '../components/sections'
import TimeToBuild from '../components/shuffle/TimeToBuild/TimeToBuild'
import BuildWithTwined from '../components/shuffle/BuildWithTwined/BuildWithTwined'
import TakeWorkFurther from '../components/shuffle/TakeWorkFurther/TakeWorkFurther'
import HereToHelp from '../components/shuffle/HereToHelp/HereToHelp'
import TheTeam from '../components/shuffle/TheTeam/TheTeam'
import OurMission from '../components/shuffle/OurMission/OurMission'
import { darkTheme } from '../themes'
import { CallToAction } from '../containers'

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
