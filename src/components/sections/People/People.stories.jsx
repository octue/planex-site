import React from 'react'
import People from './People'
import { people as peopleFixture } from '../../../fixtures'

export default {
  title: 'Sections/People',
  component: People,
}

const Template = (args) => {
  console.log('People story rendering with data', args)
  return <People {...args} />
}

export const Basic = Template.bind({})
Basic.args = { ...peopleFixture }
