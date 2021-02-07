import React from 'react'
import GradientStripe from './GradientStripe'


export default {
  title: 'Elements/GradientStripe',
  component: GradientStripe,
  parameters: {
    layout: 'fullscreen',
  }
}


export const Simple = (args) => (
  <GradientStripe {...args} />
)
