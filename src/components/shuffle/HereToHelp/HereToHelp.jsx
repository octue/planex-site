import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { setCtaOpen } from '../../../containers/elements'

const useStyles = makeStyles((theme) => ({
  image: {
    height: 512,
    borderRadius: theme.shape.borderRadius,
    width: '100%',
  },
}))

function HereToHelp() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      desktop: file(
        relativePath: { eq: "stock/jj-ying-DYHx6h3lMdY-unsplash.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, width: 600)
        }
      }
    }
  `)

  return (
    <section id="here-to-help">
      <Container maxWidth="lg">
        <Box py={12}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography variant="h3" component="h3" gutterBottom={true}>
                    <Typography color="primary" variant="h3" component="span">
                      Here to help{' '}
                    </Typography>
                    <Typography variant="h3" component="span">
                      you build
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    We don’t just build intuitive tools – we deconstruct all
                    sorts of data dilemmas. Need a digital twin strategy? Want
                    to know how to commercialise a data service? Looking for a
                    white-labelled app? We’ve got the technical expertise to
                    deliver.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    Our background in the renewables sector makes our
                    consultancy particularly popular with engineering
                    consultancies, renewable energy equipment manufacturers and
                    operators, survey companies and academics in the climate
                    science field.
                  </Typography>
                  <Box mt={3}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={setCtaOpen}
                    >
                      Let's connect
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <GatsbyImage
                image={data.desktop.childImageSharp.gatsbyImageData}
                className={classes.image}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  )
}

HereToHelp.defaultProps = {}

HereToHelp.propTypes = {}

export default HereToHelp
