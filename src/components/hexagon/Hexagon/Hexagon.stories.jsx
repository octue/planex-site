import React from 'react'
import Hexagon from './Hexagon'
import { avatar } from '../../../fixtures/images/avatar'

import BuildSvg from '../../../assets/images/hexagon/growth.svg'

export default {
  title: 'Hexagons/Hexagon',
  component: Hexagon,
}
const Template = ({ ...args }) => {
  return (
    <>
      <Hexagon {...args} />
    </>
  )
}

export const Normal = Template.bind({})
Normal.args = { image: avatar, variant: 'normal' }

export const Small = Template.bind({})
Small.args = { image: avatar, variant: 'small' }

export const Large = Template.bind({})
Large.args = { image: avatar, variant: 'large' }

export const SVG = Template.bind({})
SVG.args = { image: { url: BuildSvg } }

export const Horizontal = Template.bind({})
Horizontal.args = { image: avatar, horizontal: true, variant: 'normal' }
