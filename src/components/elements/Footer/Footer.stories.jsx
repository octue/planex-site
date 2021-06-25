import React from 'react'
import Box from '@material-ui/core/Box'
import Footer from './Footer'

export default {
  title: 'Layout/Footer',
  component: Footer,
}

const Template = ({ ...args }) => (
  // This flexbox arrangement is the simplest way of getting the footer to stick to the bottom of the page,
  // but not cover content that is longer than the page.
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    style={{ minHeight: '100vh' }}
  >
    <Box component="main">
      <Box
        style={{
          backgroundColor: '#6d9fbb',
          width: '100vw',
          height: `${args.height}vh`,
        }}
      >
        Actual content of the page. Adjust the height in the control to > 100 to
        see what happens when page content is longer than the viewport height.
        Switch between kinds in the controls to see different footers.
      </Box>
    </Box>
    <Footer kind={args.kind} />
  </Box>
)

export const Simple = Template.bind({})
Simple.args = {
  kind: 'micro',
  height: 50,
}
