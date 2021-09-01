import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { SectionHeading } from '../../elements'
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
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
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

const AwesomeScientist = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      Image: file(relativePath: { eq: "stock/awesomescientist.png" }) {
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
            <SectionHeading text="Be an awesome scientist" />
          </Box>
          <Box className={classes.detailBox}>
            <Box>
              <Box className={classes.titleBox}>
                <Typography variant="subtitle1" color="textPrimary">
                  Join a list of scientists we can call on with
                  expertise/interest in certain fields, to support us in
                  creating data services.
                </Typography>
              </Box>

              <Box display="flex" className={classes.btnBox}>
                <Button className={classes.cta} variant="outlined">
                  Add your mind to the movement
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

export default AwesomeScientist
