import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import Copyright from '../../elements/Copyright'

// TODO hook up to use gatsby image
// Every refresh of the page randomly selects from these
// const backgrounds = [
//   require('images/backgrounds/shutterstock-44703712-reduced.jpg'),
//   require('images/backgrounds/shutterstock-249898588-reduced.jpg'),
//   require('images/backgrounds/shutterstock-251095081-reduced.jpg'),
// ]

function BackgroundBox({ copyright, children, background, ...rest }) {
  // Allow randomised selection of the background image on mount
  // eslint-disable-next-line no-unused-vars
  // const [backgroundImage, setBackgroundImage] = React.useState(background || backgrounds[Math.floor(Math.random() * backgrounds.length)])
  return (
    <Box
      position="fixed"
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{
        // These styles for some reason can't be applied on the box object
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        // backgroundImage: `url(${backgroundImage})`,
      }}
      {...rest}
    >
      {children}
      {copyright ? <Copyright paper /> : null}
    </Box>
  )
}

BackgroundBox.defaultProps = {
  background: undefined,
  children: null,
  copyright: true,
}

BackgroundBox.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node,
  copyright: PropTypes.bool,
}

export default BackgroundBox
