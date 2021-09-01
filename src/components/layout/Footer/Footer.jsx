import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { Copyright } from '../../elements'
import { LogoLink } from '../../core'
import FooterItems from './FooterItems'
import FooterLinks from './FooterLinks'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.default,
  },
  box: {
    display: `flex`,
    flexDirection: 'row',
    justifyContent: `space-between`,
    width: '100%',
    flexWrap: 'wrap',
  },
  logo: {
    order: 1,
    flexBasis: '100%',
    [theme.breakpoints.up('sm')]: {
      flexBasis: '20%',
    },
  },
  items: {
    order: 2,
    flexBasis: '100%',
    [theme.breakpoints.up('sm')]: {
      flexBasis: '80%',
      marginTop: `-${theme.spacing(1.5)}px`,
    },
  },
  copyright: {
    order: 4,
    paddingTop: theme.spacing(1.5),
    flexBasis: '100%',
    [theme.breakpoints.up('sm')]: {
      flexBasis: '30%',
      order: 3,
    },
  },
  links: {
    order: 3,
    flexBasis: '100%',
    [theme.breakpoints.up('sm')]: {
      flexBasis: '70%',
      order: 4,
    },
  },
}))

function Footer({ id, onSubscribe }) {
  const classes = useStyles()

  return (
    <footer id={id} className={classes.footer}>
      <Container>
        <Box className={classes.box}>
          <Box className={classes.logo}>
            <LogoLink />
          </Box>
          <Box className={classes.items}>
            <FooterItems onSubscribe={onSubscribe} />
          </Box>
          <Box className={classes.copyright}>
            <Copyright />
          </Box>
          <Box className={classes.links}>
            <FooterLinks />
          </Box>
        </Box>
      </Container>
    </footer>
  )
}

Footer.defaultProps = {
  id: 'footer',
  onSubscribe: () => console.log('clicked subscribe'),
}

Footer.propTypes = {
  id: PropTypes.string,
  onSubscribe: PropTypes.func,
}

export default Footer
