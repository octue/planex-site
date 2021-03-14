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
import { SubscribeForm, CallToAction } from '../containers'

export default function Index() {
  const navBarProps = {
    transparency: true,
  }
  const footerProps = {
    kind: 'big',
  }

  return (
    <BasicPage navBarProps={navBarProps} footerProps={footerProps}>
      <CallToAction FormComponent={SubscribeForm} />
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
