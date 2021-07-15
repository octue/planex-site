import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import BuildSvg from '../../assets/images/hexagon/build.svg'
const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: '70px',
  },
  wrapIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))
const HexagonSvg = ({ svg }) => {
  const classes = useStyles()
  const customStyle = {
    clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
    backgroundColor: '#1895EF',
    height: '120px',
    width: '105px',
    marginLeft: '2px',
  }

  return (
    <>
      <Box style={customStyle} className={classes.wrapIcon}>
        <img src={svg} alt="" />
      </Box>
    </>
  )
}
HexagonSvg.defaultProps = {
  svg: BuildSvg,
}

export default HexagonSvg
