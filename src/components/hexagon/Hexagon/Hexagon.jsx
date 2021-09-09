import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Box, makeStyles } from '@material-ui/core'
import { GatsbyImage } from 'gatsby-plugin-image'

import { HEXAGON_DIAMETER_MAP } from '../hexagonSizes'

const useStyles = makeStyles((theme) => ({
  hexagon: {
    backgroundColor: theme.palette.text.primary,
  },
  vertical: {
    clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
    aspectRatio: 0.866025403,
  },
  horizontal: {
    clipPath: 'polygon(0 50%, 25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%)',
    aspectRatio: 1.154700538,
  },
  parent: {
    display: 'flex',
    alignItems: 'center',
  },
  child: {
    margin: '3px',
    padding: '6px',
  },
}))

const Hexagon = ({ horizontal, image, variant, ...rest }) => {
  const classes = useStyles()

  const parentClasses = classNames(classes.hexagon, classes.parent, {
    [classes.horizontal]: horizontal,
    [classes.vertical]: !horizontal,
  })

  const childClasses = classNames(classes.hexagon, classes.child, {
    [classes.horizontal]: horizontal,
    [classes.vertical]: !horizontal,
  })

  const width = `${
    HEXAGON_DIAMETER_MAP[horizontal ? 'outer' : 'inner'][variant]
  }px`

  return (
    <Box {...rest}>
      <Box className={parentClasses} width={width}>
        {image && (
          <GatsbyImage
            image={image.gatsbyImageData}
            alt={image.alt}
            title={image.title}
            className={childClasses}
          />
        )}
      </Box>
    </Box>
  )
}

Hexagon.defaultProps = {
  image: undefined,
  horizontal: false,
  variant: 'normal',
}

Hexagon.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string,
    gatsbyImageData: PropTypes.object.isRequired,
    title: PropTypes.string,
  }),
  horizontal: PropTypes.bool,
  variant: PropTypes.oneOf(['small', 'normal', 'large']),
}

export default Hexagon
