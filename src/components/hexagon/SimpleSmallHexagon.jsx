import { Box, makeStyles } from '@material-ui/core'
import BackgroundImage from '../../assets/images/hexagon/Hero.png'
import React from 'react'
const useStyles = makeStyles((theme) => ({
  hexagonShapeParent: {
    clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
    backgroundColor: '#fff',
    height: '80px',
    width: '70px',
    marginLeft: '2px',
    // padding: '6px',
    display: 'flex',
    alignItems: 'center',
    // [theme.breakpoints.down('xs')]: {
    //   height: '85px',
    //   width: '80px',
    // },
  },
  hexagonShape: {
    clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
    backgroundColor: '#fff',
    height: '75px',
    width: '65px',
    marginLeft: '2px',
    padding: '6px',

    // [theme.breakpoints.down('xs')]: {
    //   height: '80px',
    //   width: '75px',
    // },
  },
}))
const SimpleSmallHexagon = ({ bgHexagomImg, bgX, bgY, customStyle }) => {
  const classes = useStyles()
  return (
    <>
      <Box className={customStyle}>
        <Box className={classes.hexagonShapeParent}>
          <Box
            className={classes.hexagonShape}
            style={{
              backgroundImage: `url(${bgHexagomImg})`,
              backgroundPositionX: bgX,
              backgroundPositionY: bgY,
            }}
          ></Box>
        </Box>
      </Box>
    </>
  )
}

SimpleSmallHexagon.defaultProps = {
  bgHexagomImg: BackgroundImage,
  bgX: '0%',
  bgY: '0%',
}

export default SimpleSmallHexagon
