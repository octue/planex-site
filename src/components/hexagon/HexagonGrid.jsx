import React from 'react'
import PropTypes from 'prop-types'
import { Box, makeStyles } from '@material-ui/core'

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
  hexagonGridBox: {
    paddingTop: '30px',
  },
  oddBox: {
    marginTop: '-30px',
    marginLeft: '60px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '-18px',
      marginLeft: '40px',
    },
  },
  evenBox: {
    marginTop: '-30px',
    marginLeft: '0px',
    [theme.breakpoints.down('xs')]: {},
  },
}))
const HexagonGrid = ({ gridObjectXY }) => {
  let secondLastX = 0
  let lastX = 0
  let tempX = 0

  let xHexagonDisplay = []
  let yHexagonDisplay = []
  let yValue = 1
  let boolStatus = false
  let imageIndex = -1

  gridObjectXY.map((grid) => {
    if (grid.y != yValue) {
      yValue = grid.y
      secondLastX = 0
      lastX = 0
      tempX = 0
      if (grid.y != 1) {
        boolStatus = true
      }
    }
    if (boolStatus) {
      boolStatus = false
      yHexagonDisplay.push({ yaxis: xHexagonDisplay })
      xHexagonDisplay = []
    }
    lastX = grid.x
    if (lastX > 1) {
      secondLastX = tempX
    }
    tempX = lastX
    if (lastX != secondLastX + 1) {
      for (let x = secondLastX + 1; x < lastX; x++) {
        xHexagonDisplay.push({ data: 'InVisiable' })
      }
      xHexagonDisplay.push({ data: 'Visiable' })
    } else {
      xHexagonDisplay.push({ data: 'Visiable' })
    }
  })

  yHexagonDisplay.push({ yaxis: xHexagonDisplay })
  xHexagonDisplay = []

  const classes = useStyles()

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        className={classes.hexagonGridBox}
      >
        {yHexagonDisplay.map((ygrid, index) => {
          const moveBox = index % 2 == 0 ? classes.evenBox : classes.oddBox
          return (
            <Box display="flex" className={moveBox}>
              {ygrid.yaxis.map((grid) => {
                const indexOfImage =
                  grid.data == 'Visiable' ? imageIndex++ : imageIndex
                return grid.data == 'Visiable' ? (
                  <Box>
                    <Box className={classes.hexagonShapeParent}>
                      <Box
                        className={classes.hexagonShape}
                        style={{
                          backgroundImage: `url(${gridObjectXY[imageIndex]?.image})`,
                          backgroundPositionX: '40%',
                          backgroundPositionY: '30%',
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
                          backgroundImage: `url(${gridObjectXY[imageIndex]?.image})`,
                          backgroundPositionX: '30%',
                          backgroundPositionY: '40%',
                        }}
                      ></Box>
                    </Box>
                  </Box>
                )
              })}
            </Box>
          )
        })}
      </Box>
    </>
  )
}

HexagonGrid.defaultProps = {}

HexagonGrid.propTypes = {
  gridObjectXY: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    image: PropTypes.string,
  }),
}

export default HexagonGrid
