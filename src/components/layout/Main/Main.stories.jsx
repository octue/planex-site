import React from 'react'
import Box from '@material-ui/core/Box'

import NavBar from '../../../components/layout/NavBar'
import Main from './Main'

export default {
  title: 'Layout/Main',
  component: Main,
  parameters: {
    layout: 'fullscreen',
  },
}

export const MainView = (args) => {
  return (
    <>
      <NavBar />
      <Main {...args}>
        <Box width="100vw" height="140px" backgroundColor="#9de0e7">
          Here's a box within main. See how it's below the appbar? Change the
          appBarOffset prop to see it up under.
        </Box>
        <Box display="flex" flexDirection="row">
          <Box flexGrow={1} p={4} backgroundColor="#9de0e7">
            And here's a flex growing box, growing row-wise, which is down the
            columns. Because flex.
          </Box>
        </Box>
      </Main>
    </>
  )
}
MainView.args = {
  appBarOffset: true,
}
