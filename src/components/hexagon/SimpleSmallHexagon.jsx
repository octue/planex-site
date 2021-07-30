import React from 'react'
import PropTypes from 'prop-types'
import { Box, makeStyles } from '@material-ui/core'
import BackgroundImage from '../../assets/images/hexagon/Hero.png'

const useStyles = makeStyles((theme) => ({
  hexagonShapeParent: {
    clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
    backgroundColor: '#fff',
    height: '80px',
    width: '70px',
    marginLeft: '2px',
    display: 'flex',
    alignItems: 'center',
  },
  hexagonShape: {
    clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
    backgroundColor: '#fff',
    height: '75px',
    width: '65px',
    marginLeft: '2px',
    padding: '6px',
  },
}))
const SimpleSmallHexagon = ({ bgHexImg, bgX, bgY, className }) => {
  const classes = useStyles()
  return (
    <Box className={className}>
      <Box className={classes.hexagonShapeParent}>
        <Box
          className={classes.hexagonShape}
          style={{
            backgroundImage: `url(${bgHexImg})`,
            backgroundPositionX: bgX,
            backgroundPositionY: bgY,
          }}
        ></Box>
      </Box>
    </Box>
  )
}

SimpleSmallHexagon.defaultProps = {
  bgHexImg: BackgroundImage,
  bgX: '0%',
  bgY: '0%',
}

SimpleSmallHexagon.propTypes = {
  bgHexImg: PropTypes.string.isRequired,
  bgX: PropTypes.string,
  bgY: PropTypes.string,
}

export default SimpleSmallHexagon
