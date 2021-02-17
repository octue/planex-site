import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backGroundColor: theme.palette.background.default,
  },
  offset: {
    ...theme.mixins.toolbar,
    height: theme.spacing(8), // adjusts for navbar rather than default appbar
  },
}))

function Main({ appBarOffset, children }) {
  const classes = useStyles()
  return (
    <>
      {appBarOffset ? <div className={classes.offset} /> : null}
      <main className={classes.content}>{children}</main>
    </>
  )
}

Main.defaultProps = {
  appBarOffset: false,
}

Main.propTypes = {
  /**
   * If true, offsets the children of the main panel contents downward by the height of the appBar
   * (providing the themed appBar is used)
   */
  appBarOffset: PropTypes.bool,
  /**
   * Child elements rendered into the Main container
   */
  children: PropTypes.node.isRequired,
}

export default Main
