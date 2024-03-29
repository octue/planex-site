import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Box, useTheme } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Hexagon from '../Hexagon/Hexagon'
import DatoLink from '../../core/DatoLink'

import {
  HEXAGON_DIAMETER_MAP,
  HEXAGON_SM_DOWN_SCALE_FACTOR,
} from '../hexagonSizes'

const HexagonGrid = ({ grid, horizontal, variant, margin, ...rest }) => {
  const theme = useTheme({ horizontal })
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const scale = matches ? HEXAGON_SM_DOWN_SCALE_FACTOR : 1.0
  const outerDiameter = HEXAGON_DIAMETER_MAP.outer[variant] * scale
  const innerDiameter = HEXAGON_DIAMETER_MAP.inner[variant] * scale
  const spacing = 0.75 * outerDiameter
  const angledMargin = (margin * Math.sqrt(3)) / 2
  const { layout, height } = useMemo(() => {
    let maxTop = 0
    const updatedGrid = grid.map((item, idx) => {
      // Parametric coordinate system. Q is a dimension across a hexagon perpendicular to
      // (and bisecting) two flat edges, P is perpendicular to Q passing through two apexes
      const p = horizontal ? item.x : item.y
      const q = horizontal ? item.y : item.x
      const pOffset = 0
      const qOffset = p % 2 === 0 ? 0 : (innerDiameter + angledMargin) / 2
      const pSpacing = p * (spacing + 6 + margin / 2)
      const qSpacing = q * (innerDiameter + angledMargin)
      const left = horizontal ? pSpacing + pOffset : qSpacing + qOffset
      const top = horizontal ? qSpacing + qOffset : pSpacing + pOffset
      const key = `${item.x}-${item.y}-${idx}`
      maxTop = Math.max(maxTop, top)
      return { left, top, key, ...item }
    })
    return {
      layout: updatedGrid,
      height: maxTop + (horizontal ? innerDiameter : outerDiameter),
    }
  }, [
    angledMargin,
    horizontal,
    innerDiameter,
    margin,
    outerDiameter,
    spacing,
    grid,
  ])

  return (
    <>
      <Box position="relative" height={height} {...rest}>
        {layout.map((item) => {
          return (
            <Box
              position="absolute"
              left={item.left}
              top={item.top}
              key={item.key}
            >
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
