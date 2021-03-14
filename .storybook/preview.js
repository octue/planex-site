import React from 'react'
import { action } from "@storybook/addon-actions"
import themes from './storybookTheme'
import { withMuiTheme } from '@harelpls/storybook-addon-materialui'
import withLocationProvider from './withLocationProvider'
import { lightTheme, darkTheme } from '../src/themes'

import '@storybook/addon-console'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  docs: {
    theme: themes.dark,
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [],
      locales: '',
    },
  },
}

const whyDidYouRender = require('@welldone-software/why-did-you-render')
whyDidYouRender(React, {
  trackAllPureComponents: true,
})


// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

// This global variable is prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/"
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

export const decorators = [
  withLocationProvider,
  withMuiTheme({
    'Light Theme': lightTheme,
    'Dark Theme': darkTheme,
  })
]
