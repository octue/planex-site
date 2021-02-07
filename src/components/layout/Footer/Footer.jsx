import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/styles'

import MicroFooter from './MicroFooter.jsx'
import SmallFooter from './SmallFooter.jsx'
import BigFooter from './BigFooter.jsx'
import { darkTheme } from '../../../themes'


function getFooterComponent(kind, rest) {
  switch (kind) {
    case 'micro':
      return <MicroFooter {...rest} />
    case 'small':
      return <SmallFooter {...rest} />
    case 'big':
      return <BigFooter {...rest} />
    default:
      return null
  }
}

/**
 * Footer
 *
 * A dark themed footer for the site. Provides multiple different kinds.
 */
function Footer({ kind, ...rest }) {
  const component = getFooterComponent(kind, rest)
  return component ? (
    <ThemeProvider theme={darkTheme}>
      {component}
    </ThemeProvider>
  ) : null
}

Footer.defaultProps = {
  id: 'footer',
  kind: 'small',
}

Footer.propTypes = {
  kind: PropTypes.oneOf(['big', 'small', 'micro']),
  id: PropTypes.string,
}

export default Footer
