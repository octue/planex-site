import React from 'react'
import PropTypes from 'prop-types'
import { Box, makeStyles, useTheme } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getDimension } from '../hexagonSizes'

const useStyles = makeStyles((theme) => ({
  hexagonBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: (props) =>
      props.backgroundColor === 'textPrimary'
        ? theme.palette.text.primary
        : theme.palette.primary.main,
    clipPath: (props) =>
      props.horizontal
        ? 'polygon(0 50%, 25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%)'
        : 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
  },
  raster: {},
  svg: {
    width: '50%',
    height: '50%',
  },
  border: {
    overflow: 'visible',
    zIndex: 1000,
    position: 'absolute',
    top: 0,
    left: 0,
  },
}))

const Hexagon = ({
  backgroundColor,
  border,
  horizontal,
  image,
  variant,
  ...rest
}) => {
  const rasterChild = !!image?.gatsbyImageData

  const theme = useTheme()
  const classes = useStyles({ horizontal, variant, backgroundColor })

  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const width = getDimension(
    horizontal,
    variant,
    'width',
    matches ? 'sm-down' : 'sm-up'
  )
  const height = getDimension(
    horizontal,
    variant,
    'height',
    matches ? 'sm-down' : 'sm-up'
  )

  // Manually scaled in the vertical
  const borderPoints = horizontal
    ? '0,43.3 25,0 75,0 100,43.3 75,86.6 25,86.6'
    : '50,0 0,28.8675 0,86.60 50,115.47 100,86.60 100,28.8675'

  /* The absolute positioning of the hexagon border refers to the first ancestor element
   * with a non-static position.
   * So we make sure that's the parent div here (lest it slip all the way up to <main> when
   * using hexagons in normal layouts). However, this non-default position interferes with
   * the grid flex properties, so we wrap an extra div here.
   */
  return (
    <Box {...rest}>
      <Box position="relative" top="0" left="0">
        <Box className={classes.hexagonBox} width={width} height={height}>
          {rasterChild ? (
            <GatsbyImage
              image={image.gatsbyImageData}
              alt={image.alt}
              title={image.title}
              className={classes.raster}
              style={{ width, height }}
            />
          ) : (
            <img className={classes.svg} src={image.url} alt={image.alt} />
          )}
        </Box>
        {border && (
          <svg
            version="1.1"
            id="border"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 100 100"
            xmlSpace="preserve"
            width={width}
            className={classes.border}
          >
            <defs>
              <polygon id={`POLYGON`} class="st0" points={borderPoints} />
            </defs>
            <use
              xlinkHref={`#POLYGON`}
              style={{
                overflow: 'visible',
                fill: 'none',
                stroke: '#FFFFFF',
                strokeWidth: 4,
                strokeMiterlimit: 10,
                strokeAlignment: 'inner',
              }}
            />
          </svg>
        )}
      </Box>
    </Box>
  )
}

Hexagon.defaultProps = {
  border: true,
  horizontal: false,
  image: undefined,
  variant: 'normal',
}

Hexagon.propTypes = {
  backgroundColor: PropTypes.oneOf(['textPrimary', 'main']),
  border: PropTypes.bool,
  horizontal: PropTypes.bool,
  image: PropTypes.shape({
    url: PropTypes.string, // Falls back to <img src={url} if no gatsbyImageData (for SVGs)
    alt: PropTypes.string,
    gatsbyImageData: PropTypes.object,
    title: PropTypes.string,
  }),
  variant: PropTypes.oneOf(['small', 'normal', 'large']),
}

export default Hexagon
