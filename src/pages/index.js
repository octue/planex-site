import React from 'react'

import Copyright from '../components/elements/Copyright'
import { NavBar, NavItems } from '../components/layout/NavBar'
import Main from '../components/layout/Main'

import { ThemeProvider } from '@material-ui/styles'
import { lightTheme, darkTheme } from '../themes'
import Hero from '../components/shuffle/Hero/Hero'
import TimeToBuild from '../components/shuffle/TimeToBuild/TimeToBuild'
import BuildWithTwined from '../components/shuffle/BuildWithTwined/BuildWithTwined'
import TakeWorkFurther from '../components/shuffle/TakeWorkFurther/TakeWorkFurther'
import HereToHelp from '../components/shuffle/HereToHelp/HereToHelp'
import TheTeam from '../components/shuffle/TheTeam/TheTeam'
import OurMission from '../components/shuffle/OurMission/OurMission'

export default function Index() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <NavBar transparency>
          <NavItems />
        </NavBar>
      </ThemeProvider>
      <ThemeProvider theme={lightTheme}>
        <Main>
          <ThemeProvider theme={darkTheme}>
            <Hero />
          </ThemeProvider>
          <TimeToBuild />
          <BuildWithTwined />
          <TakeWorkFurther />
          <HereToHelp />
          <TheTeam />
          <OurMission />
        </Main>
        <Copyright color="primary" fixed />
      </ThemeProvider>
    </>
  )
}
