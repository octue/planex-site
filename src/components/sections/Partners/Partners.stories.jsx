import React from 'react'
import Partners from './Partners'
import { partners as partnersFixture } from '../../../fixtures'

export default {
  title: 'Sections/Partners',
  component: Partners,
}

const Template = (args) => {
  console.log('Partners story rendering with data', args)
  return <Partners {...args} />
}

export const Basic = Template.bind({})
Basic.args = { ...partnersFixture }
