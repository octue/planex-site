import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'

import { Link } from '../../core/Link'
import hexToRgb from '../../../themes/hexToRgb'

const useStyles = makeStyles((theme) => ({
  // TODO Consolidate this repeating style block to have just a generalised NavLink component used across the board.
  item: {
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    borderRadius: theme.shape.borderRadius,
    paddingLeft: theme.spacing(1.5),
    '&:hover, &:focus, &.active': {
      backgroundColor: `rgba(${hexToRgb('#ffffff')}, 0.2)`,
      // color: 'inherit',
      textDecoration: 'none',
      borderLeft: `${theme.spacing(0.5)}px solid #ffffff`,
      paddingLeft: theme.spacing(1),
    },
  },
}))

function FooterLinkGroup({ text, submenu }) {
  const classes = useStyles()
  return (
    <>
      <Typography variant="overline" color="textSecondary">
        {text}
      </Typography>
      <List dense>
        {submenu.map((item) => (
          <ListItem
            component={Link}
            color="textSecondary"
            href={item.href}
            className={classes.item}
          >
            {item.text}
          </ListItem>
        ))}
      </List>
    </>
  )
}

FooterLinkGroup.defaultProps = {}

FooterLinkGroup.propTypes = {
  text: PropTypes.string.isRequired,
  submenu: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default FooterLinkGroup
