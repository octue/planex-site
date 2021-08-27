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
      <HexagonSvg svg={BuildSvg} {...args} />
    </>
  )
}

export const Normal = Template.bind({})
Normal.args = { variant: 'normal' }

export const Small = Template.bind({})
Small.args = { variant: 'small' }
