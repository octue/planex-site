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
      x: 8,
      y: 1,
    },
  ]

  //   const [visibiltyCount, setVisibiltyCount] = useState(1)
  //   const [visibiltyStatus, setVisibiltyStatus] = useState(false)

  let visibiltyCount = 1
  let visibiltyStatus = true

  let secondLastX = 0
  let lastX = 0
  let tempX = 0
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
      for (let x = secondLastX + 1; x <= lastX; x++) {
        console.log('InVisiableValue:', x)
      }
    } else {
      console.log('VisiableValue:', lastX)
    }

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
        {gridObject?.map((grid) => {
          lastX = grid.x
          if (lastX > 1) {
            secondLastX = tempX
          }
          tempX = lastX

          if (lastX != secondLastX + 1) {
            for (let x = secondLastX + 1; x <= lastX; x++) {
              girdHexagonDisplay.push(
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
            }
          } else {
            girdHexagonDisplay.push(
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
            )
          }

          return girdHexagonDisplay
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
