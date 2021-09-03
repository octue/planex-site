import React from 'react'
import SectionGrid from '../../elements/SectionGrid'
import HexBullet from '../../elements/HexBullet'

const HexBullets = ({ bullets, ...rest }) => {
  return (
    <SectionGrid xs={12} sm={6} {...rest}>
      {bullets && bullets.map((bullet) => <HexBullet {...bullet} />)}
    </SectionGrid>
  )
}

export default HexBullets
