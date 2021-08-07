import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { useStaticQuery, graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import { GatsbyImage } from 'gatsby-plugin-image'
import Button from '@material-ui/core/Button'

import { SectionHeading } from '../../elements'

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.background.default,
  },
  container: {
    height: '100%',
    paddingTop: '200px',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '100px',
    },
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
    maxWidth: '590px',
    marginLeft: '190px',
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
  getInvolvedImage: {
    marginTop: '32px',
  },
  titleBox: {
    marginBottom: '32px',
  },
  descriptionTitle: {
    fontWeight: 400,
  },
  cta: {
    display: 'flex',
    paddingTop: `8px`,
    paddingBottom: `8px`,
    backgroundColor: `#D31020`,
  },
  btnBox: {
    marginTop: '18px',
  },
}))

const Volunteer = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      Image: file(relativePath: { eq: "stock/volunteer.png" }) {
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
            <SectionHeading text="Volunteer" />
          </Box>
          <Box className={classes.detailBox}>
            <Box>
              <Box className={classes.titleBox}>
                <Typography variant="subtitle1" color="textPrimary">
                  Help us to help scientists do what they do
                </Typography>
                <Typography variant="subtitle1" color="textPrimary">
                  best – discovery
                </Typography>
              </Box>
              <Box display="flex">
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                  className={classes.descriptionTitle}
                >
                  Software engineering expertise
                </Typography>
              </Box>
              <Box display="flex" pb={2}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                >
                  If you’re a mid-level to senior software or devops engineer
                  and can spare half a day per week, we need you!
                </Typography>
              </Box>
              <Box display="flex" pb={2}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                >
                  We need expertise in python, django, javascript, React, Rust,
                  C++, gitops and devops expertise (the latter on google
                  cloud...for now)
                </Typography>
              </Box>
              <Box display="flex" pb={2}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                >
                  Note you might choose to use some or all of the ogos for
                  python here, django here, c++ here, rust here, javascript
                  here, react here, google cloud here
                </Typography>
              </Box>
              <Box display="flex">
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                  className={classes.descriptionTitle}
                >
                  Operational help
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column" pb={2}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                >
                  Can you help us write winning grant and funding applications?
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                >
                  Can you help us develop online marketing / advertising with
                  great ROI?
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                >
                  If you have a skill and would like to help, let us know about
                  it!
                </Typography>
              </Box>

              <Box display="flex" className={classes.btnBox}>
                <Button className={classes.cta} variant="outlined">
                  Register
                </Button>
              </Box>
            </Box>
            <Grid item className={classes.getInvolvedImage}>
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

export default Volunteer
