import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'

import { setCtaOpen } from '../../../containers/elements'

const useStyles = makeStyles((theme) => ({
  media: {
    height: '256px',
    borderRadius: theme.shape.borderRadius,
  },
  mediaLarge: {
    minHeight: '256px',
    height: '100%',
    borderRadius: theme.shape.borderRadius,
  },
  fullHeight: {
    height: '100%',
    width: '100%',
    borderRadius: theme.shape.borderRadius,
  },
  emptyCardContainer: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  emptyCard: {
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.background,
      height: 64,
    },
  },
  imagesColumn: {
    order: 12,
    [theme.breakpoints.up('md')]: {
      order: 0,
    },
  },
}))

function TakeWorkFurther() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      topLeftPanel: file(
        relativePath: { eq: "stock/shutterstock_270258722.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 40, width: 600)
        }
      }
      topRightPanel: file(
        relativePath: { eq: "stock/vincent-ledvina-bD0sXSND4kA-unsplash.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, width: 600)
        }
      }
      bottomLeftPanel: file(
        relativePath: { eq: "stock/shutterstock_255586588.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 10, width: 600)
        }
      }
      bottomRightPanel: file(
        relativePath: { eq: "stock/shutterstock_230320042.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 10, width: 600)
        }
      }
    }
  `)
  return (
    <section id="take-work-further">
      <Container maxWidth="lg">
        <Box py={12}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6} className={classes.imagesColumn}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <GatsbyImage
                    image={data.topLeftPanel.childImageSharp.gatsbyImageData}
                    className={classes.mediaLarge}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} className={classes.emptyCardContainer}>
                      <Card className={classes.emptyCard} />
                    </Grid>
                    <Grid item xs={12}>
                      <GatsbyImage
                        image={
                          data.topRightPanel.childImageSharp.gatsbyImageData
                        }
                        className={classes.media}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <GatsbyImage
                        image={
                          data.bottomLeftPanel.childImageSharp.gatsbyImageData
                        }
                        className={classes.media}
                      />
                    </Grid>
                    <Grid item xs={12} className={classes.emptyCardContainer}>
                      <Card className={classes.emptyCard} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box
                    display="flex"
                    height="100%"
                    className={classes.mediaLarge}
                  >
                    <GatsbyImage
                      image={
                        data.bottomRightPanel.childImageSharp.gatsbyImageData
                      }
                      className={classes.fullHeight}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography variant="h3" component="h3" gutterBottom={true}>
                    <Typography color="primary" variant="h3" component="span">
                      Take your work further{' '}
                    </Typography>
                    <Typography variant="h3" component="span">
                      with the Octue platform
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    Host your newly-created data services on the Octue platform.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    It’s a simple way for academic institutions and businesses
                    to make their digital twins and apps widely available.
                    Underpinning collaboration and commercialisation.
                  </Typography>
                  <Box mt={3}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={setCtaOpen}
                    >
                      Start now
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  )
}

TakeWorkFurther.defaultProps = {}

TakeWorkFurther.propTypes = {}

export default TakeWorkFurther
