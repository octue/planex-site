import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'

import Image from '../../../assets/images/hexagon/Hero4.png'
import { SectionHeading } from '../../elements'
import HexagonGrid from '../../hexagon/HexagonGrid/HexagonGrid'

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.background.default,
  },
  container: {
    height: '100%',
    paddingTop: '202px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '100px',
    },
  },
  parentBox: {
    marginLeft: '60px',
    maxheight: '434px',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginLeft: '0',
    },
  },
  hexagonTitle: {
    // maxWidth: '456px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  HexagonDetailBox: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      marginLeft: '0',
    },
  },
  hexagonBox: {
    marginTop: '132px',
    maxWidth: '434px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '50px',
    },
  },

  detailBox: {
    // display: 'flex',
    marginTop: '-40px',
    maxWidth: '590px',
    marginLeft: '221px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: '0.1rem',
      marginTop: '10px',
    },
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
    marginTop: '24px',
  },
  titleBox: {
    marginBottom: '16px',
  },
  bgBox: {
    border: '1px solid white',
    maxWidth: '590px',
  },
}))

const DigitalTwins = () => {
  const classes = useStyles()
  const theme = useTheme()

  const gridObjectXY = [
    {
      x: 1,
      y: 1,
      image: Image,
    },
    {
      x: 2,
      y: 1,
      image: Image,
    },
    {
      x: 2,
      y: 2,
      image: Image,
    },
    {
      x: 3,
      y: 2,
      image: Image,
    },
  ]

  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "backgrounds/digital.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid

  return (
    <section className={classes.bgColor}>
      <Container maxWidth="lg" className={classes.container}>
        <Box display="flex" className={classes.parentBox}>
          <Box className={classes.hexagonTitle}>
            <Box>
              <SectionHeading text="Digital twins" />
            </Box>
          </Box>
          <Box className={classes.HexagonDetailBox}>
            <Box className={classes.hexagonBox}>
              <HexagonGrid gridObjectXY={gridObjectXY} />
            </Box>
            <Box className={classes.detailBox}>
              <Box display="flex" className={classes.titleBox}>
                <Typography variant="subtitle1" color="textPrimary">
                  Create virtual replicas of your assets and processes.
                </Typography>
              </Box>
              <Box display="flex">
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                  className={classes.descriptionTitle}
                >
                  Now answer your ‘what-if?
                </Typography>
              </Box>
              <Box display="flex" pb={2}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                >
                  Use digital twins for decision support and optimisation of
                  asset design, installation and maintenance - or you can sell a
                  digital twin to servitise your product.
                </Typography>
              </Box>
              <Box display="flex">
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                  className={classes.descriptionTitle}
                >
                  How to begin
                </Typography>
              </Box>
              <Box display="flex" pb={2}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                >
                  Successful digital twinning projects always start small. We’ll
                  help you choose one key pain point for your business and
                  develop the building blocks you need to tackle that. Then we
                  strategically build out from there.
                </Typography>
              </Box>
              <Box className={classes.bgBox}>
                <BackgroundImage
                  Tag="div"
                  fluid={imageData}
                  style={{
                    backgroundColor: theme.palette.background.paper,
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <Box p={3}>
                    <Box pb={2}>
                      <Typography variant="subtitle1" color="textPrimary">
                        £26M/yr
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="span"
                    >
                      That’s how much a typical 600MW Offshore Wind Farm could
                      save in operations and maintenance costs (15%) with
                      digitalisation.
                    </Typography>
                  </Box>
                </BackgroundImage>
              </Box>

              <Box display="flex" className={classes.btnBox}>
                <Button className={classes.cta} variant="outlined">
                  Start twinning
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default DigitalTwins
