import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Box, makeStyles } from '@material-ui/core'
import DefaultSvg from '../../assets/images/hexagon/growth.svg'

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
  hexagon: {
    clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
    backgroundColor: '#1895EF',
    height: '120px',
    width: '105px',
    marginLeft: '2px',
    [theme.breakpoints.down('xs')]: {
      maxHeight: '65px',
      minWidth: '57px',
    },
  },
  imageMobileResponsive: {
    [theme.breakpoints.down('xs')]: {
      width: '30px',
      height: '30px',
    },
  },
}))
const HexagonSvg = ({ svg }) => {
  const classes = useStyles()
  const hexBox = classNames(classes.wrapIcon, classes.hexagon)
  return (
    <Box className={hexBox}>
      <img className={classes.imageMobileResponsive} src={svg} alt="" />
    </Box>
  )
}
HexagonSvg.defaultProps = {
  svg: DefaultSvg,
}

HexagonSvg.propTypes = {
  svg: PropTypes.string.isRequired,
}

export default HexagonSvg
