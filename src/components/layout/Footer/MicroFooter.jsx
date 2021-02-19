import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import Copyright from 'components/site/Copyright/Copyright.jsx'

import { container, right } from 'assets/jss/material-octue'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: '0px',
  },
  container: {
    ...container,
    position: 'relative',
    zIndex: 3,
  },
  right,
}))

function MicroFooter(props) {
  const classes = useStyles()
  return (
    <footer id={props.id} className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.right}>
          <Copyright />
        </div>
      </div>
    </footer>
  )
}

MicroFooter.defaultProps = {
  id: 'footer',
}

MicroFooter.propTypes = {
  id: PropTypes.string,
}

export default MicroFooter
