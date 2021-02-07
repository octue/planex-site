import React from 'react'
import AppBar from './AppBar'

export default {
  title: 'Layout/AppBar',
  component: AppBar,
}


const Template = (args) => <AppBar {...args} />


export const Simple = Template.bind({})
Simple.args = {
}

