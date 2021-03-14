import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core'

import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

const useStyles = makeStyles((theme) => ({
  scrollContainer: {
    height: '100vh',
    overflowY: 'auto',
  },
}))

function ScrollablePage({ children }) {
  const classes = useStyles()
  const ps = useRef()

  function scrollTop() {
    const curr = ps.current
    if (curr) {
      curr.scrollTop = 0
    }
  }
  return (
    <div className={classes.scrollContainer}>
      <PerfectScrollbar containerRef={(el) => (ps.current = el)}>
        {children}
      </PerfectScrollbar>
    </div>
  )
}

ScrollablePage.defaultProps = {}

ScrollablePage.propTypes = {}

export default ScrollablePage
