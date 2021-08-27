import React from 'react'
import HexagonGrid from './HexagonGrid'
import { grid } from '../../../fixtures/hexagons/grid'

export default {
  title: 'Hexagons/HexagonGrid',
  component: HexagonGrid,
}

const Template = ({ ...args }) => {
  return (
    <>
      <HexagonGrid {...args} />
    </>
  )
}

export const Normal = Template.bind({})
Normal.args = { grid, variant: 'normal' }

export const Horizontal = Template.bind({})
Horizontal.args = { grid, variant: 'normal', horizontal: true }

export const Small = Template.bind({})
Small.args = { grid, variant: 'small' }
