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
  drawerLinks: {
    margin: '20px 10px',
    marginTop: '0px',
  },
  drawerCloseButton: {
    margin: theme.spacing(1),
  },
}))

function NavBar({ id, transparency, height, children }) {
  const classes = useStyles()
  const theme = useTheme()
  const scrollY = useScrollPosition(transparency ? 20 : 1) // fps
  const [mobileOpen, setMobileOpen] = useState(false)

  const appBarClasses = classNames(classes.appBar, {
    [classes.transparent]: transparency && scrollY < height,
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
    <img src={theme.logos.text.dark} alt="logo" className={classes.logoImg} />
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
            className={classes.drawerCloseButton}
          >
            <Close />
          </IconButton>
          <div className={classes.drawerLinks}>{children}</div>
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
