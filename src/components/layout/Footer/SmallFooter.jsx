import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import Copyright from '../../elements/Copyright'
import GradientStripe from '../../elements/GradientStripe'
import { Link } from '../../core/Link'

import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing(1),
    fontSize: '24px',
  },
  copyright: {
    fontSize: `${theme.spacing(1.5)}px`,
  },
}))

function SmallFooter({ id }) {
  const classes = useStyles()
  return (
    <footer id={id} className={classes.footer}>
      <GradientStripe />
      <Container>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Copyright className={classes.copyright} />
          </Grid>
          <Grid item>
            <Link
              href="https://twitter.com/octue"
              kind="external"
              variant="iconButton"
              className={classes.button}
              aria-label="twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://linkedin.com/company/octue"
              kind="external"
              variant="iconButton"
              className={classes.button}
              aria-label="linkedin"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/octue"
              kind="external"
              variant="iconButton"
              className={classes.button}
              aria-label="github"
            >
              <FaGithub />
            </Link>
          </Grid>
        </Grid>
      </Container>
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
