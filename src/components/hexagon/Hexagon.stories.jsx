import React from 'react'
import SimpleHexagon from './SimpleHexagon'
import HexagonSvg from './HexagonSvg'
import MultipleHexagonWithImage from './MultipleHexagonWithImage'
export default {
  title: 'Hexagon',
  component: SimpleHexagon,
}
const Template = ({ ...args }) => {
  return (
    <>
      <SimpleHexagon />
    </>
  )
}

export const Simple = Template.bind({})
Simple.args = {}

export const HexagonWithSvg = () => {
  return (
    <>
      <HexagonSvg />
    </>
  )
}

export const MultipleHexagonImage = () => {
  return (
    <>
      <MultipleHexagonWithImage />
    </>
  )
}
