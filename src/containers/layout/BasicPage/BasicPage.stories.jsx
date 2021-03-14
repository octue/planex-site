import React from 'react'
import BasicPage from './BasicPage'
import Box from '@material-ui/core/Box'

export default {
  title: 'Layout/BasicPage',
  component: BasicPage,
}

const Template = (args) => (
  <BasicPage {...args}>
    <Box m={10}>Content of the basic page goes here</Box>
  </BasicPage>
)

export const Basic = Template.bind({})
Basic.args = {}
