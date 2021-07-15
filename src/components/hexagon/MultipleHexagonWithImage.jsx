import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import SimpleHexagon from './SimpleHexagon'
import Img1 from '../../assets/images/hexagon/Hero.png'
const useStyles = makeStyles((theme) => ({
  boxStyle: {
    display: 'flex',
  },
  boxStyleMove: {
    display: 'flex',
    marginLeft: '175px',
    marginTop: '-30px',
  },
}))
const MultipleHexagonWithImage = () => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.boxStyle}>
        <SimpleHexagon bgHexagomImg={Img1} bgX="10%" bgY="20%" />
        <SimpleHexagon bgHexagomImg={Img1} bgX="20%" bgY="30%" />
      </Box>
      <Box className={classes.boxStyleMove}>
        <SimpleHexagon bgHexagomImg={Img1} bgX="30%" bgY="40%" />
        <SimpleHexagon bgHexagomImg={Img1} bgX="40%" bgY="50%" />
      </Box>
    </>
  )
}

export default MultipleHexagonWithImage
