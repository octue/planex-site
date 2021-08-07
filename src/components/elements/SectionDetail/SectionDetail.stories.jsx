import React from 'react'
import SectionDetail from './SectionDetail'

export default {
  title: 'Elements/SectionDetail',
  component: SectionDetail,
}
const Template = ({ ...args }) => {
  return (
    <>
      <SectionDetail {...args} />
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  heading: "You don't need to be a materials scientist to build a LEGO® model.",
  description:
    'So why should someone modelling climate or energy systems need to be an expert coder? Yet scientists waste 95% of their day [Source:McKinsey] being general programmers, API architects and DevOps engineers. Our solution: a framework of open-source tools to create, connect, exchange and reuse analysis building blocks.',
  button: 'click me',
}
