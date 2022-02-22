import React from 'react'
import HexagonGrid from './HexagonGrid'
import { grid } from '../../../fixtures/hexagons/grid'
import Box from '@material-ui/core/Box'

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

export const Large = Template.bind({})
Large.args = { grid, variant: 'large' }

export const Small = Template.bind({})
Small.args = { grid, variant: 'small' }

export const Horizontal = Template.bind({})
Horizontal.args = { grid, variant: 'normal', horizontal: true }

export const Clipped = () => {
  return (
    <Box width="200px" overflow="hidden">
      <HexagonGrid variant="normal" grid={grid} />
    </Box>
  )
}
