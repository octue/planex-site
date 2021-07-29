import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import BasicPage from '../containers/layout/BasicPage'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import { ThemeProvider } from '@material-ui/styles'

import SEO from '../components/core/SEO'
import { ContactForm } from '../containers/forms'
import { makeStyles, useTheme } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { darkTheme } from '../themes'
import CssBaseline from '@material-ui/core/CssBaseline'
import SectionHeading from '../components/sectionelements/SectionHeading'
import Button from '@material-ui/core/Button'
import Location from '../assets/images/hexagon/location.svg'

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    display: 'flex',
    fontSize: '80px',
    fontWeight: 400,
    lineHeight: '88px',
  },
  contactFormBox: {
    marginLeft: '95px',
    marginTop: '200px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      flexDirection: 'column',
    },
  },
  contactTitleBox: {
    marginTop: '188px',
    marginLeft: '90px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      marginTop: '97px',
    },
  },
  contactSubTitle: {
    marginTop: '10px',
    maxWidth: '400px',
  },
  formBox: {
    maxWidth: '590px',
    marginLeft: '154px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-20px',
    },
  },
  locationDescriptionBox: {
    // maxWidth: '342px',
    display: 'flex',
    marginTop: '200px',
    height: '800px',

    marginLeft: '90px',
    [theme.breakpoints.down('sm')]: {
      height: '500px',
      marginTop: '180px',
      marginLeft: '0',
      flexDirection: 'column',
    },
  },
  locationTitle: {
    display: 'flex',
    // color: theme.palette.text.primary,
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: '30px',
  },
  locationTitleBox: {
    marginTop: '268px',
    maxWidth: '268px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '0px',
    },
  },
  cta: {
    display: 'flex',
    paddingTop: `8px`,
    paddingBottom: `8px`,
    backgroundColor: `#D31020`,
  },
  btnBox: {
    marginTop: '20px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '10px',
    },
  },
  locationIcon: {
    marginLeft: '602px',
    // marginTop: '100px',

    [theme.breakpoints.down('xs')]: {
      marginTop: '150px',
      marginLeft: '140px',
    },
  },
}))
export default function Contact() {
  const classes = useStyles()
  const theme = useTheme()
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "backgrounds/map.png" }) {
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

  const footerProps = {
    kind: 'big',
  }

  return (
    <BasicPage offset pt={6} pb={8} px={2} footerProps={footerProps}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {/* <Container maxWidth="sm"> */}
        <Box className={classes.contactTitleBox}>
          <Typography variant="h1" component="h2" className={classes.title}>
            Drop us a message.
          </Typography>
        </Box>
        <Box display="flex" className={classes.contactFormBox}>
          <Box className={classes.contactSubTitle}>
            <SectionHeading text="We’d love to hear what you’re working on." />
          </Box>
          <Box className={classes.formBox}>
            <ContactForm />
          </Box>
        </Box>

        <Box className={classes.locationDescriptionBox}>
          <BackgroundImage
            Tag="div"
            fluid={imageData}
            style={{
              backgroundColor: theme.palette.background.paper,
              width: '100%',
              height: '100%',
            }}
          >
            <Box className={classes.locationTitleBox}>
              <Typography variant="subtitle1" color="textPrimary">
                Hauser Forum
              </Typography>
              <Typography variant="subtitle1" color="textPrimary">
                3 Charles Babbage Road
              </Typography>
              <Typography variant="subtitle1" color="textPrimary">
                Cambridge
              </Typography>
              <Typography variant="subtitle1" color="textPrimary">
                United Kingdom
              </Typography>
              <Typography variant="subtitle1" color="textPrimary">
                CB3 0GT
              </Typography>

              <Box display="flex" className={classes.btnBox}>
                <Button className={classes.cta} variant="outlined">
                  Directions
                </Button>
              </Box>
            </Box>
            <Box className={classes.locationIcon}>
              <img src={Location} alt="" />
            </Box>
          </BackgroundImage>
        </Box>

        {/* </Container> */}
      </ThemeProvider>
      <SEO pageMeta={{ title: 'Contact' }} />
      <Container maxWidth="sm">
        <Typography gutterBottom variant="h4" color="primary">
          Contact Us
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Drop us a message, we'd love to hear what you're working on...
        </Typography>
        <ContactForm />
      </Container>
    </BasicPage>
  )
}
