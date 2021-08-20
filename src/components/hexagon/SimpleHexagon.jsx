import React from 'react'
import PropTypes from 'prop-types'
import { Box, makeStyles } from '@material-ui/core'
import { GatsbyImage } from 'gatsby-plugin-image'

const useStyles = makeStyles((theme) => ({
  hexagonShapeParent: {
    clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
    backgroundColor: theme.palette.text.primary,
    height: '132px',
    width: '116px',
    // marginLeft: '3px',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      height: '88px',
      width: '82px',
    },
  },
  hexagonShape: {
    clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
    backgroundColor: theme.palette.text.primary,
    height: '124px',
    width: '110px',
    marginLeft: '3px',
    padding: '6px',
    [theme.breakpoints.down('xs')]: {
      height: '82px',
      width: '76px',
    },
  },
}))
const SimpleHexagon = ({ image, alt, title, ...rest }) => {
  const classes = useStyles()
  return (
    <Box {...rest}>
      <Box className={classes.hexagonShapeParent}>
        <GatsbyImage
          image={image}
          alt={alt}
          title={title}
          className={classes.hexagonShape}
        />
      </Box>
    </Box>
  )
}

SimpleHexagon.defaultProps = {}

SimpleHexagon.propTypes = {
  image: PropTypes.object.isRequired,
}

export default SimpleHexagon
