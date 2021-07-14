import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import { makeStyles } from '@material-ui/core'
import { nav as defaultMenu } from '../../../../menus'
import NavItem from './NavItem'

const useStyles = makeStyles((theme) => ({
  list: {
    display: `flex`,
    justifyContent: `space-between`,
    [theme.breakpoints.up('sm')]: {
      '& li': {
        marginLeft: theme.spacing(1),
      },
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      // width: `calc(100% - ${theme.spacing(4)}px)`,
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      // marginBottom: theme.spacing(1),
      // marginTop: theme.spacing(1),
      borderTop: '1px solid',
      textAlign: 'left',
      justifyContent: 'flex-start',
      '& li': {
        marginTop: theme.spacing(1),
      },
    },
  },
}))

function NavItems({ menu }) {
  const classes = useStyles()
  return (
    <List
      component="nav"
      aria-labelledby="main navigation"
      className={classes.list}
    >
      {menu.map((item, idx) => {
        return <NavItem key={idx} {...item} />
      })}
    </List>
  )
}

NavItems.defaultProps = {
  menu: defaultMenu,
}

NavItems.propTypes = {
  /**
   * An array of menu descriptors to include on the page.
   * They will be listed in the order in which they appear
   * in that array.
   *
   * These should be kept in the 'menus.js' file in the root directory.
   * The default export from that file will be the default menu used here.
   */
  menu: PropTypes.arrayOf(PropTypes.object),
}

export default NavItems
