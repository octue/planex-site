import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import classNames from 'classnames'
import Box from '@material-ui/core/Box'
import { useLocation } from '@reach/router'
import Link from '../../core/Link'
import hexToRgb from '../../../themes/hexToRgb'

const useStyles = makeStyles((theme) => ({
  link: {
    color: 'inherit',
    width: '100%',
    padding: theme.spacing(1.5),
    fontWeight: '400',
    fontSize: '14px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    borderRadius: theme.shape.borderRadius,
    '&:hover, &:focus, &.active': {
      backgroundColor: `rgba(${hexToRgb('#ffffff')}, 0.1)`,
      color: 'inherit',
      textDecoration: 'none',
    },
    [theme.breakpoints.up('md')]: {
      '&:hover, &:focus, &.active': {
        borderBottom: `${theme.spacing(0.5)}px solid`,
        paddingBottom: theme.spacing(1),
      },
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
      '& > span:first-child': {
        justifyContent: 'flex-start',
      },
      '&:hover, &:focus, &.active': {
        borderLeft: `${theme.spacing(0.5)}px solid`,
        paddingLeft: theme.spacing(1),
      },
    },
  },
  icon: {
    fontSize: '18px',
  },
  iconSpaced: {
    marginRight: theme.spacing(1),
  },
  // icon: {
  //   fontSize: '24px',
  //   border: '1px solid',
  //   marginRight: theme.spacing(0.5),
  // },
  // button: {
  //   position: 'relative',
  //   fontWeight: '400',
  //   fontSize: '12px',
  //   textTransform: 'uppercase',
  //   lineHeight: '20px',
  //   textDecoration: 'none',
  //   margin: '0px',
  //   [theme.breakpoints.down('sm')]: {
  //     width: 'calc(100% - 30px)',
  //     marginLeft: '15px',
  //     marginBottom: '5px',
  //     marginTop: '5px',
  //     textAlign: 'left',
  //     '& > span:first-child': {
  //       justifyContent: 'flex-start',
  //     },
  //   },
  // },
}))

function NavItem({ href, kind, style, icon, text }) {
  const classes = useStyles()

  const location = useLocation()
  const active = location.pathname === href

  const linkClasses = classNames(classes[style], { active: active })

  const iconClasses = classNames(classes.icon, {
    [classes.iconSpaced]: icon && text,
  })

  const TheIcon = icon // Because `icon` would compile as a dom tag
  return (
    <Box component="li" display="inline-flex" p={0} m={0}>
      <Link
        kind={kind || 'site'}
        href={href}
        componentType="iconButton"
        className={linkClasses}
      >
        {icon ? <TheIcon className={iconClasses} /> : null}
        {text || null}
      </Link>
    </Box>
  )
}

NavItem.defaultProps = {
  style: 'link',
}

NavItem.propTypes = {
  style: PropTypes.oneOf(['link', 'icon', 'button']),
}

export default NavItem
