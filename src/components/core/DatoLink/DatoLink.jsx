import React, { forwardRef } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'

/** Renders a DatoCMS Link block with a GatsbyLink (for internal links) or <a> (for external links).
 *
 * External links open by default in a new tab, and do so safely with noopener, noreferrer.
 */
const DatoLink = forwardRef(
  (
    { children, url, openInNewTab, optimiseInternalLink, wrap, ...rest },
    ref
  ) => {
    const Component = optimiseInternalLink ? GatsbyLink : 'a'
    const linkProps = {}

    if (optimiseInternalLink) {
      // Internal gatsby links must be provided with 'to' instead of href.
      // Links to this site should be made relative to the root so gatsby can pre-cache the pages
      linkProps['to'] = url.replace('https://www.octue.com', '')
    } else {
      linkProps['href'] = url
      linkProps['rel'] = 'noopener noreferrer'
    }

    console.log('here', linkProps, url, optimiseInternalLink)
    if (openInNewTab) {
      linkProps['target'] = '_blank'
    }

    const childrenWithProps = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return wrap ? (
          <Component {...linkProps} {...rest}>
            {child}
          </Component>
        ) : (
          React.cloneElement(child, {
            ref,
            component: Component,
            ...linkProps,
            ...rest,
          })
        )
      }
      return child
    })

    return <>{childrenWithProps}</>
  }
)

DatoLink.defaultProps = {
  url: '#',
  openInNewTab: false,
  optimiseInternalLink: false,
  wrap: false,
}

DatoLink.propTypes = {
  url: PropTypes.string,
  openInNewTab: PropTypes.bool,
  optimiseInternalLink: PropTypes.bool,
  wrap: PropTypes.bool,
}

export default DatoLink
