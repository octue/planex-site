import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { footer as footerMenus } from '../../../../menus.js'
import hexToRgb from '../../../themes/hexToRgb'
import GradientStripe from '../../elements/GradientStripe'
import { Link } from '../../core/Link'
import Copyright from '../../elements/Copyright'
import FooterLinkGroup from './FooterLinkGroup'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing(1),
  },
  address: {
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    borderRadius: theme.shape.borderRadius,
    paddingLeft: theme.spacing(0.5),
    '&:hover, &:focus, &.active': {
      backgroundColor: `rgba(${hexToRgb('#ffffff')}, 0.2)`,
      color: 'inherit',
      textDecoration: 'none',
      borderLeft: `${theme.spacing(0.5)}px solid #ffffff`,
      paddingLeft: 0,
    },
  },
  addressLink: {
    textDecoration: 'none',
  },
  copyright: {
    fontSize: `${theme.spacing(1.5)}px`,
  },
  social: {
    height: '100%',
  },
  panel: {
    padding: theme.spacing(2),
  },
}))

// TODO Query location and address data out of a gatsby plugin or other configuration file

function BigFooter({ id }) {
  const classes = useStyles()
  console.log(footerMenus, footerMenus[0])
  return (
    <footer id={id} className={classes.footer}>
      <GradientStripe />
      <Container>
        <Grid container>
          {footerMenus.map((item) => (
            <Grid item xs={6} sm={3} className={classes.panel}>
              <FooterLinkGroup {...item} />
            </Grid>
          ))}
          <Grid item xs={6} sm={3} className={classes.panel}>
            <Typography variant="overline" color="textSecondary">
              Location
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.address}
            >
              <a
                href="https://www.google.co.uk/maps/place/IdeaSpace/@52.208859,0.089999,17z/data=!4m6!1m3!3m2!1s0x47d87749662a463d:0x9c891cfd7b88f6c1!2sHauser+Forum+Café!3m1!1s0x0000000000000000:0xfa0c4b40e0313172"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.addressLink}
                aria-label="View map"
                title="Address"
              >
                <List dense>
                  <ListItem>
                    <Typography variant="body2" color="textSecondary">
                      Hauser Forum
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="body2" color="textSecondary">
                      3 Charles Babbage Road
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="body2" color="textSecondary">
                      Cambridge, United Kingdom
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="body2" color="textSecondary">
                      CB3 0GT
                    </Typography>
                  </ListItem>
                </List>
              </a>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Grid
              container
              direction="column"
              justify="space-evenly"
              alignItems="center"
              className={classes.social}
            >
              <Grid item>
                <Link
                  href="https://twitter.com/octue"
                  kind="external"
                  componentType="iconButton"
                  className={classes.button}
                  aria-label="twitter"
                >
                  <FaTwitter />
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="https://linkedin.com/company/octue"
                  kind="external"
                  componentType="iconButton"
                  className={classes.button}
                  aria-label="linkedin"
                >
                  <FaLinkedin />
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="https://github.com/octue"
                  kind="external"
                  componentType="iconButton"
                  className={classes.button}
                  aria-label="github"
                >
                  <FaGithub />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Copyright className={classes.copyright} />
        </Grid>
      </Container>
    </footer>
  )
}

BigFooter.defaultProps = {
  id: 'big-footer',
}

BigFooter.propTypes = {
  id: PropTypes.string,
}

export default BigFooter
