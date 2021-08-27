import React from 'react'
import MultipleHexagonWithImage from './MultipleHexagonWithImage'
import TripleHexagon from './TripleHexagon'
import ReverseMultipleHexagonWithImage from './ReverseMultipleHexagonWithImage'
import HexagonGrid from './HexagonGrid/HexagonGrid'

import Image1 from '../../assets/images/hexagon/Hero1.png'
import Image2 from '../../assets/images/hexagon/Hero2.png'
import Image3 from '../../assets/images/hexagon/Hero3.png'
import Image4 from '../../assets/images/hexagon/Hero7.png'
import Image5 from '../../assets/images/hexagon/Hero5.png'
import Image6 from '../../assets/images/hexagon/Hero6.png'

export default {
  title: 'Elements/Hexagon',
  component: Hexagon,
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
