import React from 'react'
import BasicPage from './BasicPage'
import Box from '@material-ui/core/Box'
import { SnackbarProvider } from 'notistack'
export default {
  title: 'Layout/BasicPage',
  component: BasicPage,
}

const Template = (args) => (
  <SnackbarProvider maxSnack={3}>
    <BasicPage {...args}>
      <Box m={10}>Content of the basic page goes here</Box>
    </BasicPage>
  </SnackbarProvider>
)

export const Basic = Template.bind({})
Basic.args = {}
