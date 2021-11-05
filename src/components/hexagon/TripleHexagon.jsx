import React from 'react'
import PropTypes from 'prop-types'
import { Box, makeStyles } from '@material-ui/core'
import SimpleHexagon from './Hexagon'
import DefaultImg from '../../assets/images/hexagon/Hero.png'

const useStyles = makeStyles((theme) => ({
  boxStyle: {
    display: 'flex',
    marginTop: '-30px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '-17px',
    },
  },
  boxStyleMove: {
    display: 'flex',
    marginLeft: '175px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '120px',
    },
  },
}))

const TripleHexagon = ({ image }) => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.boxStyleMove}>
        <SimpleHexagon bgHexImg={image} bgX="10%" bgY="20%" />
      </Box>
      <Box className={classes.boxStyle}>
        <SimpleHexagon bgHexImg={image} bgX="30%" bgY="40%" />
        <SimpleHexagon bgHexImg={image} bgX="40%" bgY="50%" />
      </Box>
    </>
  )
}
TripleHexagon.defaultProps = {
  image: DefaultImg,
}

TripleHexagon.propTypes = {
  image: PropTypes.string.isRequired,
}
export default TripleHexagon
