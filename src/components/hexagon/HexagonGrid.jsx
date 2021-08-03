import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Box, makeStyles } from '@material-ui/core'
import BackgroundImage from '../../assets/images/hexagon/Hero4.png'

const useStyles = makeStyles((theme) => ({
  hexagonShapeParent: {
    clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
    backgroundColor: '#fff',
    height: '130px',
    width: '115px',
    marginLeft: '2px',
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
  visibilityHexa: {
    visibility: 'hidden',
  },
}))
const HexagonGrid = ({ bgHexImg, bgX, bgY, className }) => {
  const gridObject = [
    {
      x: 1,
      y: 1,
    },
    {
      x: 2,
      y: 1,
    },
    {
      x: 3,
      y: 1,
    },
    {
      x: 5,
      y: 1,
    },
    {
      x: 10,
      y: 1,
    },
  ]

  const gridObjectXY = [
    {
      x: 1,
      y: 1,
    },
    {
      x: 2,
      y: 1,
    },
    {
      x: 3,
      y: 1,
    },
    {
      x: 5,
      y: 1,
    },
    {
      x: 2,
      y: 2,
    },
    {
      x: 3,
      y: 2,
    },
    {
      x: 5,
      y: 2,
    },
    {
      x: 3,
      y: 3,
    },
  ]

  let HexagonDisplay = []
  let HexagonDisplayXYGrid = []
  let secondLastX = 0
  let lastX = 0
  let tempX = 0
  let countY = 0
  // First Find y Count Value
  // gridObjectXY.map((grid) => {
  //   if (grid.y != countY) {
  //     countY = grid.y
  //   }
  // })
  // Now For X AND Y Find y Count Value
  let xDemoHexagonDisplay = []
  let yDemoHexagonDisplay = []
  let yValue = 1
  console.log(
    '********************DemoHexagonDisplay START (Testing Phase)*****************************'
  )
  gridObjectXY.map((grid) => {
    // if (grid.y != yValue) {
    //   // yValue = grid.y
    //   secondLastX = 0
    //   lastX = 0
    //   tempX = 0
    // }
    console.log('gridY:', grid.y)
    console.log('grid:', grid.x)
    lastX = grid.x
    if (lastX > 1) {
      secondLastX = tempX
    }
    tempX = lastX
    console.log('lastX:', lastX)
    console.log('secondLastX:', secondLastX)
    console.log('tempX:', tempX)
    if (lastX != secondLastX + 1) {
      for (let x = secondLastX + 1; x < lastX; x++) {
        console.log('InVisiableValue:', x)
        xDemoHexagonDisplay.push({ data: 'InVisiable' })
      }
      console.log('VisiableValue:', lastX)
      xDemoHexagonDisplay.push({ data: 'Visiable' })
    } else {
      console.log('VisiableValue:', lastX)
      xDemoHexagonDisplay.push({ data: 'Visiable' })
    }

    if (grid.y != yValue) {
      yDemoHexagonDisplay.push({ yaxis: xDemoHexagonDisplay })
      xDemoHexagonDisplay = []
      yValue = grid.y
      secondLastX = 0
      lastX = 0
      tempX = 0
      console.log('Clear Old Data')
      console.log('yDemoHexagonDisplay', yDemoHexagonDisplay)
      console.log('xDemoHexagonDisplay', xDemoHexagonDisplay)
    }

    console.log('________________________________________________')
    console.log(yDemoHexagonDisplay)
    console.log('________________________________________________')
    // for (let y = 1; y <= countY; y++) {
    //   // Loop until y first value not end
    //   // while (grid.y == y) {
    //   //   console.log(grid.x, 'grid.y:', grid.y)
    //   // }
    // }
  })
  console.log(
    '********************DemoHexagonDisplay END*****************************'
  )
  console.log(countY)

  gridObject.map((grid) => {
    console.log('grid:', grid.x)
    lastX = grid.x
    if (lastX > 1) {
      secondLastX = tempX
    }
    tempX = lastX
    console.log('lastX:', lastX)
    console.log('secondLastX:', secondLastX)
    console.log('tempX:', tempX)
    if (lastX != secondLastX + 1) {
      for (let x = secondLastX + 1; x < lastX; x++) {
        console.log('InVisiableValue:', x)
        HexagonDisplay.push({ data: 'InVisiable' })
      }
      console.log('VisiableValue:', lastX)
      HexagonDisplay.push({ data: 'Visiable' })
    } else {
      console.log('VisiableValue:', lastX)
      HexagonDisplay.push({ data: 'Visiable' })
    }

    console.log('________________________________________________')
    console.log(HexagonDisplay)
    console.log('________________________________________________')
  })

  const girdHexagonDisplay = []

  const classes = useStyles()

  return (
    <>
      {/* <Box className={className}>
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
      </Box> */}
      <Box display="flex">
        {HexagonDisplay.map((grid) => {
          return grid.data == 'Visiable' ? (
            <Box>
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
          ) : (
            <Box className={classes.visibilityHexa}>
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
        })}
      </Box>
    </>
  )
}

HexagonGrid.defaultProps = {
  bgHexImg: BackgroundImage,
  bgX: '0%',
  bgY: '0%',
}

HexagonGrid.propTypes = {
  bgHexImg: PropTypes.string.isRequired,
  bgX: PropTypes.string,
  bgY: PropTypes.string,
}

export default HexagonGrid
