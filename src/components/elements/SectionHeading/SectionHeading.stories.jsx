import React from 'react'
import SectionHeading from './SectionHeading'

export default {
  title: 'Elements/SectionHeading',
  component: SectionHeading,
}

export const Basic = (args) => (
  <>
    <SectionHeading {...args}>The Section Heading</SectionHeading>
    <p>The next paragraph</p>
  </>
)
