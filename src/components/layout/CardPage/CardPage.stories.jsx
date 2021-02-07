import React from 'react'
import CardPage from './CardPage'


export default {
  title: 'Layout/CardPage',
  component: CardPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
}


const Template = (args) => (
  <CardPage {...args}>
    <div style={{ height: '200px', width: '300px' }}>
      Render a form or whatever here
    </div>
  </CardPage>
)


export const Simple = Template.bind({})
Simple.args = {
}
