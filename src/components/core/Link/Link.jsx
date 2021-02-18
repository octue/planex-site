import React, { forwardRef } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import MuiLink from '@material-ui/core/Link'
import MuiButton from '@material-ui/core/Button'
import MuiIconButton from '@material-ui/core/IconButton'
import PropTypes from 'prop-types'

const Link = forwardRef(({ kind, variant, children, href, ...rest }, ref) => {
  const component = kind === 'site' ? GatsbyLink : 'a'
  const extra =
    kind === 'external'
      ? {
          target: '_blank',
          rel: 'noopener noreferrer',
        }
      : {}

  // Internal gatsby links are usually provided with 'to' instead of href but I find changing the prop name to be poor
  // UX so we use just one, `href`, and map it as needed here.
  if (kind === 'site') {
    if (!href.startsWith('/') && !href.startsWith('#')) {
      throw new Error(
        `For kind='site', supplied href should be an internal link to this site, eg '/' (href=${href}).`
      )
    }
    extra['to'] = href
  } else {
    extra['href'] = href
  }
  /* Note to future tom:
   * It's super weird using a switch here. Obviously you should
   * refactor this horrid code to define the component
   * as a prop with a default and simply create that. Much more
   * elegant. Don't waste time trying though, it doesn't work and I
   * can't find out why.
   */
  switch (variant) {
    case 'button':
      return (
        <MuiButton component={component} ref={ref} {...extra} {...rest}>
          {children}
        </MuiButton>
      )
    case 'iconButton':
      return (
        <MuiIconButton component={component} ref={ref} {...extra} {...rest}>
          {children}
        </MuiIconButton>
      )
    case 'typography':
      return (
        <MuiLink component={component} ref={ref} {...extra} {...rest}>
          {children}
        </MuiLink>
      )
  }
})

Link.defaultProps = {
  kind: 'site',
  variant: 'typography',
}

Link.propTypes = {
  /**
   * Valid values are 'site', 'internal', and 'external'.
   *
   * The **site** type is for pages built here. It produces an extremely highly optimised
   * link to an internal site page, where the contents of site links are preloaded.
   *
   * This makes a low-priority request when the Link is in the viewport and then uses
   * an onMouseOver event to trigger a high-priority request when it is likely that a
   * user will navigate to the requested resource.
   *
   * This makes site navigation essentially instant.
   *
   * The **internal** type provides a straightforward href link. It navigates the current
   * page. It takes you off this marketing site and contains referrer information
   * so should only be used to direct **within the same domain** (i.e. to `*.octue.com`),
   * since referrer information may be considered insecure.
   *
   * The **external** type should be used for any pages off the domain. It will
   * open the new page in a new tab with no referrer information.
   */
  kind: PropTypes.oneOf(['site', 'internal', 'external']),
  /**
   * Specifies the The Material UI (or other) component used to create the visual representation of the link.
   * Default is `typography`, which uses the MaterialUI "Link" component and should be given child text or span,
   * `iconButton` uses MUI's "IconButton" component and should be given a child icon.
   * `button` uses MUI's "Button" component and can be given child text or span elements like icon + text.
   */
  variant: PropTypes.oneOf(['button', 'iconButton', 'typography']),
}
export default Link
