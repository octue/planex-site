import React from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import withStyles from '@material-ui/core/styles/withStyles'
import errorLogger, { EmptyDivFallback } from 'errors'

import fieldsStyle from 'assets/jss/material-octue/fieldsStyle.jsx'

class HeadingField extends React.Component {
  render() {
    return <h3 className={this.props.classes.field}>{this.props.value}</h3>
  }
}

export default withErrorBoundary(
  withStyles(fieldsStyle)(HeadingField),
  EmptyDivFallback,
  errorLogger
)
