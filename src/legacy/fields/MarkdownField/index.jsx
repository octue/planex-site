import React from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import withStyles from '@material-ui/core/styles/withStyles'

import errorLogger, { EmptyDivFallback } from 'errors'
import fieldsStyle from 'assets/jss/material-octue/fieldsStyle.jsx'
import Markdown from 'markdown-to-jsx'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const styles = (theme) => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
})

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h3',
      },
    },
    h2: { component: Typography, props: { gutterBottom: true, variant: 'h4' } },
    h3: { component: Typography, props: { gutterBottom: true, variant: 'h5' } },
    h4: { component: Typography, props: { gutterBottom: true, variant: 'h6' } },
    p: { component: Typography, props: { variant: 'body2', paragraph: true } },
    small: {
      component: Typography,
      props: { gutterBottom: true, variant: 'caption', paragraph: true },
    },
    a: { component: Link },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography variant="body2" component="span" {...props} />
        </li>
      )),
    },
  },
}

class MarkdownField extends React.Component {
  render() {
    return <Markdown options={options}>{this.props.value}</Markdown>
  }
}

export default withErrorBoundary(
  withStyles(fieldsStyle)(MarkdownField),
  EmptyDivFallback,
  errorLogger
)
