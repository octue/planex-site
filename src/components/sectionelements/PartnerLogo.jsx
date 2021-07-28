import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles, useTheme } from '@material-ui/core'
import AerosenseWhite from '../../assets/images/logos/partners/aerosense-white.svg'
const useStyles = makeStyles((theme) => ({
  logoImg: {
    height: '100px',
    // width: '100px',
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

export default PartnerLogo
