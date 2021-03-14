import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import ScrollablePage from '../ScrollablePage/ScrollablePage'

function Main({ offset, children, ...rest }) {
  const theme = useTheme()

  const offsetMargin = `${theme.spacing(offset ? 8 : 0)}px`

  return (
    <Box
      component="main"
      {...rest}
      height={`calc(100vh - ${offsetMargin})`}
      mt={offsetMargin}
    >
      <ScrollablePage>{children}</ScrollablePage>
    </Box>
  )
}

Main.defaultProps = {
  offset: false,
}

Main.propTypes = {
  /**
   * If true, offsets the children of the main panel contents downward by the height of the appBar
   * (providing the themed appBar is used)
   */
  offset: PropTypes.bool,
  /**
   * Child elements rendered into the Main container
   */
  children: PropTypes.node.isRequired,
}

export default Main
