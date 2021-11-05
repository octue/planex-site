import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import { ThemeProvider } from '@material-ui/styles'
import { NavBar, NavItems, Main, Footer } from '../../../components/layout'
import { darkTheme } from '../../../themes'
import Toastable from '../Toastable'
import CookieBar from '../../../components/elements/CookieBar'
import CallToAction from '../../../components/elements/CallToAction'
import SubscribeForm from '../../forms/SubscribeForm'

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
  const [scrollTopData, setScrollTopData] = useState(0)
  const [open, setOpen] = useState(false)
  const handleOpenSubscribe = useCallback(() => setOpen(true), [setOpen])
  const handleCloseSubscribe = useCallback(() => setOpen(false), [setOpen])

  return (
    <>
      <CookieBar />
      <Toastable location={location}>
        <ThemeProvider theme={darkTheme}>
          <CallToAction
            open={open}
            onClose={handleCloseSubscribe}
            FormComponent={SubscribeForm}
          />
          <NavBar {...navBarProps} scrollTopData={scrollTopData}>
            <NavItems />
          </NavBar>
          <Main
            offset={offset}
            height="100%"
            display="flex"
            flexDirection="column"
            scrollTopData={setScrollTopData}
          >
            <Box flexGrow={1} {...rest}>
              {children}
            </Box>
            <Box>
              <Footer onSubscribe={handleOpenSubscribe} {...footerProps} />
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
