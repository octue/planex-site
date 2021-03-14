import React from 'react'
import Box from '@material-ui/core/Box'
import Fullscreenable from './Fullscreenable'

export default {
  title: 'Layout/Fullscreenable',
  component: Fullscreenable,
  parameters: { actions: { argTypesRegex: '^on.*' } },
}

const Template = (args) => (
  <Box display="flex" justifyContent="center">
    <Box style={{ backgroundColor: '#9FE5CC', width: 500, height: 200 }}>
      <Fullscreenable {...args}>
        <p>
          This text is inside the fullscreenable. Change the fullscreen prop to
          see what happens.
        </p>
      </Fullscreenable>
    </Box>
  </Box>
)

export const Simple = Template.bind({})
Simple.args = {}
