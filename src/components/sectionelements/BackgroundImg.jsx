import React from 'react'
import Box from '@material-ui/core/Box'
import BackgroundImage from 'gatsby-background-image'
import BgImage from '../../assets/images/backgrounds/img.png'
import { makeStyles, useTheme } from '@material-ui/core'

const BackgroundImg = () => {
  const theme = useTheme()
  return (
    <>
      <Box component="section" height="100vh">
        <BackgroundImage
          Tag="div"
          fluid={BgImage}
          style={{
            backgroundColor: theme.palette.background.paper,
            width: '100%',
            height: '100%',
          }}
        ></BackgroundImage>
      </Box>
    </>
  )
}

export default BackgroundImg
