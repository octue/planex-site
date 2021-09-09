import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'
import Hexagon from '../Hexagon/Hexagon'
import DatoLink from '../../core/DatoLink'

import { HEXAGON_DIAMETER_MAP } from '../hexagonSizes'

const HexagonGrid = ({ grid, horizontal, variant, margin, ...rest }) => {
  const outerDiameter = HEXAGON_DIAMETER_MAP.outer[variant]
  const innerDiameter = HEXAGON_DIAMETER_MAP.inner[variant]
  const spacing = 0.75 * outerDiameter
  const angledMargin = (margin * Math.sqrt(3)) / 2
  return (
    <>
      <Box position="relative" {...rest}>
        {grid.map((item) => {
          // Parametric coordinate system. Q is a dimension across a hexagon perpendicular to
          // (and bisecting) two flat edges, P is perpendicular to Q passing through two apexes
          const p = horizontal ? item.x : item.y
          const q = horizontal ? item.y : item.x
          const pOffset = 0
          const qOffset = p % 2 === 0 ? 0 : (innerDiameter + angledMargin) / 2
          const pSpacing = p * (spacing + margin / 2)
          const qSpacing = q * (innerDiameter + angledMargin)
          const left = horizontal ? pSpacing + pOffset : qSpacing + qOffset
          const top = horizontal ? qSpacing + qOffset : pSpacing + pOffset
          return (
            <Box position="absolute" left={left} top={top}>
              {item.link ? (
                <DatoLink {...item.link} wrap>
                  <Hexagon
                    {...item}
                    variant={variant}
                    horizontal={horizontal}
                  />
                </DatoLink>
              ) : (
                <Hexagon {...item} variant={variant} horizontal={horizontal} />
              )}
            </Box>
          )
        })}
      </Box>
    </>
  )
}

HexagonGrid.defaultProps = {
  horizontal: false,
  margin: 20,
  variant: 'normal',
}

HexagonGrid.propTypes = {
  grid: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      gatsbyImageData: PropTypes.object,
    })
  ).isRequired,
  horizontal: PropTypes.bool,
  margin: PropTypes.number,
  variant: PropTypes.oneOf(['small', 'normal', 'large']),
}

export default HexagonGrid
