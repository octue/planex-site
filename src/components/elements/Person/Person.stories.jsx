import React from 'react'
import Person from './Person'
import { team as teamFixture } from '../../../fixtures'

export default {
  title: 'Elements/Person',
  component: Person,
}

const Template = (args) => {
  console.log('Person story rendering with data', args)
  return <Person {...args} />
}

export const Basic = Template.bind({})
Basic.args = { ...teamFixture.people[0] }
