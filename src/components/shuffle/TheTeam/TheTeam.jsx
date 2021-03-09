import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
// import Link from 'gatsby'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: '100%',
    height: '256px',
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
  },
}))

function TheTeam() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      defaultAvatar: file(relativePath: { eq: "avatars/default-avatar.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      tomClark: file(relativePath: { eq: "team/tom-clark.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      andyClifton: file(relativePath: { eq: "team/andy-clifton.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section>
      <Container maxWidth="lg">
        <Box py={8}>
          <Box mb={9} textAlign="center">
            <Container maxWidth="sm">
              <Typography
                variant="overline"
                color="textSecondary"
                paragraph={true}
              ></Typography>
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography variant="h3" component="span" color="primary">
                  The team{' '}
                </Typography>
                <Typography variant="h3" component="span"></Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                paragraph={true}
              ></Typography>
            </Container>
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={3}>
              <Img
                fluid={data.tomClark.childImageSharp.fluid}
                className={classes.avatar}
              />
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6" component="h6" gutterBottom={true}>
                  Tom Clark
                </Typography>
                <ArrowRightAltIcon />
              </Box>
              <Typography
                variant="body1"
                color="textSecondary"
                component="span"
              >
                CEO & Founder
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Img
                fluid={data.defaultAvatar.childImageSharp.fluid}
                className={classes.avatar}
              />
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6" component="h6" gutterBottom={true}>
                  Marcus Lugg
                </Typography>
                <ArrowRightAltIcon />
              </Box>
              <Typography
                variant="body1"
                color="textSecondary"
                component="span"
              >
                Developer
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Img
                fluid={data.andyClifton.childImageSharp.fluid}
                className={classes.avatar}
              />
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6" component="h6" gutterBottom={true}>
                  Andy Clifton
                </Typography>
                <ArrowRightAltIcon />
              </Box>
              <Typography
                variant="body1"
                color="textSecondary"
                component="span"
              >
                Adviser
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Img
                fluid={data.defaultAvatar.childImageSharp.fluid}
                className={classes.avatar}
              />
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6" component="h6" gutterBottom={true}>
                  Volunteers
                </Typography>
                <ArrowRightAltIcon />
              </Box>
              <Typography
                variant="body1"
                color="textSecondary"
                component="span"
              >
                Choose an issue
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  )
}

TheTeam.defaultProps = {}

TheTeam.propTypes = {}

export default TheTeam
