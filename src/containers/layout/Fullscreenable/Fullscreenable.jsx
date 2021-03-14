import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles((theme) => ({
  closeButton: {
    zIndex: `${theme.zIndex.tooltip - 10}`, // Above modals, dialogs and drawers but below any tooltips (the highest components)
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}))

/**
 * Wrapper allowing components to be optionally rendered in fullscreen, with a close button top right.
 * A dialog is used to provide a fade in transition to fullscreen.
 *
 */
function Fullscreenable({
  closable,
  fullscreen,
  onFullscreenChange,
  children,
  ...rest
}) {
  const classes = useStyles()

  const handleClose = () => onFullscreenChange(false)

  const closeButton = closable ? (
    <IconButton
      aria-label="close"
      className={classes.closeButton}
      onClick={handleClose}
    >
      <Tooltip title="Close fullscreen">
        <FullscreenExitIcon />
      </Tooltip>
    </IconButton>
  ) : null

  return fullscreen ? (
    <>
      {closeButton}
      <Dialog fullScreen open={fullscreen} {...rest}>
        {children}
      </Dialog>
    </>
  ) : (
    <>{children}</>
  )
}

Fullscreenable.defaultProps = {
  closable: true,
}

Fullscreenable.propTypes = {
  /**
   * Allow the fullscreen to be closed by addition of a 'close' button top right. If false, the developer must add a
   * control to enable the fullscreen to be closed themself.
   */
  closable: PropTypes.bool,
  /**
   * Children, rendered whether in fullscreen not.
   */
  children: PropTypes.node.isRequired,
  /**
   * Whether to render children in fullscreen. If false, renders children into a fragment.
   */
  fullscreen: PropTypes.bool.isRequired,
  /**
   * Callback for when the dialog box is closed
   */
  onFullscreenChange: PropTypes.func.isRequired,
}

export default Fullscreenable
