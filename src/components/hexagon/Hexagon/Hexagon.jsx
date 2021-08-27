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

const Hexagon = ({
  alt,
  horizontal,
  gatsbyImageData,
  title,
  variant,
  ...rest
}) => {
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
        <GatsbyImage
          image={gatsbyImageData}
          alt={alt}
          title={title}
          className={childClasses}
        />
      </Box>
    </Box>
  )
}

Hexagon.defaultProps = {
  variant: 'normal',
  horizontal: false,
}

Hexagon.propTypes = {
  horizontal: PropTypes.bool,
  variant: PropTypes.oneOf(['tiny', 'small', 'normal', 'large']),
  gatsbyImageData: PropTypes.object.isRequired,
}

export default Hexagon
