import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { useStaticQuery, graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import { GatsbyImage } from 'gatsby-plugin-image'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

import { SectionHeading, SectionDetail } from '../../elements'

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.background.default,
  },
  container: {
    height: '100%',
    paddingTop: '150px',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '100px',
    },
  },
  titleFontSize: {
    fontWeight: 400,
  },
  boxSubtitle: {
    marginTop: '3rem',
    marginLeft: '2rem',
  },
  parentBox: {
    marginLeft: '60px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginLeft: '0',
    },
  },
  hexagonTitle: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  detailBox: {
    marginLeft: '2rem',
    marginTop: '5.5rem',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: '0.1rem',
    },
  },
  mediaLarge: {
    height: 393,
    borderRadius: theme.shape.borderRadius,
    width: '100%',
  },
  twinedHelpImage: {
    marginTop: '32px',
  },
  arrowIcon: {
    marginLeft: '-22px',
  },
}))

const TwinedHelpSection = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      Image: file(relativePath: { eq: "stock/twinedBegin.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, width: 600)
        }
      }
    }
  `)
  return (
    <section className={classes.bgColor}>
      <Container maxWidth="lg" className={classes.container}>
        <Box display="flex" className={classes.parentBox}>
          <Box className={classes.hexagonTitle}>
            <Box>
              <SectionHeading text="How to begin" />
            </Box>
            <Box className={classes.boxSubtitle}>
              <Box display="flex">
                <Box className={classes.arrowIcon}>
                  <ArrowRightAltIcon style={{ color: 'white' }} />
                </Box>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                  className={classes.titleFontSize}
                >
                  Twined-components
                </Typography>
              </Box>
            </Box>
            <Box className={classes.boxSubtitle}>
              <Typography
                color="textSecondary"
                component="span"
                className={classes.titleFontSize}
              >
                Twine-builder
              </Typography>
            </Box>
            <Box className={classes.boxSubtitle}>
              <Typography
                color="textSecondary"
                component="span"
                className={classes.titleFontSize}
              >
                Twined-monitor
              </Typography>
            </Box>
            <Box className={classes.boxSubtitle}>
              <Typography
                color="textSecondary"
                component="span"
                className={classes.titleFontSize}
              >
                Octue-sdk
              </Typography>
            </Box>
            <Box className={classes.boxSubtitle}>
              <Typography
                color="textSecondary"
                component="span"
                className={classes.titleFontSize}
              >
                User-personas
              </Typography>
            </Box>
          </Box>
          <Box className={classes.detailBox}>
            <SectionDetail
              description="Build your own front-ends for scientific data, using these components ready-made in React."
              button="Go to github"
            />
            <Grid item className={classes.twinedHelpImage}>
              <GatsbyImage
                image={data.Image.childImageSharp.gatsbyImageData}
                className={classes.mediaLarge}
              />
            </Grid>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default TwinedHelpSection
