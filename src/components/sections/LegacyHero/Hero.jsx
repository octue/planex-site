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
    fontSize: '2rem',
    fontWeight: 300,
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

  // This data could ultimately come from a CMS
  const ctaData = {
    text: "Let's build something together",
    kind: 'site',
    href: '/about/',
    icon: null,
  }
  /* Annoying. Maintain compatibility with the NavLink data structure so we can generalise the link component
   * better in future.
   */
  const TheIcon = ctaData.icon

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
          backgroundColor: theme.palette.background.paper,
          width: '100%',
          height: '100%',
        }}
      >
        <Container maxWidth="md" className={classes.container}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            height="100%"
            maxWidth="650px" // Places it to the left of center on larger screens
          >
            <Box display="flex" pb={3}>
              <Typography variant="h2" component="h1" className={classes.title}>
                Science we can build on
              </Typography>
            </Box>
            <Box display="flex" pb={4} px={8}>
              <Typography
                variant="subtitle1"
                component="h2"
                className={classes.description}
              >
                Octue helps scientists take full advantage of data, with fewer
                frustrations. Our building blocks make your data groundwork
                easier, quicker and more sustainable, setting you free to focus
                on the science.
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              width="100%"
            >
              <Box display="flex">
                <Button
                  className={classes.cta}
                  variant="outlined"
                  onClick={setCtaOpen}
                >
                  {ctaData.icon ? <TheIcon className={classes.icon} /> : null}
                  {ctaData.text && ctaData.icon ? ' ' : null}
                  {ctaData.text || null}
                </Button>
              </Box>
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
