import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  sectionBox: {
    backgroundColor: theme.palette.background.default,
  },
  container: {
    // height: '100%',
    // paddingTop: '240px',
    // [theme.breakpoints.down('xs')]: {
    //   paddingTop: '100px',
    // },
  },
}))

const SectionContainer = ({ id, children, ...rest }) => {
  const classes = useStyles()

  return (
    <Box component="section" id={id} className={classes.sectionBox} {...rest}>
      <Container maxWidth="lg" className={classes.container}>
        {children}
      </Container>
    </Box>
  )
}

SectionContainer.defaultProps = {}

SectionContainer.propTypes = {
  id: PropTypes.string.isRequired,
}

export default SectionContainer
