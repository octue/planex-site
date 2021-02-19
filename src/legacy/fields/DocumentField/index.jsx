import React from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import withStyles from '@material-ui/core/styles/withStyles'
import CloudDownload from '@material-ui/icons/CloudDownload'
import Media from 'components/site/Media/Media.jsx'
import Button from 'components/site/CustomButtons/Button.jsx'
import errorLogger, { EmptyDivFallback } from 'errors'

import fieldsStyle from 'assets/jss/material-octue/fieldsStyle.jsx'

class DocumentField extends React.Component {
  render() {
    const { classes, detail } = this.props
    if (!detail) {
      return null
    }
    return (
      <Media
        avatarComponent={<CloudDownload className={classes.avatarIcon} />}
        onClickAvatar={() => {
          console.log('Clicked avatar of document...', detail)
        }}
        body={
          <div>
            <span className={classes.color555}>
              <small>
                <strong>Title:</strong>
                {` · ${detail.title}`}
              </small>
            </span>
            <br />
            {detail.accreditation ? (
              <span className={classes.color555}>
                <small>
                  <strong>Credit:</strong>
                  {` · ${detail.accreditation}`}
                </small>
              </span>
            ) : null}
          </div>
        }
        footer={
          <div>
            <Button
              href={detail.url}
              target="_blank"
              download
              color="primary"
              simple
              className={classes.footerButtons}
            >
              <CloudDownload className={classes.footerIcons} /> Download source
              material
            </Button>
          </div>
        }
      />
    )
  }
}

export default withErrorBoundary(
  withStyles(fieldsStyle)(DocumentField),
  EmptyDivFallback,
  errorLogger
)
