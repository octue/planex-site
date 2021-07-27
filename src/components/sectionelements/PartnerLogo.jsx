import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import { makeStyles, useTheme } from '@material-ui/core'
import DefaultSvg from '../../assets/images/logos/partners/aerosense-white.svg'

const useStyles = makeStyles((theme) => ({
  logoImg: {
    height: '100px',
    paddingBottom: '3px',
    verticalAlign: 'middle',
    border: '0',
  },
}))
const PartnerLogo = ({ partnersvg, customStyle }) => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Box className={customStyle}>
      <img src={partnersvg} alt="logo" className={classes.logoImg} />
    </Box>
  )
}

PartnerLogo.defaultProps = {
  partnersvg: DefaultSvg,
}

PartnerLogo.propTypes = {
  partnersvg: PropTypes.string.isRequired,
}

export default PartnerLogo
