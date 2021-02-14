import React from 'react'
import Box from '@material-ui/core/Box'
import Footer from './Footer'

export default {
  title: 'Layout/Footer',
  component: Footer,
}

const Template = ({ height, otherArgs }) => (
  <Box display="flex" justifyContent="center">
    <Box style={{ backgroundColor: '#9fcbe8', width: '100vw', height }}>
      Actual content of the page (change the height prop to `50vh` or `200vh` to
      see how the footer relocates)
    </Box>
    <Footer {...otherArgs} />
  </Box>
)

export const Big = Template.bind({})
Big.args = {
  kind: 'big',
  height: '100vh',
}

export const Small = Template.bind({})
Small.args = {
  kind: 'small',
  height: '100vh',
}

export const Micro = Template.bind({})
Micro.args = {
  kind: 'micro',
  height: '100vh',
}

export const None = Template.bind({})
None.args = {
  kind: undefined,
  height: '100vh',
}
