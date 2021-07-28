import React from 'react'
import PropTypes from 'prop-types'
import { Box, makeStyles } from '@material-ui/core'
import DefaultSvg from '../../assets/images/hexagon/growth.svg'

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
  hexagon: {
    clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
    backgroundColor: '#1895EF',
    height: '80px',
    width: '70px',
    marginLeft: '2px',
  },
  imageMobileResponsive: {
    [theme.breakpoints.down('xs')]: {
      width: '30px',
      height: '30px',
    },
  },
}))
const SmallHexagonSvg = ({ svg }) => {
  const classes = useStyles()

  return (
    <Box className={`${classes.wrapIcon} ${classes.hexagon}`}>
      <img className={classes.imageMobileResponsive} src={svg} alt="" />
    </Box>
  )
}

SmallHexagonSvg.defaultProps = {
  svg: DefaultSvg,
}

SmallHexagonSvg.propTypes = {
  svg: PropTypes.string.isRequired,
}

export default SmallHexagonSvg
