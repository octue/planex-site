import React from 'react'
// import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
// import ApartmentIcon from '@material-ui/icons/Apartment'
// import DevicesOtherIcon from '@material-ui/icons/DevicesOther'
// import FolderSharedIcon from '@material-ui/icons/FolderShared'
// import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'

const useStyles = makeStyles((theme) => ({
  media: {
    height: '256px',
  },
  mediaLarge: {
    minHeight: '256px',
    height: '100%',
  },
  fullHeight: {
    height: '100%',
    width: '100%',
  },
  emptyCardContainer: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  emptyCard: {
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.background,
      height: 64,
    },
  },
  imagesColumn: {
    order: 12,
    [theme.breakpoints.up('md')]: {
      order: 0,
    },
  },
}))

function TakeWorkFurther() {
  const classes = useStyles()
  return (
    <section>
      <Container maxWidth="lg">
        <Box py={12}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6} className={classes.imagesColumn}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <Box display="flex" height="100%">
                    <Card className={classes.fullHeight}>
                      <CardMedia
                        className={classes.mediaLarge}
                        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                      />
                    </Card>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} className={classes.emptyCardContainer}>
                      <Card className={classes.emptyCard} />
                    </Grid>
                    <Grid item xs={12}>
                      <Card>
                        <CardMedia
                          className={classes.media}
                          image="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                        />
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Card>
                        <CardMedia
                          className={classes.media}
                          image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        />
                      </Card>
                    </Grid>
                    <Grid item xs={12} className={classes.emptyCardContainer}>
                      <Card className={classes.emptyCard} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box display="flex" height="100%">
                    <Card className={classes.fullHeight}>
                      <CardMedia
                        className={classes.mediaLarge}
                        image="https://images.unsplash.com/photo-1497681883844-82b4f0a359a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                      />
                    </Card>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography variant="h3" component="h3" gutterBottom={true}>
                    <Typography color="primary" variant="h3" component="span">
                      Take your work further{' '}
                    </Typography>
                    <Typography variant="h3" component="span">
                      with the Octue platform
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    Host your newly-created data services on the Octue platform.
                    It’s a simple way for academic institutions and businesses
                    to make their digital twins and apps widely available.
                    Underpinning collaboration and commercialisation.
                  </Typography>
                  <Box mt={3}>
                    <Button variant="contained" color="secondary">
                      Start now
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  )
}

TakeWorkFurther.defaultProps = {}

TakeWorkFurther.propTypes = {}

export default TakeWorkFurther
