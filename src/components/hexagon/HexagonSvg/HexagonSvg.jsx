import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Box, makeStyles } from '@material-ui/core'

import { HEXAGON_DIAMETER_MAP } from '../hexagonSizes'

const useStyles = makeStyles((theme) => ({
  hexagon: {
    backgroundColor: theme.palette.primary.main,
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
    justifyContent: 'center',
  },
  child: {
    margin: '3px',
    padding: '6px',
  },
}))

const HexagonSvg = ({ alt, horizontal, url, title, variant, ...rest }) => {
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

  const height = `${
    HEXAGON_DIAMETER_MAP[horizontal ? 'inner' : 'outer'][variant]
  }px`

  return (
    <Box {...rest}>
      <Box className={parentClasses} width={width} height={height}>
        <img className={childClasses} src={url} alt={alt} />
      </Box>
    </Box>
  )
}

HexagonSvg.defaultProps = {
  alt: '',
  horizontal: false,
  variant: 'normal',
}

HexagonSvg.propTypes = {
  alt: PropTypes.string,
  horizontal: PropTypes.bool,
  url: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['small', 'normal', 'large']),
}

export default HexagonSvg
