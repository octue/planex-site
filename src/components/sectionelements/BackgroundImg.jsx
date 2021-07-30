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
          /* See https://github.com/timhagn/gatsby-background-image/issues/142
           * for why these styles are applied here.
           * Unlike a dynamic react site, this shouldn't be a performance issue.
           */
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
