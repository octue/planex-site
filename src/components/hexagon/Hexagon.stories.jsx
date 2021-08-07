import React from 'react'
import SimpleHexagon from './SimpleHexagon'
import HexagonSvg from './HexagonSvg'
import MultipleHexagonWithImage from './MultipleHexagonWithImage'
import BuildSvg from '../../assets/images/hexagon/growth.svg'
import TripleHexagon from './TripleHexagon'
import SimpleSmallHexagon from './SimpleSmallHexagon'
import ReverseMultipleHexagonWithImage from './ReverseMultipleHexagonWithImage'
import HexagonGrid from './HexagonGrid'

import Image1 from '../../assets/images/hexagon/Hero1.png'
import Image2 from '../../assets/images/hexagon/Hero2.png'
import Image3 from '../../assets/images/hexagon/Hero3.png'
import Image4 from '../../assets/images/hexagon/Hero7.png'
import Image5 from '../../assets/images/hexagon/Hero5.png'
import Image6 from '../../assets/images/hexagon/Hero6.png'

export default {
  title: 'Elements/Hexagon',
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

export const ReverseMultipleHexagonImage = () => {
  return (
    <>
      <ReverseMultipleHexagonWithImage />
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

export const SmallHexagon = () => {
  return (
    <>
      <SimpleSmallHexagon />
    </>
  )
}

export const HexagonWithGrid = () => {
  const gridObjectXY = [
    {
      x: 1,
      y: 1,
      image: Image1,
    },
    {
      x: 2,
      y: 1,
      image: Image2,
    },
    {
      x: 1,
      y: 2,
      image: Image4,
    },
    {
      x: 2,
      y: 2,
      image: Image4,
    },
    {
      x: 3,
      y: 2,
      image: Image3,
    },
    {
      x: 2,
      y: 3,
      image: Image1,
    },
    {
      x: 1,
      y: 4,
      image: Image5,
    },
    {
      x: 2,
      y: 4,
      image: Image6,
    },
  ]
  return (
    <>
      <HexagonGrid gridObjectXY={gridObjectXY} />
    </>
  )
}
