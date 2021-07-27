import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { makeStyles, useTheme } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import { setCtaOpen } from '../../../containers/elements'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    width: '100%',
    background: 'linear-gradient(0deg, #212121 0%, rgba(30, 34, 34, 0) 100%)',
  },
  title: {
    display: 'flex',
    color: theme.palette.text.primary,
    fontSize: '80px',
    fontWeight: 400,
    lineHeight: '88px',
  },
  description: {
    color: theme.palette.text.secondary,
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: '30px',
    // whiteSpace: 'pre-line',
  },
  cta: {
    display: 'flex',
    border: `2px solid ${theme.palette.text.secondary}`,
    paddingTop: `10px`,
    paddingBottom: `10px`,
  },
  MainBox: {
    marginLeft: '90px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
    },
  },
}))

const HeroSection = ({ heading, description, Image }) => {
  const classes = useStyles()
  const theme = useTheme()

  const ctaData = {
    text: "Let's build something together",
    kind: 'site',
    href: '/about/',
    icon: null,
  }

  return (
    <Box component="section" height="825px">
      <BackgroundImage
        Tag="div"
        fluid={Image}
        style={{
          backgroundColor: theme.palette.background.paper,
          width: '100%',
          height: '100%',
        }}
      >
        <Container maxWidth="xl" className={classes.container}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            // alignItems="flex-start"
            height="100%"
            maxWidth="958px" // Places it to the left of center on larger screens
            className={classes.MainBox}
          >
            <Box display="flex">
              <Typography variant="h1" component="h2" className={classes.title}>
                {heading}
              </Typography>
            </Box>
            <Box display="flex" pb={4} px={1}>
              <Typography
                variant="subtitle1"
                component="h2"
                className={classes.description}
              >
                {description}
              </Typography>
            </Box>
          </Box>
        </Container>
      </BackgroundImage>
    </Box>
  )
}

HeroSection.defaultProps = {}

HeroSection.propTypes = {}

export default HeroSection
