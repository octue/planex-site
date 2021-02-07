import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import GradientStripe from 'components/site/GradientStripe/GradientStripe.jsx'
import Copyright from 'components/site/Copyright/Copyright.jsx'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'components/navigation/Link.jsx'

import Icon from '@material-ui/core/Icon'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'

import IconButton from '@material-ui/core/IconButton'

import { container } from 'assets/jss/material-octue'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    zIndex: 3,
    ...container,
    position: 'relative',
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  address: {
    color: theme.palette.text.secondary,
    textDecoration: 'none',
  },
  copyright: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  social: {
    height: '100%',
  },
}))

function BigFooter(props) {
  const classes = useStyles()
  return (
    <footer id={props.id} className={classes.footer}>
      <GradientStripe />
      <div className={classes.container}>
        <Grid container>
          <Grid item xs={6} sm={3}>
            <Typography variant="overline" color="textSecondary">
              Company
            </Typography>
            <List dense>
              <ListItem component={Link} variant="caption" color="textSecondary" to="/about/">About</ListItem>
              {/* <ListItem component={Link} variant="caption" color="textSecondary" to="/press/">Press</ListItem> */}
              <ListItem component={Link} variant="caption" color="textSecondary" to="/hse/">HS&E</ListItem>
              <ListItem component={Link} variant="caption" color="textSecondary" to="/quality/">Quality</ListItem>
            </List>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="overline" color="textSecondary">
              Support
            </Typography>
            <List dense>
              <ListItem component={Link} variant="caption" color="textSecondary" to="/contact/">Contact</ListItem>
              <ListItem component={Link} variant="caption" color="textSecondary" to="/help/">Help</ListItem>
              <ListItem component={Link} variant="caption" color="textSecondary" to="/privacy/">Privacy</ListItem>
              <ListItem component={Link} variant="caption" color="textSecondary" to="/terms/">Terms & Conditions</ListItem>
            </List>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="overline" color="textSecondary">
              Location
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <a
                href="https://www.google.co.uk/maps/place/IdeaSpace/@52.208859,0.089999,17z/data=!4m6!1m3!3m2!1s0x47d87749662a463d:0x9c891cfd7b88f6c1!2sHauser+Forum+Café!3m1!1s0x0000000000000000:0xfa0c4b40e0313172"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.address}
              >
                <List dense>
                  <ListItem><Typography variant="caption" color="textSecondary">Hauser Forum</Typography></ListItem>
                  <ListItem><Typography variant="caption" color="textSecondary">3 Charles Babbage Road</Typography></ListItem>
                  <ListItem><Typography variant="caption" color="textSecondary">Cambridge, United Kingdom</Typography></ListItem>
                  <ListItem><Typography variant="caption" color="textSecondary">CB3 0GT</Typography></ListItem>
                </List>
              </a>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Grid container direction="column" justify="space-evenly" alignItems="center" className={classes.social}>
              <Grid item>
                <IconButton component="a" href="https://twitter.com/octue" target="_blank" rel="noopener noreferrer" aria-label="twitter">
                  <Icon className="fab fa-twitter" fontSize="inherit" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton component="a" href="https://linkedin.com/company/octue" target="_blank" rel="noopener noreferrer" aria-label="linkedin">
                  <Icon className="fab fa-linkedin" fontSize="inherit" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton component="a" href="https://github.com/octue" target="_blank" rel="noopener noreferrer" aria-label="github">
                  <Icon className="fab fa-github" fontSize="inherit" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item className={classes.copyright}>
            <Copyright />
          </Grid>
        </Grid>
      </div>
    </footer>
  )
}

BigFooter.defaultProps = {
  id: 'footer',
}

BigFooter.propTypes = {
  id: PropTypes.string,
}

export default BigFooter
