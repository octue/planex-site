import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

const SectionContainer = ({ id, children, ...rest }) => {
  return (
    <Box component="section" id={id} {...rest}>
      <Container maxWidth="lg">{children}</Container>
    </Box>
  )
}

SectionContainer.defaultProps = {}

SectionContainer.propTypes = {
  id: PropTypes.string.isRequired,
}

export default SectionContainer
