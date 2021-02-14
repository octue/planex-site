import React from 'react'

import IndexPage from '../pages/index'

export default {
  title: 'Pages/index',
  component: IndexPage,
}

const Template = (args) => <IndexPage {...args} />

export const Index = Template.bind({})
Index.args = {}
