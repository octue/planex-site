import React from 'react'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'

import { setCtaOpen } from '../../../containers/elements'

const useStyles = makeStyles((theme) => ({
  card: {
    height: 512,
  },
}))

function BuildWithTwined() {
  const classes = useStyles()
  return (
    <section id="build-with-twined">
      <Container maxWidth="lg">
        <Box py={12}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography variant="h3" component="h3" gutterBottom={true}>
                    <Typography color="primary" variant="h3" component="span">
                      Build with Twined{' '}
                    </Typography>
                    <Typography variant="h3" component="span"></Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    Octue’s open-source Twined framework provides the tools to
                    read-in and output data.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    With this fundamental set of operations in place, it’s much
                    quicker and easier to access, assess and analyse data, and
                    to create data services, like digital twins. And whatever
                    you build will be shareable and scalable. So others can
                    build on your work.
                  </Typography>
                  <Box mt={3}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={setCtaOpen}
                    >
                      Discover more
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  image="https://images.unsplash.com/photo-1497681883844-82b4f0a359a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  className={classes.card}
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  )
}

BuildWithTwined.defaultProps = {}

BuildWithTwined.propTypes = {}

export default BuildWithTwined
