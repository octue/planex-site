import React from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import classNames from 'classnames'

import GridContainer from 'components/common/Grid/GridContainer.jsx'
import CardHeader from 'components/site/Card/CardHeader.jsx'
import errorLogger, { EmptyDivFallback } from 'errors'

import Typography from '@material-ui/core/Typography'

import fieldsStyle from 'assets/jss/material-octue/fieldsStyle.jsx'

function Transition(props) {
  return <Slide direction="down" {...props} />
}

class ImageField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageModal: false,
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
  }

  handleOpenModal() {
    this.setState({ imageModal: true })
  }

  handleCloseModal() {
    this.setState({ imageModal: false })
  }

  render() {
    const { classes, detail } = this.props
    if (!detail) {
      return null
    }
    const credit =
      detail.caption && detail.accreditation
        ? `(${detail.accreditation})`
        : detail.accreditation
    const imgPreviewUrl = `${window.baseUrl}/api/images/${detail.id}/serve/?filter=max-500x500`
    const imgFullUrl = `${window.baseUrl}/api/images/${detail.id}/serve/`
    const shadowStyle = {
      backgroundImage: `url(${imgPreviewUrl})`,
      opacity: '1',
    }
    const modalImageStyle = {
      width: '100%',
    }
    return (
      <>
        <Dialog
          classes={{
            root: classNames(classes.modalRoot, classes.modalLarge),
            paper: classNames(classes.modal, classes.modalLarge),
          }}
          open={this.state.imageModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleCloseModal()}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
          <DialogContent
            id="classic-modal-slide-description"
            onClick={() => this.handleCloseModal()}
            className={classes.modalBody}
          >
            <img src={imgFullUrl} alt="..." style={modalImageStyle} />
          </DialogContent>
        </Dialog>
        <div className={classes.field}>
          <GridContainer
            alignItems="center"
            justify="center"
            direction="column"
            className={classes.imageContainer}
          >
            <CardHeader image className={classes.cardHeaderImage}>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <div onClick={() => this.handleOpenModal()}>
                <img src={imgPreviewUrl} alt="..." />
              </div>
              <div className={classes.coloredShadow} style={shadowStyle} />
            </CardHeader>
            <Typography variant="caption" color="primary">
              {detail.caption} <small>{credit}</small>
            </Typography>
          </GridContainer>
        </div>
      </>
    )
  }
}

export default withErrorBoundary(
  withStyles(fieldsStyle)(ImageField),
  EmptyDivFallback,
  errorLogger
)
