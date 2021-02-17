import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import withStyles from '@material-ui/core/styles/withStyles'
import Link from 'components/navigation/Link.jsx'
import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core'
// import { ThemeProvider } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import Menu from '@material-ui/icons/Menu'
import Close from '@material-ui/icons/Close'
import useScrollPosition from '@react-hook/window-scroll'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const useStyles = makeStyles((theme) => ({
  navLink: {
    color: 'inherit',
    position: 'relative',
    padding: '0.9375rem',
    fontWeight: '400',
    fontSize: '12px',
    textTransform: 'uppercase',
    lineHeight: '20px',
    textDecoration: 'none',
    margin: '0px',
    display: 'inline-flex',
    '&:hover,&:focus': {
      color: 'inherit',
    },
    '& .fab,& .far,& .fal,& .fas,& .material-icons': {
      position: 'relative',
      top: '2px',
      marginTop: '-4px',
      marginRight: '4px',
      marginBottom: '0px',
      fontSize: '1.25rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 30px)',
      marginLeft: '15px',
      marginBottom: '8px',
      marginTop: '8px',
      textAlign: 'left',
      '& > span:first-child': {
        justifyContent: 'flex-start',
      },
    },
    '& svg': {
      marginRight: '3px',
      width: '20px',
      height: '20px',
    },
  },
  navLinkJustIcon: {
    '& .fab,& .far,& .fal,& .fas,& .material-icons': {
      marginRight: '0px',
    },
    '& svg': {
      marginRight: '0px',
    },
  },
  navButton: {
    position: 'relative',
    fontWeight: '400',
    fontSize: '12px',
    textTransform: 'uppercase',
    lineHeight: '20px',
    textDecoration: 'none',
    margin: '0px',
    display: 'inline-flex',
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 30px)',
      marginLeft: '15px',
      marginBottom: '5px',
      marginTop: '5px',
      textAlign: 'left',
      '& > span:first-child': {
        justifyContent: 'flex-start',
      },
    },
    '& $icons': {
      marginRight: '3px',
    },
  },
  navLinkActive: {
    '&, &:hover, &:focus,&:active ': {
      color: 'inherit',
      backgroundColor: `rgba(${hexToRgb(whiteColor)}, 0.1)`,
    },
  },
  icon: {
    width: '20px',
    height: '20px',
    marginRight: '14px',
  },
}))

function NavLink({ href, target, rel, iconComponent, text }) {
  const classes = useStyles()

  return (
    <Link href={href} target={target} rel={target} className={classes.link}>
      <iconComponent className={classes.icon} /> {text}
    </Link>
  )
}

NavLink.defaultProps = {}

NavLink.propTypes = {}

export default NavLink
