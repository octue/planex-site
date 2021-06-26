import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import FooterItem from './FooterItem'
import { footerItems as menu } from '../../../../menus'

const useStyles = makeStyles((theme) => ({
  list: {
    display: 'flex',
    width: '100%',
    marginTop: theme.spacing(2),
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(1),
      justifyContent: 'flex-end',
    },
  },
  subscribe: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      flexGrow: 0,
    },
  },
  cta: {
    border: `2px solid ${theme.palette.text.secondary}`,
    paddingTop: '0px',
    paddingBottom: '0px',
    textTransform: 'none',
    marginRight: theme.spacing(1),
    height: '42px',
  },
}))

function FooterItems({ onSubscribe }) {
  const classes = useStyles()
  const theme = useTheme()
  const smallMedia = useMediaQuery(theme.breakpoints.down('xs'))

  const subscribeText = smallMedia ? 'Subscribe' : 'Subscribe to our newsletter'

  return (
    <List aria-labelledby="footer external links" className={classes.list}>
      <Box component="li" className={classes.subscribe}>
        <Button
          className={classes.cta}
          variant="outlined"
          onClick={onSubscribe}
        >
          {subscribeText}
        </Button>
      </Box>
      {menu.map((item, idx) => {
        return <FooterItem key={idx} {...item} />
      })}
    </List>
  )
}

FooterItems.defaultProps = {}

FooterItems.propTypes = {}

export default FooterItems
