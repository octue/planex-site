import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import SectionHeading from '../SectionHeading'
import { useStaticQuery, graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import { GatsbyImage } from 'gatsby-plugin-image'
import Button from '@material-ui/core/Button'

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

const TellUsSection = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      Image: file(relativePath: { eq: "stock/tellus.png" }) {
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
            <SectionHeading text="Tell us what" />
            <SectionHeading text="you need" />
          </Box>
          <Box className={classes.detailBox}>
            <Box>
              <Box className={classes.titleBox}>
                <Typography variant="subtitle1" color="textPrimary">
                  Do you have an idea or need for specific data streams /
                  services that you’d be willing to commit to financially (even
                  a small amount on a monthly basis)? If so, we may be able to
                  draw on our network or make that happen ourselves.
                </Typography>
              </Box>

              <Box display="flex" className={classes.btnBox}>
                <Button className={classes.cta} variant="outlined">
                  Let us know what you need
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

export default TellUsSection
