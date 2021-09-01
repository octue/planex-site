import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const SectionDetail = ({ children, heading, description, ...rest }) => {
  return (
    <>
      <Box>
        <Box display="flex" mb={2}>
          <Typography
            balance
            variant="subtitle1"
            component="h4"
            color="textPrimary"
          >
            {heading}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography balance variant="body1" color="textSecondary">
            {description}
          </Typography>
        </Box>
        <Box display="flex" mt={3} {...rest}>
          {children}
        </Box>
      </Box>
    </>
  )
}

SectionDetail.defaultProps = {
  heading: '',
  description: '',
}

SectionDetail.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
}

export default SectionDetail
