import React from 'react'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Box from '@material-ui/core/Box'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.primary.dark,
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(30),
      paddingBottom: theme.spacing(30),
    },
  },
  description: {
    color: theme.palette.background.secondary,
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
  secondaryAction: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}))

function Hero(props) {
  const classes = useStyles()
  return (
    <section
      className={classes.section}
      style={{
        backgroundImage:
          'url("https://shuffle.dev/projects/uploads/files/d8/d8d7c281d5c0768a1418c9e5add3183668edd40c/tinted-hex.original.jpg")',
      }}
    >
      <Container maxWidth="md">
        <Box textAlign="center" color="common.white">
          <Typography variant="h2" component="h2" gutterBottom={true}>
            <Typography color="secondary" variant="h2" component="span">
              Science we can build on{' '}
            </Typography>
          </Typography>
          <Container maxWidth="sm">
            <Typography
              variant="subtitle1"
              color="textSecondary"
              paragraph={true}
              className={classes.description}
            >
              Octue helps scientists take full advantage of data, with fewer
              frustrations. Our building blocks make your data groundwork
              easier, quicker and more sustainable, setting you free to focus on
              the science.
            </Typography>
          </Container>
          <Box mt={3}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.primaryAction}
            >
              Let's build something together
            </Button>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

Hero.defaultProps = {}

Hero.propTypes = {}

export default Hero
