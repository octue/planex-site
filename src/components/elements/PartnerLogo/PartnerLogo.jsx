import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
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
const PartnerLogo = ({ alt, gatsbyImageData, url, className }) => {
  const classes = useStyles()

  // SVGs only have a URL. Rasters have gatsbyImageData. So we have to accept both.

  return (
    <Box className={className}>
      {url ? (
        <img src={url} alt={alt} className={classes.logoImg} />
      ) : (
        <GatsbyImage
          image={gatsbyImageData}
          alt={alt}
          className={classes.logoImg}
        />
      )}
    </Box>
  )
}

PartnerLogo.defaultProps = {
  alt: '',
  gatsbyImageData: undefined,
  url: undefined,
}

PartnerLogo.propTypes = {
  alt: PropTypes.string,
  gatsbyImageData: PropTypes.object,
  url: PropTypes.string,
}

export default PartnerLogo
