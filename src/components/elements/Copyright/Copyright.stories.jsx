import React from 'react'
import Copyright from './Copyright'
import { ThemeProvider } from '@material-ui/styles'
import { darkTheme } from '../../../themes'

export default {
  title: 'Elements/Copyright',
  component: Copyright,
  parameters: {
    layout: 'fullscreen',
  },
}

export const PrimaryColor = (args) => <Copyright {...args} />
PrimaryColor.args = {
  color: 'primary',
  fixed: false,
}

export const PaperColor = (args) => (
  <div style={{ width: '100vw', height: '100vh', backgroundColor: '#b55fd9' }}>
    <ThemeProvider theme={darkTheme}>
      <Copyright {...args} />
    </ThemeProvider>
  </div>
)
PaperColor.args = {
  fixed: true,
}
