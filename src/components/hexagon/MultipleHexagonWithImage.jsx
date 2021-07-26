import React from 'react'
import PropTypes from 'prop-types'
import { Box, makeStyles } from '@material-ui/core'
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
    [theme.breakpoints.down('xs')]: {
      marginLeft: '130px',
      marginTop: '-23px',
    },
  },
}))
const MultipleHexagonWithImage = ({ image }) => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.boxStyle}>
        <SimpleHexagon bgHexImg={image} bgX="10%" bgY="20%" />
        <SimpleHexagon bgHexImg={image} bgX="20%" bgY="30%" />
      </Box>
      <Box className={classes.boxStyleMove}>
        <SimpleHexagon bgHexImg={image} bgX="30%" bgY="40%" />
        <SimpleHexagon bgHexImg={image} bgX="40%" bgY="50%" />
      </Box>
    </>
  )
}

MultipleHexagonWithImage.defaultProps = {
  image: Img1,
}

MultipleHexagonWithImage.propTypes = {
  image: PropTypes.string.isRequired,
}
export default MultipleHexagonWithImage
