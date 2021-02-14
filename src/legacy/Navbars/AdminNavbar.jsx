/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden'
import Menu from '@material-ui/icons/Menu'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

import Button from 'components/site/CustomButtons/Button.jsx'

import NavSearch from 'containers/site/NavSearch.js'

import adminNavbarStyle from 'assets/jss/material-octue/components/adminNavbarStyle.jsx'

function AdminNavbar({ ...props }) {
  const { classes, color, rtlActive } = props
  const appBarClasses = classNames({ [` ${classes[color]}`]: color })
  const sidebarMinimize = `${classes.sidebarMinimize} ${classNames({
    [classes.sidebarMinimizeRTL]: rtlActive,
  })}`
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden smDown implementation="css">
          <div className={sidebarMinimize}>
            {props.miniActive ? (
              <Button
                justIcon
                round
                color="transparent"
                onClick={props.sidebarMinimize}
              >
                <KeyboardArrowRight className={classes.sidebarMiniIcon} />
              </Button>
            ) : (
              <Button
                justIcon
                round
                color="transparent"
                onClick={props.sidebarMinimize}
              >
                <KeyboardArrowLeft className={classes.sidebarMiniIcon} />
              </Button>
            )}
          </div>
        </Hidden>
        <div className={classes.flex} />
        <Hidden smDown implementation="css">
          <NavSearch />
        </Hidden>
        <Hidden mdUp implementation="css">
          <Button
            className={classes.appResponsive}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </Button>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

AdminNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  rtlActive: PropTypes.bool,
  brandText: PropTypes.string,
  miniActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  sidebarMinimize: PropTypes.func,
}

export default withStyles(adminNavbarStyle)(AdminNavbar)
