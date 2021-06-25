import React from 'react'
import Box from '@material-ui/core/Box'
import Footer from './Footer'

export default {
  title: 'Elements/Footer',
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
        This story shows how to lay out a footer with flex. This is the actual
        content of the page. Adjust the height in the control to &gt; 100 to see
        what happens when page content is longer than the viewport height.
        Switch between kinds in the controls to see different footers.
      </Box>
    </Box>
    <Footer />
  </Box>
)

export const Layout = Template.bind({})
Layout.args = {
  height: 50,
}
