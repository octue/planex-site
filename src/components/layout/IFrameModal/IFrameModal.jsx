import React from 'react'
import Container from '@material-ui/core/Container'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    outline: 'none',
    padding: '0px',
    margin: '0px',
  },
}))

export default function IFrameModal({ open, src, onClose }) {
  // "https://www.iubenda.com/privacy-policy/46709371"
  const classes = useStyles()

  const iframe = `<iframe style="width: 100%; height: 80vh;" src=${src}></iframe>`

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Container maxWidth="md" className={classes.container}>
          <div dangerouslySetInnerHTML={{ __html: iframe }} />
        </Container>
      </Fade>
    </Modal>
  )
}

IFrameModal.defaultProps = {}

IFrameModal.propTypes = {
  /**
   * src attribute provided to the iframe
   */
  src: PropTypes.string.isRequired,
  /**
   * Control for whether the modal is open or not
   */
  open: PropTypes.bool.isRequired,
  /**
   * Callback function to close the modal
   */
  onClose: PropTypes.func.isRequired,
}
