import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Dialog from '@material-ui/core/Dialog'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Link from '../../core/Link'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  gutter: {
    marginBottom: theme.spacing(2),
  },
  content: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}))

function CallToAction({ FormComponent, open, onClose, ...rest }) {
  const classes = useStyles()
  return (
    <Dialog open={open}>
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h2" className={classes.gutter}>
          Get updates
        </Typography>
        <Box px={2}>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.gutter}
          >
            We keep people up to date by email when we release new Open-Source
            tools. {<strong>Subscribe to get notifications!</strong>}
          </Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            className={classes.gutter}
          >
            Alternatively, you can{' '}
            {
              <Link kind="external" href="https://github.com/octue">
                follow us on GitHub
              </Link>
            }
            ... If you need help with a project or wish to sponsor specific
            developments, please {<Link href="/contact">get in touch</Link>}.
          </Typography>
        </Box>
        <FormComponent {...rest} />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onClose}>
          No Thanks
        </Button>
      </CardActions>
    </Dialog>
  )
}

CallToAction.defaultProps = {}

CallToAction.propTypes = {
  /**
   * Callback to close the controlled dialog component
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Determine whether the dialog is open or not
   */
  open: PropTypes.bool.isRequired,
  /**
   * The form to render
   */
  FormComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    .isRequired,
}

export default CallToAction
