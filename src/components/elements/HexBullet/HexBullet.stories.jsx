import React from 'react'
import HexBullet from './HexBullet'
import { hexBullet as hexBulletFixture } from '../../../fixtures'

export default {
  title: 'Elements/HexBullet',
  component: HexBullet,
}

const Template = (args) => <HexBullet {...args} />

export const SVGBullet = Template.bind({})
SVGBullet.args = {
  ...hexBulletFixture,
}
