import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import BuildSvg from '../../assets/images/hexagon/growth.svg'
const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: '50px',
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
    height: '80px',
    width: '70px',
    marginLeft: '2px',
  },
  imageMB: {
    [theme.breakpoints.down('xs')]: {
      width: '30px',
      height: '30px',
    },
  },
}))
const SmallHexagonSvg = ({ svg }) => {
  const classes = useStyles()

  return (
    <>
      {/* style={customStyle} */}
      <Box className={`${classes.wrapIcon} ${classes.hexagonMB}`}>
        <img className={classes.imageMB} src={svg} alt="" />
      </Box>
    </>
  )
}

export default SmallHexagonSvg
