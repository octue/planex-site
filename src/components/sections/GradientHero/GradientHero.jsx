import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '../../elements/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles, useTheme } from '@material-ui/core'
import BackgroundImage from 'gatsby-background-image'
import { convertToBgImage } from 'gbimage-bridge'
import PropTypes from 'prop-types'
import { hexToRgb } from '../../../themes'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    width: '100%',
  },
  cta: {
    display: 'flex',
    border: `2px solid ${theme.palette.text.secondary}`,
    paddingTop: `10px`,
    paddingBottom: `10px`,
  },
  gradient: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '0px',
    left: '0px',
    background: `linear-gradient(
      rgba(${hexToRgb(theme.palette.background.default)}, 0) 0%,
      rgba(${hexToRgb(theme.palette.background.default)}, 0.002) 19%,
      rgba(${hexToRgb(theme.palette.background.default)}, 0.008) 34%,
      rgba(${hexToRgb(theme.palette.background.default)}, 0.021) 47%,
      rgba(${hexToRgb(theme.palette.background.default)}, 0.042) 56.5%,
      rgba(${hexToRgb(theme.palette.background.default)}, 0.075) 65%,
      rgba(${hexToRgb(theme.palette.background.default)}, 0.126) 73%,
      rgba(${hexToRgb(theme.palette.background.default)}, 0.194) 80.2%,
      rgba(${hexToRgb(theme.palette.background.default)}, 0.278) 86.1%,
      rgba(${hexToRgb(theme.palette.background.default)}, 0.382) 91%,
      rgba(${hexToRgb(theme.palette.background.default)}, 0.541) 95.2%,
      rgba(${hexToRgb(theme.palette.background.default)}, 0.738) 98.2%,
      rgba(${hexToRgb(theme.palette.background.default)}, 1) 100%
    )`,
    zIndex: 5,
  },
  MainBox: {
    marginLeft: '90px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
    },
  },
}))

const GradientHero = ({ heading, subheading, image, gradient, fullHeight }) => {
  const classes = useStyles()
  const theme = useTheme()
  const { alt, gatsbyImageData } = image || {}
  const bgImage = gatsbyImageData && convertToBgImage(gatsbyImageData)

  const height = fullHeight ? '100vh' : '40vh'

  return (
    <Box component="section" height={height}>
      {gradient && <div className={classes.gradient} />}
      {bgImage && (
        <BackgroundImage
          Tag="div"
          {...bgImage}
          alt={alt}
          style={{
            backgroundColor: theme.palette.background.paper,
            width: '100%',
            height: height,
            position: 'absolute',
            top: '0px',
            left: '0px',
            zIndex: 0,
          }}
        />
      )}
      <Box
        zIndex={10}
        height={height}
        width="100%"
        position="absolute"
        top="0px"
        left="0px"
      >
        <Container maxWidth="xl" className={classes.container}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            height="100%"
            zIndex={10}
            maxWidth="958px" // Places it to the left of center on larger screens
            className={classes.MainBox}
          >
            <Box display="flex">
              <Typography balance variant="h1" color="textPrimary">
                {heading}
              </Typography>
            </Box>
            <Box display="flex" pb={4} px={1}>
              <Typography
                balance
                variant="subtitle1"
                component="h2"
                color="textSecondary"
              >
                {subheading}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

GradientHero.defaultProps = {
  heading: '',
  subheading: '',
  image: {},
  gradient: false,
  fullHeight: false,
}

GradientHero.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  gradient: PropTypes.bool,
  fullHeight: PropTypes.bool,
  image: PropTypes.shape({
    gatsbyImageData: PropTypes.object.isRequired,
    alt: PropTypes.string,
  }),
}

export default GradientHero
