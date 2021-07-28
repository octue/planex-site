import React from 'react'
import { CssBaseline, makeStyles, useTheme } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Image from '../../../../assets/images/hexagon/Hero4.png'
import SectionHeading from '../../SectionHeading'
import MultipleHexagonWithImage from '../../../hexagon/MultipleHexagonWithImage'
import ReverseMultipleHexagonImage from '../../../../components/hexagon/ReverseMultipleHexagonWithImage'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'

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
  title: {
    display: 'flex',
    color: theme.palette.text.primary,
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: '30px',
  },
  description: {
    color: theme.palette.text.secondary,
    fontSize: '18px',
    fontWeight: 300,
    lineHeight: '26px',
    // whiteSpace: 'pre-line',
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
const DigitalHexagonSection = () => {
  const classes = useStyles()
  const theme = useTheme()

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

  const descriptionTitleBox = classNames(
    classes.description,
    classes.descriptionTitle
  )
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
              <MultipleHexagonWithImage image={Image} />
            </Box>
            <Box className={classes.detailBox}>
              <Box display="flex" className={classes.titleBox}>
                <Typography variant="subtitle1" color="textPrimary">
                  Create virtual replicas of your assets and processes.
                </Typography>
              </Box>
              <Box display="flex">
                <Typography
                  variant="subtitle1"
                  component="h2"
                  className={descriptionTitleBox}
                >
                  Now answer your ‘what-if?
                </Typography>
              </Box>
              <Box display="flex" pb={2}>
                <Typography
                  variant="subtitle1"
                  component="h2"
                  className={classes.description}
                >
                  Use digital twins for decision support and optimisation of
                  asset design, installation and maintenance - or you can sell a
                  digital twin to servitise your product.
                </Typography>
              </Box>
              <Box display="flex">
                <Typography
                  variant="subtitle1"
                  component="h2"
                  className={descriptionTitleBox}
                >
                  How to begin
                </Typography>
              </Box>
              <Box display="flex" pb={2}>
                <Typography
                  variant="subtitle1"
                  component="h2"
                  className={classes.description}
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
                      <Typography
                        variant="h2"
                        component="h2"
                        className={classes.title}
                      >
                        £26M/yr
                      </Typography>
                    </Box>
                    <Typography
                      variant="subtitle1"
                      component="h2"
                      className={classes.description}
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

export default DigitalHexagonSection
