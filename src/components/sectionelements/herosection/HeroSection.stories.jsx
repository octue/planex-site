import React from 'react'
import HeroSection from './HeroSection'

import image from '../../../assets/images/backgrounds/img.png'

export default {
  title: 'Sections/HeroSection',
  component: HeroSection,
}

const Template = (args) => {
  return <HeroSection {...args} Image={image} />
}

export const Basic = Template.bind({})
Basic.args = {
  heading: "The climate can't wait.",
  description: "That's why we're a non-profit.",
}
