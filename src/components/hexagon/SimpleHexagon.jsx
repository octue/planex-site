import React from 'react'
import PropTypes from 'prop-types'
import { Box, makeStyles } from '@material-ui/core'
import BackgroundImage from '../../assets/images/hexagon/Hero.png'

const useStyles = makeStyles((theme) => ({
  hexagonShapeParent: {
    clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
    backgroundColor: '#fff',
    height: '130px',
    width: '115px',
    marginLeft: '2px',
    // padding: '6px',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      height: '85px',
      width: '80px',
    },
  },
  hexagonShape: {
    clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
    backgroundColor: '#fff',
    height: '125px',
    width: '110px',
    marginLeft: '2px',
    padding: '6px',
    [theme.breakpoints.down('xs')]: {
      height: '80px',
      width: '75px',
    },
  },
}))
const SimpleHexagon = ({ bgHexImg, bgX, bgY, customStyle }) => {
  const classes = useStyles()
  return (
    <Box className={customStyle}>
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

SimpleHexagon.defaultProps = {
  bgHexImg: BackgroundImage,
  bgX: '0%',
  bgY: '0%',
}

SimpleHexagon.propTypes = {
  bgHexImg: PropTypes.string.isRequired,
  bgX: PropTypes.string,
  bgY: PropTypes.string,
}

export default SimpleHexagon