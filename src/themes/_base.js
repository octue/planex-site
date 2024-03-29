/* eslint-disable import/no-dynamic-require */

import darkTextLogo from '../assets/images/logos/octue/text-transparent-white.svg'
import lightTextLogo from '../assets/images/logos/octue/text-transparent-coloured.svg'
import darkSquareLogo from '../assets/images/logos/octue/square-transparent-white.svg'
import lightSquareLogo from '../assets/images/logos/octue/square-transparent-coloured.svg'

// Preloads our font CSS at build-time
import '@fontsource/open-sans/400.css'
import '@fontsource/work-sans/300.css'
import '@fontsource/work-sans/400.css'
import '@fontsource/work-sans/500.css'
import '@fontsource/work-sans/500-italic.css'

// This is just so we have breakpoints. Don't use this theme object.
import { createMuiTheme } from '@material-ui/core'
const { breakpoints } = createMuiTheme()

/** Extra Context (Branding)
 *
 * These are named colours and logos, accessible from everywhere,
 * irrespective of whether the whitelabeled theme is in context or not.
 *
 * From main colours, light and dark variants came from https://material.io/resources/color/
 */
const branding = {
  palette: {
    // 1/3 of the distance from MUI Grey to MUI Blue-Grey palette
    grey: {
      50: '#f7f8fa',
      100: '#e8ebee',
      200: '#d9dde0',
      300: '#c5cad0',
      400: '#a6acb3',
      500: '#8c9398',
      600: '#6c7479',
      700: '#595f63',
      800: '#3f4448',
      900: '#242729',
      A100: '#e8ebee',
      A200: '#d9dde0',
      A400: '#a6acb3',
      A700: '#595f63',
    },
    success: {
      // Because MUI has error, warning, info but misses success
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
      contrastText: '#ffffff',
    },
    octueGrey: {
      light: '#79797b',
      main: '#4d4d4f',
      dark: '#252527',
      contrastText: '#ffffff',
    },
    octueYellow: {
      light: '#f6c043',
      main: '#bf9000',
      dark: '#8a6300',
      contrastText: '#ffffff',
    },
    octueRed: {
      light: '#ec5958',
      main: '#b4232f',
      dark: '#7d0008',
      contrastText: '#ffffff',
    },
    octueBlue: {
      light: '#73c9ff',
      main: '#3498db',
      dark: '#006aa9',
      contrastText: '#ffffff',
    },
    octueGreen: {
      light: '#5acab8',
      main: '#1a9988',
      dark: '#006a5b',
      contrastText: '#ffffff',
    },
    octueGradientRedBlue: 'linear-gradient(90deg, #b4232f, #3498db)',
    octueGradientBlueRed: 'linear-gradient(90deg, #3498db, #b4232f)',
  },
  logos: {
    text: {
      dark: darkTextLogo,
      light: lightTextLogo,
    },
    square: {
      dark: darkSquareLogo,
      light: lightSquareLogo,
    },
  },
}

/* MATERIAL-UI THEME
 *
 * MUI doesn't allow arbitrary additions to its theme object. That's a disadvantage when you have one parameter that
 * it'd just be convenient to have as part of your theme context and access on the theme object...
 * For example, logos and additional brand colours.
 *
 * Workaround: rather than build a theme directly, we build base theme options, create the theme object,
 * then deep-merge our additional parameters into it. We can then pick up these parameters from context
 * in our components.
 *
 */
const baseThemeOptions = {
  typography: {
    // Used for big titles e.g. in Hero sections
    h1: {
      fontFamily: "'Work Sans', sans-serif",
      fontStyle: 'normal',
      fontSize: '5rem', // Converted from '80px',
      fontWeight: 400,
      lineHeight: '5.5rem', // Converted from '88px',
    },
    // This is labelled as h3 on the desktop figmas, h2 on the responsive ones. SIGH.
    h3: {
      fontFamily: "'Work Sans', sans-serif",
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '3rem',
      lineHeight: '3.5rem',
      letterSpacing: '0rem',
    },
    h4: {
      fontFamily: "'Work Sans', sans-serif",
      fontStyle: 'normal',
      fontSize: '1.5rem', // Converted from '24px',
      fontWeight: 400,
      lineHeight: '1.875rem', // Converted from '30px',
    },
    h5: {
      fontFamily: "'Work Sans', sans-serif",
      fontStyle: 'normal',
      fontSize: '1.25rem', // Converted from '20px',
      fontWeight: 400,
      lineHeight: '1.5rem', // Converted from '24px',
    },
    // Used for "small link" CTAs like subscribe in the footer. Ag="H3"
    h6: {
      fontSize: '0.75rem',
      fontWeight: 500,
      fontFamily: "'Work Sans', sans-serif",
      fontStyle: 'normal',
      letterSpacing: '0.01rem',
    },
    // Used for most body text. Ag="body"
    body1: {
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 300, // TODO consider whether to raise to 400 for better aliasing and visibility
      fontSize: '1.125rem', // Converted from 18px
      lineHeight: '1.625rem', // Converted from 26px
      letterSpacing: '0.01rem',
    },
    // Used for links Ag="links"
    body2: {
      fontFamily: "'Work Sans', sans-serif",
      fontWeight: 400,
      fontSize: '1.125rem', // Converted from 18px
      lineHeight: '1.625rem', // Converted from 26px
    },
    // Used for Hero subtitles
    subtitle1: {
      fontFamily: "'Work Sans', sans-serif",
      fontStyle: 'normal',
      fontSize: '1.5rem', // Converted from '24px',
      fontWeight: 400,
      lineHeight: '1.875rem', // Converted from '30px',
    },
    // Used for copyrights etc
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 300,
      fontFamily: "'Work Sans', sans-serif",
      fontStyle: 'normal',
      letterSpacing: '0.01rem',
    },
  },

  props: {
    MuiTextField: {
      variant: 'outlined',
    },
    MuiCard: {
      variant: 'outlined',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        border: 'none',
      },
    },
    MuiTypography: {
      h1: {
        [breakpoints.down('md')]: {
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '3rem',
          lineHeight: '3.5rem',
          letterSpacing: '0rem',
        },
      },
      h3: {
        [breakpoints.down('md')]: {
          fontSize: '2rem',
          lineHeight: '2.5rem',
        },
      },
    },
  },
}

export { baseThemeOptions, branding }
