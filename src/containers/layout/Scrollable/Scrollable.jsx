import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

const useStyles = makeStyles((theme) => ({
  scrollContainer: {
    height: '100vh',
    overflowY: 'auto',
  },
}))

function Scrollable({ children }) {
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

Scrollable.defaultProps = {
  id: 'perfect-scrollbar',
}

Scrollable.propTypes = {
  id: PropTypes.string,
}

export default Scrollable
