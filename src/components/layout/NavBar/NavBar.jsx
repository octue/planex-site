import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import Menu from '@material-ui/icons/Menu'
import Close from '@material-ui/icons/Close'
import useScrollPosition from '@react-hook/window-scroll'
import { Link } from '../../core'

const useStyles = makeStyles((theme) => ({
  appBar: {
    color:
      theme.palette.type === 'dark'
        ? theme.palette.text.primary
        : theme.palette.primary.contrastText,
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.background.paper
        : theme.palette.primary.main,
    transition: '0.5s ease-in-out',
  },
  logo: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    overflow: 'hidden',
  },
  logoImg: {
    height: '35px',
    paddingBottom: '3px',
    verticalAlign: 'middle',
    border: '0',
  },
  collapse: {
    [theme.breakpoints.up('md')]: {
      display: 'flex !important',
      flexBasis: 'auto',
    },
    flexGrow: '1',
    alignItems: 'center',
  },
  toolbar: {
    height: theme.spacing(8),
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'nowrap',
  },
  transparent: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none',
  },
  drawerPaper: {
    maxWidth: '80vw',
    // width: '80vw',
    // The following copied from the MUI Drawer styles...
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    flex: '1 0 auto',
    zIndex: theme.zIndex.drawer,
    WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
    position: 'fixed',
    top: 0,
    // We disable the focus ring for mouse, touch and keyboard users.
    // At some point, it would be better to keep it for keyboard users.
    // :focus-ring CSS pseudo-class will help.
    outline: 0,
  },
  drawerLinks: {
    margin: '20px 10px',
    marginTop: '0px',
  },
  drawerCloseButton: {
    width: '40px', // forces it square
    height: '40px', // forces it square
    fontSize: '24px',
    margin: theme.spacing(1.5),
  },
}))

function NavBar({ id, transparency, height, scrollTopData, children }) {
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  const appBarClasses = classNames(classes.appBar, {
    [classes.transparent]: transparency && scrollTopData < height,
  })

  const handleOpenMobile = () => {
    setMobileOpen(true)
  }

  const handleCloseMobile = () => {
    setMobileOpen(false)
  }

  const drawerClasses = {
    paper: classes.drawerPaper,
  }

  const logoComponent = (
    <Link href="/">
      <img src={theme.logos.text.dark} alt="logo" className={classes.logoImg} />
    </Link>
  )

  return (
    <AppBar className={appBarClasses} id={id}>
      <Toolbar className={classes.toolbar}>
        <Hidden smDown>
          {logoComponent}
          {children}
        </Hidden>
        <Hidden mdUp>
          {logoComponent}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleOpenMobile}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          classes={drawerClasses}
          onClose={handleCloseMobile}
        >
          <IconButton
            color="inherit"
            aria-label="close drawer"
            onClick={handleCloseMobile}
            size="small"
            className={classes.drawerCloseButton}
          >
            <Close />
          </IconButton>
          {children}
        </Drawer>
      </Hidden>
    </AppBar>
  )
}

NavBar.defaultProps = {
  id: 'navbar',
  height: 150,
  transparency: false,
}

NavBar.propTypes = {
  /**
   * Children should be a list of links / buttons
   */
  children: PropTypes.node,
  /* Number of pixels above which, if the window is scrolled and the transparency prop is `true`, the transparent appbar
   * reverts to the theme color
   */
  height: PropTypes.number,
  /**
   * Id applied to the navbar element
   */
  id: PropTypes.string,
  /**
   * If true, the appbar is initially rendered transparent (e.g. over a dark hero image)
   */
  transparency: PropTypes.bool,
}

export default NavBar
