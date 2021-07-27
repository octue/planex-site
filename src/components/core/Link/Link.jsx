import React, { forwardRef } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import MuiLink from '@material-ui/core/Link'
import MuiButton from '@material-ui/core/Button'
import MuiIconButton from '@material-ui/core/IconButton'
import PropTypes from 'prop-types'
import IFrameModal from '../../layout/IFrameModal'

const Link = forwardRef(
  ({ kind, componentType, children, href, ...rest }, ref) => {
    const [modalOpen, setModalOpen] = React.useState(false)
    const toggleModalOpen = () => setModalOpen(!modalOpen)

    const extra = {
      component: kind === 'site' ? GatsbyLink : 'a',
    }

    if (kind === 'site') {
      // Internal gatsby links are usually provided with 'to' instead of href but I find changing the prop name
      // to be poor developer experience so we use just one, `href`, and map it as needed here.
      if (!href.startsWith('/') && !href.startsWith('#')) {
        throw new Error(
          `For kind='site', supplied href should be an internal link to this site, eg '/' (href=${href}).`
        )
      }
      extra['to'] = href
    } else if (kind === 'external') {
      extra['href'] = href
      extra['target'] = '_blank'
      extra['rel'] = 'noopener noreferrer'
    } else if (kind === 'modal') {
      extra['onClick'] = toggleModalOpen
    } else {
      extra['href'] = href
    }

    /* Note to future tom:
     * It's super weird using a switch here. Obviously you should
     * refactor this horrid code to define the component
     * as a prop with a default and simply create that. Much more
     * elegant. Don't waste time trying though, it doesn't work and I
     * can't find out why.
     *
     * Note from future Tom to future future Tom:
     * Past Tom might not have realised that to be renderable as a component,
     * the prop name has to start with a capital letter. So a prop "MuiComponent"
     * can be used directly like <MuiComponent/> but prop "muiComponent" wouldn't
     * be renderable.
     *
     * Note from future future Tom to past future Tom. So why didn't you refactor
     * the code to do that, then? I'm not going to do it now. I'm tired.
     */
    let clickableComponent
    if (componentType === 'button') {
      clickableComponent = (
        <MuiButton ref={ref} {...extra} {...rest}>
          {children}
        </MuiButton>
      )
    } else if (componentType === 'iconButton') {
      clickableComponent = (
        <MuiIconButton ref={ref} {...extra} {...rest}>
          {children}
        </MuiIconButton>
      )
    } else {
      clickableComponent = (
        <MuiLink ref={ref} {...extra} {...rest}>
          {children}
        </MuiLink>
      )
    }
    return (
      <>
        {clickableComponent}
        {kind === 'modal' ? (
          <IFrameModal open={modalOpen} onClose={toggleModalOpen} src={href} />
        ) : null}
      </>
    )
  }
)

Link.defaultProps = {
  kind: 'site',
  componentType: 'typography',
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
  kind: PropTypes.oneOf(['site', 'internal', 'external', 'modal']),
  /**
   * Specifies the The Material UI (or other) component used to create the visual representation of the link.
   * Default is `typography`, which uses the MaterialUI "Link" component and should be given child text or span,
   * `iconButton` uses MUI's "IconButton" component and should be given a child icon.
   * `button` uses MUI's "Button" component and can be given child text or span elements like icon + text.
   */
  componentType: PropTypes.oneOf(['button', 'iconButton', 'typography']),
}
export default Link
