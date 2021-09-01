import React from 'react'
import HexagonSvg from './HexagonSvg'
import BuildSvg from '../../../assets/images/hexagon/growth.svg'

export default {
  title: 'Hexagons/HexagonSvg',
  component: HexagonSvg,
}

const Template = ({ ...args }) => {
  return (
    <>
      <HexagonSvg url={BuildSvg} {...args} />
    </>
  )
}

export const Normal = Template.bind({})
Normal.args = { variant: 'normal' }

export const Small = Template.bind({})
Small.args = { variant: 'small' }

export const Large = Template.bind({})
Large.args = { variant: 'large' }

export const Horizontal = Template.bind({})
Horizontal.args = { horizontal: true }
