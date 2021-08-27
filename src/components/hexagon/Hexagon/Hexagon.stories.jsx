import React from 'react'
import Hexagon from './Hexagon'
import { avatar } from '../../../fixtures/images/avatar'

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
Normal.args = { ...avatar, variant: 'normal' }

export const Horizontal = Template.bind({})
Horizontal.args = { ...avatar, horizontal: true, variant: 'normal' }

export const Small = Template.bind({})
Small.args = { ...avatar, variant: 'small' }
