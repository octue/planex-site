import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ApartmentIcon from '@material-ui/icons/Apartment'
import DevicesOtherIcon from '@material-ui/icons/DevicesOther'
import FolderSharedIcon from '@material-ui/icons/FolderShared'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'

function TimeToBuild() {
  return (
    <section id="time-to-build">
      <Container maxWidth="lg">
        <Box py={6}>
          <Box textAlign="center" mb={8}>
            <Container maxWidth="sm">
              {/*<Typography variant="overline" color="textSecondary"></Typography>*/}
              <Typography variant="h2" component="h2" gutterBottom={true}>
                Time to build together
              </Typography>
              {/*<Typography variant="subtitle1" color="textSecondary" paragraph={true}></Typography>*/}
            </Container>
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <Box mb={2}>
                  <ApartmentIcon color="primary" fontSize="large" />
                </Box>
                <Typography variant="h3" component="h3" gutterBottom={true}>
                  Build breakthroughs{' '}
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  color="textSecondary"
                >
                  Cut the time and energy spent doing data, and increase the
                  time for discovery.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <Box mb={2}>
                  <DevicesOtherIcon color="primary" fontSize="large" />
                </Box>
                <Typography variant="h3" component="h3" gutterBottom={true}>
                  Build business{' '}
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  color="textSecondary"
                >
                  Maximise the value of data by turning your code into data
                  services, like digital twins.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <Box mb={2}>
                  <FolderSharedIcon color="primary" fontSize="large" />
                </Box>
                <Typography variant="h3" component="h3" gutterBottom={true}>
                  Build collaboration
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  color="textSecondary"
                >
                  Our open source approach makes it easier to collaborate
                  globally and across disciplines for faster progress on shared
                  challenges, like climate change.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <Box mb={2}>
                  <BusinessCenterIcon color="primary" fontSize="large" />
                </Box>
                <Typography variant="h3" component="h3" gutterBottom={true}>
                  Build growth{' '}
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  color="textSecondary"
                >
                  Accelerate your impact in the renewable energy field with our
                  combination of digital and sector expertise.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  )
}

TimeToBuild.defaultProps = {}

TimeToBuild.propTypes = {}

export default TimeToBuild
