import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import PushPinIcon from '@material-ui/icons/PinDrop'

import DatoLink from '../components/core/DatoLink'
import GradientHero from '../components/sections/GradientHero'
import { ContactForm } from '../containers/forms'
import BasicPage from '../containers/layout/BasicPage'

import DatoModularField from '../containers/dato/DatoModularField'

const useStyles = makeStyles((theme) => ({
  contactBox: {
    maxWidth: '50%',
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3),
      maxWidth: '100%',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      flexDirection: 'column',
    },
  },
  addressBox: {
    margin: 0,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    maxWidth: '50%',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(6),
      maxWidth: '100%',
    },
  },
  addressLinkBox: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-end',
    },
  },
}))

export const query = graphql`
  query ContactPageQuery {
    page: datoCmsContactPage {
      heading
      mapImage {
        gatsbyImageData
        alt
        title
      }
      navbarTransparency
      officeAddress {
        ...Typography
      }
      officeLocation {
        latitude
        longitude
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      subheading
    }
  }
`

export default function Contact({ location, data }) {
  const classes = useStyles()
  const navBarProps = { transparency: data.page.navbarTransparency }
  return (
    <BasicPage location={location} navBarProps={navBarProps} pb={8}>
      <HelmetDatoCms seo={data.page.seoMetaTags} />
      <GradientHero
        heading={data.page.heading}
        image={data.page.mapImage}
        gradient={false} // See https://github.com/octue/planex-site/issues/110
        fullHeight={false}
      />
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.contactBox}>
          <Typography variant="subtitle1" color="textPrimary" gutterBottom>
            {data.page.subheading}
          </Typography>
          <ContactForm />
        </Box>
        <Box className={classes.addressBox}>
          <DatoModularField blocks={data.page.officeAddress}></DatoModularField>
          {data.page.officeLocation && (
            <Box className={classes.addressLinkBox}>
              <DatoLink
                url={`https://www.google.com/maps/search/?api=1&query=${data.page.officeLocation.latitude},${data.page.officeLocation.longitude}`}
                openInNewTab={true}
                optimiseInternalLink={false}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<PushPinIcon />}
                >
                  Find us on google maps
                </Button>
              </DatoLink>
            </Box>
          )}
        </Box>
      </Container>
    </BasicPage>
  )
}
