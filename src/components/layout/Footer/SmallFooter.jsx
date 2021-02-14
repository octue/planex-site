import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'

import Copyright from 'components/site/Copyright/Copyright.jsx'
import GradientStripe from 'components/site/GradientStripe/GradientStripe.jsx'
import IconLink from 'components/navigation/IconLink.jsx'

import { container } from 'assets/jss/material-octue'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    zIndex: 3,
    ...container,
    position: 'relative',
  },
  button: {
    margin: theme.spacing(1),
  },
}))

function SmallFooter(props) {
  const classes = useStyles()
  return (
    <footer id={props.id} className={classes.footer}>
      <GradientStripe />
      <div className={classes.container}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Copyright />
          </Grid>
          <Grid item>
            <IconLink
              href="https://twitter.com/octue"
              className={classes.button}
              aria-label="twitter"
            >
              <Icon className="fab fa-twitter" fontSize="inherit" />
            </IconLink>
            <IconLink
              href="https://linkedin.com/company/octue"
              className={classes.button}
              aria-label="linkedin"
            >
              <Icon className="fab fa-linkedin" fontSize="inherit" />
            </IconLink>
            <IconLink
              href="https://github.com/octue"
              className={classes.button}
              aria-label="github"
            >
              <Icon className="fab fa-github" fontSize="inherit" />
            </IconLink>
          </Grid>
        </Grid>
      </div>
    </footer>
  )
}

SmallFooter.defaultProps = {
  id: 'footer',
}

SmallFooter.propTypes = {
  id: PropTypes.string,
}

export default SmallFooter
