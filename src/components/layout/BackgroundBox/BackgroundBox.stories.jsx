import React from 'react'

import BackgroundBox from './BackgroundBox'


export default {
  title: 'Layout/BackgroundBox',
  component: BackgroundBox,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
}

const Template = (args) => <BackgroundBox {...args} />

export const Simple = Template.bind({})
Simple.args = {
}
