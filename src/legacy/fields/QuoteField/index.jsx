import React from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import withStyles from '@material-ui/core/styles/withStyles'
import Quote from 'components/site/Typography/Quote.jsx'
import errorLogger, { EmptyDivFallback } from 'errors'

import fieldsStyle from 'assets/jss/material-octue/fieldsStyle.jsx'

class QuoteField extends React.Component {
  render() {
    console.log('Rendering quotefield!', this.props)
    const pieces = this.props.value.split('-')
    const author = pieces && pieces.length > 1 ? pieces.pop() : undefined
    const text = pieces ? pieces.join('-') : this.props.value
    return (
      <div className={this.props.classes.field}>
        <Quote text={text} author={author} />
      </div>
    )
  }
}

export default withErrorBoundary(
  withStyles(fieldsStyle)(QuoteField),
  EmptyDivFallback,
  errorLogger
)
