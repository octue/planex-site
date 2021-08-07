import React from 'react'
import GradientHero from './GradientHero'

import image from '../../../assets/images/backgrounds/img.png'

export default {
  title: 'Sections/GradientHero',
  component: GradientHero,
}

const Template = (args) => {
  return <GradientHero {...args} Image={image} />
}

export const Basic = Template.bind({})
Basic.args = {
  heading: "The climate can't wait.",
  description: "That's why we're a non-profit.",
}
