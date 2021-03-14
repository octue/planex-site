import React from 'react'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: '100%',
    height: '256px',
    marginBottom: theme.spacing(2),
  },
}))

function TheTeam() {
  const classes = useStyles()
  return (
    <section id="team">
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
              <Avatar
                alt=""
                variant="rounded"
                src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd91&w=500&ah=500&q=80"
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
              <Avatar
                alt=""
                variant="rounded"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&w=500&ah=500&q=80"
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
              <Avatar
                alt=""
                variant="rounded"
                src="https://images.unsplash.com/photo-1560298803-1d998f6b5249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd91&w=500&ah=500&q=80"
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
              <Avatar
                alt=""
                variant="rounded"
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd91&w=500&ah=500&q=80"
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
