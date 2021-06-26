import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'

import Box from '@material-ui/core/Box'
import { Link } from '../../core/Link'
import hexToRgb from '../../../themes/hexToRgb'
import { footerLinks as menu } from '../../../../menus'

const useStyles = makeStyles((theme) => ({
  list: {
    display: `flex`,
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      textAlign: 'left',
      '& li': {
        marginTop: theme.spacing(1),
      },
    },
  },
  link: {
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
        <Box component="li" display="flex" className={classes.item}>
          <Link
            className={classes.link}
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
