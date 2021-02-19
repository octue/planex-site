import React from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import { ThemeProvider } from '@material-ui/styles'
import { lightTheme, darkTheme } from '../../../themes'
import TwitterEmbed from './TwitterEmbed'

export default {
  title: 'Elements/TwitterEmbed',
  component: TwitterEmbed,
}

const Template = ({ theme, ...args }) => {
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ width: '100%', height: '600px', padding: '50px' }}>
        <Box width="400px">
          <TwitterEmbed {...args} />
        </Box>
      </Paper>
    </ThemeProvider>
  )
}

export const Light = Template.bind({})
Light.args = {
  theme: lightTheme,
}

export const Dark = Template.bind({})
Dark.args = {
  theme: darkTheme,
}
