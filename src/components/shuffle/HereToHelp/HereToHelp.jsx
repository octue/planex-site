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

const useStyles = makeStyles((theme) => ({
  card: {
    height: 512,
  },
}))

function HereToHelp() {
  const classes = useStyles()
  return (
    <section>
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
                    <Button variant="contained" color="secondary">
                      Let's connect
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  image="https://images.unsplash.com/photo-1497681883844-82b4f0a359a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  className={classes.card}
                />
              </Card>
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
