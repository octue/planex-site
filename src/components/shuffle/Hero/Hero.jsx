import React from 'react'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

import { makeStyles, useTheme } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(30),
      paddingBottom: theme.spacing(30),
    },
  },
  description: {
    color: theme.palette.background.secondary,
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
  secondaryAction: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}))

function Hero() {
  const classes = useStyles()

  const theme = useTheme()
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "backgrounds/tinted-hex.jpg" }) {
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
    <Box component="section" height="100vh">
      <BackgroundImage
        Tag="div"
        fluid={imageData}
        /* See https://github.com/timhagn/gatsby-background-image/issues/142
         * for why these styles are applied here.
         * Unlike a dynamic react site, this shouldn't be a performance issue.
         */
        style={{
          backgroundColor: theme.palette.background,
          width: '100%',
          height: '100%',
        }}
      >
        <Container maxWidth="md" className={classes.container}>
          <Box textAlign="center" color="common.white">
            <Typography variant="h2" component="h2" gutterBottom={true}>
              <Typography color="secondary" variant="h2" component="span">
                Science we can build on{' '}
              </Typography>
            </Typography>
            <Container maxWidth="sm">
              <Typography
                variant="subtitle1"
                color="textSecondary"
                paragraph={true}
                className={classes.description}
              >
                Octue helps scientists take full advantage of data, with fewer
                frustrations. Our building blocks make your data groundwork
                easier, quicker and more sustainable, setting you free to focus
                on the science.
              </Typography>
            </Container>
            <Box mt={3}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.primaryAction}
              >
                Let's build something together
              </Button>
            </Box>
          </Box>
        </Container>
      </BackgroundImage>
    </Box>
  )
}

Hero.defaultProps = {}

Hero.propTypes = {}

export default Hero
