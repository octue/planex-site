import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  hexagon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
    backgroundColor: '#1895EF',
  },
  normalParent: {
    height: '120px',
    width: '105px',
    [theme.breakpoints.down('xs')]: {
      height: '65px',
      width: '57px',
    },
  },
  smallParent: {
    height: '80px',
    width: '70px',
  },
  normalChild: {
    [theme.breakpoints.down('xs')]: {
      width: '30px',
      height: '30px',
    },
  },
  smallChild: {
    [theme.breakpoints.down('xs')]: {
      width: '30px',
      height: '30px',
    },
  },
}))

const HexagonSvg = ({ svg, variant, ...rest }) => {
  const classes = useStyles()

  const parentClasses = classNames(classes.hexagon, {
    [classes.normalParent]: variant === 'normal',
    [classes.smallParent]: variant === 'small',
  })

  const childClasses = classNames({
    [classes.normalChild]: variant === 'normal',
    [classes.smallChild]: variant === 'small',
  })

  return (
    <Box className={parentClasses} {...rest}>
      <img className={childClasses} src={svg} alt="" />
    </Box>
  )
}

HexagonSvg.defaultProps = {
  variant: 'normal',
}

HexagonSvg.propTypes = {
  variant: PropTypes.oneOf(['small', 'normal']),
  svg: PropTypes.string.isRequired,
}

export default HexagonSvg
