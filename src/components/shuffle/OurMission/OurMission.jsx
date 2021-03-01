import React from 'react'
// import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles((theme) => ({
  card: {
    height: 512,
  },
}))

function OurMission() {
  const classes = useStyles()
  return (
    <section>
      <Container maxWidth="lg">
        <Box py={12}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography variant="h3" component="h3" gutterBottom={true}>
                    <Typography color="primary" variant="h3" component="span">
                      Our mission{' '}
                    </Typography>
                    <Typography variant="h3" component="span">
                      sit amet consectetur.
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    Data was always at the heart of science, even when
                    calculations were completed by hand. Now, computers carry
                    out sophisticated analysis for us at speed. But that
                    considerable power comes at a price. Today, most scientists
                    around the world, in industry and academia, have to code in
                    order to draw conclusions. They’ve become data scientists by
                    default. This was the situation Tom found himself in when he
                    established marine energy consultancy Ocean Array Systems in
                    2013. Exasperated by the difficulties of reusing data and
                    building tool chains that span organisations, Tom started
                    developing the Octue platform and the open-source Twined
                    framework to make it all easier. Octue was launched in 2017
                    and recognised as a Gamechanger by the UK Offshore Renewable
                    Energy Catapult for its work on digital twins. Today, we
                    help scientists – and the companies and institutions they
                    work for – get more from data their data, with less
                    frustration.
                  </Typography>
                  <Box mt={3}>
                    <Button variant="contained" color="secondary">
                      Let's build something together
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  image="../../../assets/images/stock/markus-spiske-OO89_95aUC0-unsplash.jpg"
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

OurMission.defaultProps = {}

OurMission.propTypes = {}

export default OurMission
