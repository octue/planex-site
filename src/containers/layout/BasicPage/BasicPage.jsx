import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import { ThemeProvider } from '@material-ui/styles'
import { NavBar, NavItems, Main, Footer } from '../../../components/layout'
import { lightTheme, darkTheme } from '../../../themes'
import Toastable from '../Toastable'
import CookieBar from '../../../components/elements/CookieBar'

/**
 * A basic page layout.
 *
 * Note that additional props are passed to the first Box component in main, allowing you to set margins, padding,
 * backgroundColor etc very straightforwardly.
 *
 * Yes, I know spread operators are an antipattern. It's an SSR site. Sue me.
 *
 */
function BasicPage({
  children,
  footerProps,
  location,
  navBarProps,
  offset,
  ...rest
}) {
  return (
    <>
      <CookieBar />
      <Toastable location={location}>
        <ThemeProvider theme={darkTheme}>
          <NavBar {...navBarProps}>
            <NavItems />
          </NavBar>
        </ThemeProvider>
        <ThemeProvider theme={lightTheme}>
          <Main
            offset={offset}
            height="100%"
            display="flex"
            flexDirection="column"
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
      </Toastable>
    </>
  )
}

BasicPage.defaultProps = {
  offset: false,
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
  /**
   * Offsets the content in the Main section downward by the height of the navBar
   */
  offset: PropTypes.bool,
}

export default BasicPage
