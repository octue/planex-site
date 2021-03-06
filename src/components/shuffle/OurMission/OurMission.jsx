import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { setCtaOpen } from '../../../containers/elements'

const useStyles = makeStyles((theme) => ({
  image: {
    height: 512,
    borderRadius: theme.shape.borderRadius,
    width: '100%',
  },
}))

function OurMission() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      blocks: file(
        relativePath: { eq: "stock/lars-kienle-r3pIy-3Xgmg-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section id="take-work-further">
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
                    <Typography variant="h3" component="span"></Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    Data was always at the heart of science, even when
                    calculations were completed by hand.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    Now, computers carry out sophisticated analysis for us at
                    speed. But that considerable power comes at a price. Today,
                    most scientists around the world, in industry and academia,
                    have to code in order to draw conclusions. They’ve become
                    data scientists by default.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    This was the situation Tom found himself in when he
                    established marine energy consultancy Ocean Array Systems in
                    2013. Exasperated by the difficulties of reusing data and
                    building tool chains that span organisations, Tom started
                    developing the Octue platform and the open-source Twined
                    framework to make it all easier.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    Octue was launched in 2017 and recognised as a Gamechanger
                    by the UK Offshore Renewable Energy Catapult for its work on
                    digital twins.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    Today, we help scientists – and the companies and
                    institutions they work for – get more from data their data,
                    with less frustration.
                  </Typography>
                  <Box mt={3}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={setCtaOpen}
                    >
                      Let's build something together
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Img
                fluid={data.blocks.childImageSharp.fluid}
                className={classes.image}
              />
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
