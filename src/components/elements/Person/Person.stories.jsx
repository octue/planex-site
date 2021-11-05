import React from 'react'
import Person from './Person'
import { people as peopleFixture } from '../../../fixtures'

export default {
  title: 'Elements/Person',
  component: Person,
}

const Template = (args) => {
  console.log('Person story rendering with data', args)
  return <Person {...args} />
}

export const Basic = Template.bind({})
Basic.args = { ...peopleFixture.people[0] }
