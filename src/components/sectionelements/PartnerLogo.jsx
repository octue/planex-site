import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core'

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

  return (
    <Box className={customStyle}>
      <img src={partnersvg} alt="logo" className={classes.logoImg} />
    </Box>
  )
}

PartnerLogo.defaultProps = {}

PartnerLogo.propTypes = {
  partnersvg: PropTypes.string.isRequired,
}

export default PartnerLogo
