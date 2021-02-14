import React from 'react'
import AppBar from './AppBar'
import Box from '@material-ui/core/Box'

export default {
  title: 'Layout/AppBar',
  component: AppBar,
}

const Template = (args) => (
  <>
    <AppBar {...args} />
    <Box backgroundColor="#234aef" width="100vw" height="100px">
      <p>
        this text is in the hero section and should only be visible with
        transparency enabled in the appbar
      </p>
    </Box>
    <Box backgroundColor="#aef234" width="100vw" height="100px">
      <p>
        this text is also in the hero section, and should be visible with the
        appbar transparent or not
      </p>
    </Box>
  </>
)

export const Simple = Template.bind({})
Simple.args = {}
