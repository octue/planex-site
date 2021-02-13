import merge from 'deepmerge'
import { createMuiTheme } from '@material-ui/core/styles'
import { baseThemeOptions, branding } from './_base'


/* Light Theme
 *
 */
export const lightThemeOptions = {
  ...baseThemeOptions,
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
  },
}
export const darkTheme = merge(createMuiTheme(darkThemeOptions), branding)
