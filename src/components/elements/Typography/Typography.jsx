import React from 'react'
import PropTypes from 'prop-types'
import MuiTypography from '@material-ui/core/Typography'
import BalanceText from 'react-balance-text'

const Typography = ({ children, balance, ...rest }) => (
  <MuiTypography {...rest}>
    {balance ? <BalanceText>{children}</BalanceText> : <>{children}</>}
  </MuiTypography>
)

Typography.defaultProps = {
  balance: false,
}

Typography.propTypes = {
  balance: PropTypes.bool,
}

export default Typography
