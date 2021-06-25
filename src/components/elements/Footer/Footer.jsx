import React from 'react'
import PropTypes from 'prop-types'

import MicroFooter from './MicroFooter'
import SmallFooter from './SmallFooter'
import BigFooter from './BigFooter'

/**
 * Footer
 *
 * A dark themed footer for the site. Provides multiple different kinds.
 */
function Footer({ kind, ...rest }) {
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

Footer.defaultProps = {
  id: 'footer',
  kind: 'small',
}

Footer.propTypes = {
  kind: PropTypes.oneOf(['big', 'small', 'micro', 'none']),
  id: PropTypes.string,
}

export default Footer
