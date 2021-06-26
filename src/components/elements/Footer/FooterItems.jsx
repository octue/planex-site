import React from 'react'
import { makeStyles } from '@material-ui/core'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import FooterItem from './FooterItem'
import { footerItems as menu } from '../../../../menus'
import { setCtaOpen } from '../../../containers/elements'

const useStyles = makeStyles((theme) => ({
  subscribe: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  list: {
    display: `flex`,
    justifyContent: `space-between`,
    [theme.breakpoints.up('sm')]: {
      '& li': {
        marginLeft: theme.spacing(1),
      },
    },
    [theme.breakpoints.down('sm')]: {
      // flexDirection: 'column',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      borderTop: '1px solid',
      textAlign: 'left',
      justifyContent: 'flex-start',
      '& li': {
        marginTop: theme.spacing(1),
      },
    },
  },
  cta: {
    border: `2px solid ${theme.palette.text.secondary}`,
    paddingTop: '0px',
    paddingBottom: '0px',
    textTransform: 'none',
    marginRight: theme.spacing(1),
  },
}))

function FooterItems() {
  const classes = useStyles()
  return (
    <List aria-labelledby="footer external links" className={classes.list}>
      <Box
        component="li"
        display="flex"
        p={0}
        m={0}
        className={classes.subscribe}
      >
        <Button
          size="small"
          className={classes.cta}
          variant="outlined"
          onClick={setCtaOpen}
        >
          Subscribe to our newsletter
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
