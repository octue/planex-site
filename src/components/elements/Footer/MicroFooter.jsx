import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Copyright from '../../elements/Copyright'

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.background.paper
        : theme.palette.primary.main,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  typography: {
    fontSize: `${theme.spacing(1.5)}px`,
    color:
      theme.palette.type === 'dark'
        ? theme.palette.text.secondary
        : theme.palette.primary.contrastText,
  },
}))

function MicroFooter({ id, ...rest }) {
  const classes = useStyles()
  return (
    <Box component="footer" id={id} className={classes.footer} {...rest}>
      <Copyright className={classes.typography} />
    </Box>
  )
}

MicroFooter.defaultProps = {
  id: 'footer',
}

MicroFooter.propTypes = {
  id: PropTypes.string,
}

export default MicroFooter
