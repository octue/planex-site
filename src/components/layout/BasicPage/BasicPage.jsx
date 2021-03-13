import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import { ThemeProvider } from '@material-ui/styles'
import { NavBar, NavItems } from '../NavBar'
import Main from '../Main'
import Footer from '../Footer'
import { lightTheme, darkTheme } from '../../../themes'

/**
 * A basic page layout.
 *
 * Note that additional props are passed to the first Box component in main, allowing you to set margins, padding,
 * backgroundColor etc very straightforwardly.
 *
 * Yes, I know spread operators are an antipattern. It's an SSR site. Sue me.
 *
 */
function BasicPage({ children, footerProps, navBarProps, ...rest }) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <NavBar {...navBarProps}>
          <NavItems />
        </NavBar>
      </ThemeProvider>
      <ThemeProvider theme={lightTheme}>
        <Main
          appBarOffset
          display="flex"
          flexDirection="column"
          minHeight="100vh"
        >
          <Box flexGrow={1} {...rest}>
            {children}
          </Box>
          <Box>
            <ThemeProvider theme={darkTheme}>
              <Footer {...footerProps} />
            </ThemeProvider>
          </Box>
        </Main>
      </ThemeProvider>
    </>
  )
}

BasicPage.propTypes = {
  /**
   * Children should be the actual contents of the page
   */
  children: PropTypes.node,
  /**
   * Props passed down to the footer component
   */
  footerProps: PropTypes.object,
  /**
   * Props passed down to the navbar component
   */
  navBarProps: PropTypes.object,
}

export default BasicPage