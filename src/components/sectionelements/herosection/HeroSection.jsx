import React from 'react'
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
  },
  title: {
    display: 'flex',
    color: theme.palette.text.primary,
    fontSize: '3rem',
    fontWeight: 400,
    lineHeight: '2.125rem',
  },
  description: {
    color: theme.palette.text.secondary,
    fontSize: '1.313rem',
    fontWeight: 400,
    lineHeight: '1.9rem',
    whiteSpace: 'pre-line',
  },
  cta: {
    display: 'flex',
    border: `2px solid ${theme.palette.text.secondary}`,
    paddingTop: `10px`,
    paddingBottom: `10px`,
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
    <Box component="section" height="100vh">
      <BackgroundImage
        Tag="div"
        fluid={Image}
        style={{
          backgroundColor: theme.palette.background.paper,
          width: '100%',
          height: '100%',
        }}
      >
        <Container maxWidth="lg" className={classes.container}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="flex-start"
            height="100%"
            maxWidth="650px" // Places it to the left of center on larger screens
          >
            <Box display="flex" pb={4}>
              <Typography variant="h1" component="h1" className={classes.title}>
                Science we can build on
              </Typography>
            </Box>
            <Box display="flex" pb={4} px={1}>
              <Typography
                variant="subtitle1"
                component="h2"
                className={classes.description}
              >
                Faster data groundwork. More time for science.
              </Typography>
            </Box>
          </Box>
        </Container>
      </BackgroundImage>
    </Box>
  )
}

export default HeroSection
