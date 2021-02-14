import React from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import withStyles from '@material-ui/core/styles/withStyles'

import errorLogger, { EmptyDivFallback } from 'errors'

import fieldsStyle from 'assets/jss/material-octue/fieldsStyle.jsx'

class ParagraphField extends React.Component {
  render() {
    return <p className={this.props.classes.field}>{this.props.value}</p>
  }
}

export default withErrorBoundary(
  withStyles(fieldsStyle)(ParagraphField),
  EmptyDivFallback,
  errorLogger
)
