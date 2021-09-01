import React from 'react'
import GradientHero from './GradientHero'
import { hero as heroFixture } from '../../../fixtures'

export default {
  title: 'Sections/GradientHero',
  component: GradientHero,
}

const Template = (args) => {
  return <GradientHero {...args} />
}

export const FullHeight = Template.bind({})
FullHeight.args = {
  ...heroFixture,
}

export const Banner = Template.bind({})
Banner.args = {
  ...heroFixture,
  fullHeight: false,
}
