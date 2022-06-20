export const HEXGON_LARGE_OUTER_DIAMETER = 184
export const HEXGON_NORMAL_OUTER_DIAMETER = 132
export const HEXGON_SMALL_OUTER_DIAMETER = 82

export const HEXAGON_OUTER_DIAMETER_MAP = {
  large: HEXGON_LARGE_OUTER_DIAMETER,
  normal: HEXGON_NORMAL_OUTER_DIAMETER,
  small: HEXGON_SMALL_OUTER_DIAMETER,
}

export const HEXAGON_INNER_DIAMETER_MAP = {
  large: (Math.sqrt(3) * HEXGON_LARGE_OUTER_DIAMETER) / 2,
  normal: (Math.sqrt(3) * HEXGON_NORMAL_OUTER_DIAMETER) / 2,
  small: (Math.sqrt(3) * HEXGON_SMALL_OUTER_DIAMETER) / 2,
}

export const HEXAGON_DIAMETER_MAP = {
  outer: HEXAGON_OUTER_DIAMETER_MAP,
  inner: HEXAGON_INNER_DIAMETER_MAP,
}

export const HEXAGON_SM_DOWN_SCALE_FACTOR = 0.6

export function getDimension(
  horizontal,
  variant,
  dimension = 'width',
  media = 'xs-up'
) {
  let dim
  if (dimension === 'width') {
    dim = HEXAGON_DIAMETER_MAP[horizontal ? 'outer' : 'inner'][variant]
  } else {
    dim = HEXAGON_DIAMETER_MAP[horizontal ? 'inner' : 'outer'][variant]
  }
  // TODO more advanced breakpoints, this is all we need for now
  if (media === 'sm-down') {
    dim = dim * HEXAGON_SM_DOWN_SCALE_FACTOR
  }
  return `${dim}px`
}
