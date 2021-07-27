import React from 'react'
import SectionTitle from './SectionTitle'

export default {
  title: 'Elements/SectionTitle',
  component: SectionTitle,
}

export const Example = (args) => (
  <>
    <SectionTitle {...args}>The Section Title</SectionTitle>
    <p>The next paragraph</p>
  </>
)
