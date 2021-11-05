import React from 'react'
import Box from '@material-ui/core/Box'
import { ThemeProvider } from '@material-ui/styles'
import NavBar from './NavBar'
import NavItems from './NavItems'
import { darkTheme } from '../../../themes'
import { nav as defaultMenu } from '../../../../menus'

export default {
  title: 'Layout/NavBar',
  component: NavBar,
}

const Template = ({ withDarkTheme, ...args }) => {
  const navComponent = withDarkTheme ? (
    <ThemeProvider theme={darkTheme}>
      <NavBar {...args}>A link</NavBar>
    </ThemeProvider>
  ) : (
    <NavBar {...args} />
  )
  return (
    <>
      {navComponent}
      <Box bgcolor="#b2e060" pt={10} width="100%" height="200vh">
        this is the page content, with a green background so you can see when
        the navbar is transparent and what happens when you scroll down
      </Box>
      <Box bgcolor="9b6a7a" width="100%">
        this text is at the bottom of the page
      </Box>
    </>
  )
}

export const Light = Template.bind({})
Light.args = {
  transparency: true,
  withDarkTheme: false,
}

export const Dark = Template.bind({})
Dark.args = {
  transparency: true,
  withDarkTheme: true,
}

export const OpaqueDark = Template.bind({})
OpaqueDark.args = {
  transparency: false,
  withDarkTheme: true,
}

export const WithLinks = () => {
  // We set up the second link to be active (i.e. it links to the same location as the storybook is rendered at)
  const menuWithActive = defaultMenu
  menuWithActive[1].href = '/iframe.html'

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <NavBar transparency>
          <NavItems />
        </NavBar>
      </ThemeProvider>
      <Box bgcolor="#b2e060" pt={10} width="100%" height="200vh">
        This is the page content. The SECOND item in the navbar should have the
        "active" state.
      </Box>
    </>
  )
}
