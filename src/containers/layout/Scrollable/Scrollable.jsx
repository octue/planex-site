import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

const useStyles = makeStyles((theme) => ({
  scrollable: {
    height: '100%',
  },
}))

function Scrollable({ children }) {
  const classes = useStyles()
  const ps = useRef()

  // function scrollTop() {
  //   const curr = ps.current
  //   if (curr) {
  //     curr.scrollTop = 0
  //   }
  // }

  return (
    <PerfectScrollbar
      className={classes.scrollable}
      containerRef={(el) => (ps.current = el)}
    >
      {children}
    </PerfectScrollbar>
  )
}

Scrollable.defaultProps = {}

Scrollable.propTypes = {}

export default Scrollable
