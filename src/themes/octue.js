import { baseThemeOptions, branding } from './_base'

import { createMuiTheme } from '@material-ui/core/styles'
import merge from 'deepmerge'

/* Light Theme
 *
 */
export const lightThemeOptions = {
  ...baseThemeOptions,
  shape: {
    ...baseThemeOptions.shape,
    borderRadius: 8,
  },
  palette: {
    primary: {
      ...branding.palette.octueBlue,
    },
    secondary: {
      ...branding.palette.octueRed,
    },
    type: 'light',
  },
}
export const lightTheme = merge(createMuiTheme(lightThemeOptions), branding)

/* Dark Theme
 *
 */
const darkThemeOptions = {
  ...lightThemeOptions,
  palette: {
    ...lightThemeOptions.palette,
    type: 'dark',
    background: {
      paper: '#3f4448',
      default: '#30363a',
    },
  },
}
export const darkTheme = merge(createMuiTheme(darkThemeOptions), branding)
