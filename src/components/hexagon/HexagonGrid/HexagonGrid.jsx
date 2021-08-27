import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'
import Hexagon from '../Hexagon/Hexagon'

export const HEXGON_NORMAL_OUTER_DIAMETER = 132
export const HEXGON_SMALL_OUTER_DIAMETER = 82

const outerDiameterMap = {
  normal: HEXGON_NORMAL_OUTER_DIAMETER,
  small: HEXGON_SMALL_OUTER_DIAMETER,
}

const HexagonGrid = ({ grid, horizontal, variant, margin, ...rest }) => {
  const outerDiameter = outerDiameterMap[variant]
  const innerDiameter = (Math.sqrt(3) * outerDiameter) / 2
  const spacing = 0.75 * outerDiameter
  const angledMargin = (margin * Math.sqrt(3)) / 2
  return (
    <>
      <Box {...rest}>
        {grid.map((item) => {
          // Parametric coordinate system. Q is a dimension across a hexagon perpendicular to
          // (and bisecting) two flat edges, P is perpendicular to Q passing through two
          // apexes
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
              <Hexagon
                gatsbyImageData={item.gatsbyImageData}
                variant={variant}
                horizontal={horizontal}
              />
            </Box>
          )
        })}
      </Box>
    </>
  )
}

HexagonGrid.defaultProps = {
  horizontal: false,
  variant: 'normal',
  margin: 20,
}

HexagonGrid.propTypes = {
  margin: PropTypes.number,
  grid: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    gatsbyImageData: PropTypes.object,
  }).isRequired,
  horizontal: PropTypes.bool,
  variant: PropTypes.oneOf(['small', 'normal']),
}

export default HexagonGrid
