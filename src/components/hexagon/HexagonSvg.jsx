import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import BuildSvg from '../../assets/images/hexagon/growth.svg'
const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: '70px',
  },
  wrapIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1rem',
  },
  hexagonMB: {
    clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
    backgroundColor: '#1895EF',
    height: '120px',
    width: '105px',
    marginLeft: '2px',
    [theme.breakpoints.down('xs')]: {
      height: '80px',
      width: '115px',
    },
  },
  imageMB: {
    [theme.breakpoints.down('xs')]: {
      width: '30px',
      height: '30px',
    },
  },
}))
const HexagonSvg = ({ svg }) => {
  const classes = useStyles()
  // const customStyle = {
  //   clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
  //   backgroundColor: '#1895EF',
  //   height: '120px',
  //   width: '105px',
  //   marginLeft: '2px',
  // }

  return (
    <>
      {/* style={customStyle} */}
      <Box className={`${classes.wrapIcon} ${classes.hexagonMB}`}>
        <img className={classes.imageMB} src={svg} alt="" />
      </Box>
    </>
  )
}
// HexagonSvg.defaultProps = {
//   svg: BuildSvg,
// }

export default HexagonSvg
