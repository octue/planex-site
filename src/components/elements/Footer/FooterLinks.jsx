import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'

import Box from '@material-ui/core/Box'
import { Link } from '../../core/Link'
import hexToRgb from '../../../themes/hexToRgb'
import { footerLinks as menu } from '../../../../menus'

const useStyles = makeStyles((theme) => ({
  list: {
    display: `flex`,
    [theme.breakpoints.up('sm')]: {
      '& li': {},
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      borderTop: `1px solid ${theme.palette.text.secondary}`,
      textAlign: 'left',
      justifyContent: 'flex-start',
      '& li': {
        marginTop: theme.spacing(1),
      },
    },
  },
  // TODO Consolidate this repeating style block to have just a generalised NavLink component used across the board.
  li: {
    padding: 0,
  },
  item: {
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    width: '100%',
    borderRadius: theme.shape.borderRadius,
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    '&:hover, &:focus, &.active': {
      backgroundColor: `rgba(${hexToRgb('#ffffff')}, 0.2)`,
      textDecoration: 'none',
    },
  },
}))

function FooterLinks() {
  const classes = useStyles()
  return (
    <List className={classes.list}>
      {menu.map((item) => (
        <Box component="li" display="inline-flex" p={0} mx={1}>
          <Link
            className={classes.item}
            color="textPrimary"
            href={item.href}
            kind={item.kind}
          >
            <Typography variant="subtitle2">{item.text}</Typography>
          </Link>
        </Box>
      ))}
    </List>
  )
}

FooterLinks.defaultProps = {}

FooterLinks.propTypes = {
  text: PropTypes.string.isRequired,
  submenu: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default FooterLinks
