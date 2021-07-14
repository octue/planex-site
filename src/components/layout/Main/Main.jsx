import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { Scrollable } from '../../../containers'

function Main({ offset, scrollable, scrollTopData, children, ...rest }) {
  const theme = useTheme()

  const offsetMargin = `${theme.spacing(offset ? 8 : 0)}px`

  return scrollable ? (
    <Box
      component="main"
      height={`calc(100vh - ${offsetMargin})`}
      mt={offsetMargin}
    >
      <Scrollable scrollTopData={scrollTopData}>
        <Box {...rest}>{children}</Box>
      </Scrollable>
    </Box>
  ) : (
    <Box
      component="main"
      height={`calc(100vh - ${offsetMargin})`}
      mt={offsetMargin}
      {...rest}
    >
      {children}
    </Box>
  )
}

Main.defaultProps = {
  offset: false,
  scrollable: true,
}

Main.propTypes = {
  /**
   * If true, offsets the children of the main panel contents downward by the height of the appBar
   * (providing the themed appBar is used)
   */
  offset: PropTypes.bool,
  /**
   * If true, content will be scrollable with a perfect scrollbar. If false, content should be a fixed height.
   */
  scrollable: PropTypes.bool,
  /**
   * Child elements rendered into the Main container
   */
  children: PropTypes.node.isRequired,
}

export default Main
