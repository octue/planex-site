import React from 'react'
import JoinTheMovement from './JoinTheMovement'
import { join as joinFixture } from '../../../fixtures'

export default {
  title: 'Sections/JoinTheMovement',
  component: JoinTheMovement,
}

const Template = (args) => {
  console.log('JoinTheMovement story rendering with data', args)
  return <JoinTheMovement {...args} />
}

export const Basic = Template.bind({})
Basic.args = { ...joinFixture }
