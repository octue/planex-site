import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { darkTheme } from './src/themes'
import StaticDataProvider from './gatsby-context'
import { Helmet } from 'react-helmet'

// Wraps every page in a component
export const wrapPageElement = ({ element }) => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      <StaticDataProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          {element}
        </ThemeProvider>
      </StaticDataProvider>
    </>
  )
}
