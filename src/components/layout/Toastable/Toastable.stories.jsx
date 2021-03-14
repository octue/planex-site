import React from 'react'
import Box from '@material-ui/core/Box'
import Toastable from './Fullscreenable'

export default {
  title: 'Layout/Fullscreenable',
  component: Toastable,
  parameters: { actions: { argTypesRegex: '^on.*' } },
}

const Template = (args) => (
  <Box display="flex" justifyContent="center">
    <Box style={{ backgroundColor: '#9FE5CC', width: 500, height: 200 }}>
      <Toastable {...args}>
        <p>
          This text is inside the fullscreenable. Change the fullscreen prop to
          see what happens.
        </p>
      </Toastable>
    </Box>
  </Box>
)

export const Simple = Template.bind({})
Simple.args = {}
