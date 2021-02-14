import React, { Fragment } from 'react'
import { Bibliography } from 'react-citeproc'
import { withErrorBoundary } from 'react-error-boundary'
import { BibLatexParser, CSLExporter } from 'biblatex-csl-converter'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/icons/List'
import Code from '@material-ui/icons/Code'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'

import Media from 'components/site/Media/Media.jsx'
import Button from 'components/site/CustomButtons/Button.jsx'
import errorLogger, { EmptyDivFallback } from 'errors'

import fieldsStyle from 'assets/jss/material-octue/fieldsStyle.jsx'

// TODO MAKE THESE WORK AGAIN!!!
// const style = raw('src/assets/csl/apa-style.csl')
// const locale = raw('src/assets/csl/xml-locale.xml')

function Transition(props) {
  return <Slide direction="down" {...props} />
}

class ReferenceField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      referenceModal: false,
      bibtex: undefined,
      csl: undefined,
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
  }

  handleOpenModal() {
    this.setState({ referenceModal: true })
  }

  handleCloseModal() {
    this.setState({ referenceModal: false })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.detail && nextProps.detail.bibtex !== prevState.bibtex) {
      const parser = new BibLatexParser(nextProps.detail.bibtex, {
        processUnexpected: false,
        processUnknown: false,
      })
      const csl = new CSLExporter(parser.output).parse()
      return {
        bibtex: nextProps.detail.bibtex,
        csl,
      }
    }
    return null
  }

  render() {
    const { classes, detail } = this.props
    if (!detail) {
      return null
    }
    return (
      <>
        <Dialog
          classes={{
            root: classNames(classes.modalRoot),
            paper: classNames(classes.modal),
          }}
          open={this.state.referenceModal}
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
            {detail.bibtex}
          </DialogContent>
        </Dialog>
        <Media
          avatarComponent={<List className={classes.avatarIcon} />}
          onClickAvatar={() => {
            console.log('Clicked avatar of reference...', detail)
          }}
          body={
            <div className={classes.bibliography}>
              <Bibliography
                // style={style}
                // locale={locale}
                items={this.state.csl}
              />
            </div>
          }
          footer={
            <div>
              <Button
                color="primary"
                simple
                className={classes.footerButtons}
                onClick={() => this.handleOpenModal()}
              >
                <Code className={classes.footerIcons} /> Get BibTeX Reference
              </Button>
            </div>
          }
        />
      </>
    )
  }
}

export default withErrorBoundary(
  withStyles(fieldsStyle)(ReferenceField),
  EmptyDivFallback,
  errorLogger
)
