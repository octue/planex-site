import React from 'react'
import SimpleHexagon from './SimpleHexagon'
import HexagonSvg from './HexagonSvg'
import MultipleHexagonWithImage from './MultipleHexagonWithImage'
import BuildSvg from '../../assets/images/hexagon/growth.svg'
import TripleHexagon from './TripleHexagon'
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
      <HexagonSvg svg={BuildSvg} />
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

export const TripleHexagonImage = () => {
  return (
    <>
      <TripleHexagon />
    </>
  )
}
