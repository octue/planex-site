import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { darkTheme } from './src/themes'
import StaticDataProvider from './gatsby-context'

// Wraps every page in a component
export const wrapPageElement = ({ element }) => {
  return (
    <>
      <StaticDataProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          {element}
        </ThemeProvider>
      </StaticDataProvider>
    </>
  )
}
