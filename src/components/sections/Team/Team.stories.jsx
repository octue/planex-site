import React from 'react'
import Team from './Team'
import { team as teamFixture } from '../../../fixtures'

export default {
  title: 'Sections/Team',
  component: Team,
}

const Template = (args) => {
  console.log('Team story rendering with data', args)
  return <Team {...args} />
}

export const Basic = Template.bind({})
Basic.args = { ...teamFixture }
