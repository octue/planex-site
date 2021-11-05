import React from 'react'
import TwoColumn from './TwoColumn'
import { twoColumn as twoColumnFixture } from '../../../fixtures/sections/twoColumn'

export default {
  title: 'Sections/TwoColumn',
  component: TwoColumn,
}

const Template = (args) => {
  console.log('Rendering TwoColumn section with args', args)
  return <TwoColumn {...args} />
}

export const Basic = Template.bind({})
Basic.args = {
  ...twoColumnFixture,
}
