/* eslint-disable import/no-dynamic-require */

/** Extra Context (Branding)
 *
 * These are named wind pioneers colours and logos, accessible from everywhere,
 * irrespective of whether the whitelabeled theme is in context or not.
 *
 * From main colours, light and dark variants came from https://material.io/resources/color/
 */
const branding = {
  palette: {
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
      dark: require('../assets/images/logos/octue/text-transparent-white.svg'),
      light: require('../assets/images/logos/octue/text-transparent-coloured.svg'),
    },
    square: {
      dark: require('../assets/images/logos/octue/square-transparent-white.svg'),
      light: require('../assets/images/logos/octue/square-transparent-coloured.svg'),
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
  },
}

export { baseThemeOptions, branding }
