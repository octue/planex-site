import React from 'react'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { SectionDetail } from '../../elements'
import HexagonSvg from '../../hexagon/HexagonSvg/HexagonSvg'
import Hexagon from '../../hexagon/Hexagon/Hexagon'

const useStyles = makeStyles((theme) => ({
  bulletRoot: {
    alignItems: 'center',
  },
  bulletDetail: {
    marginLeft: theme.spacing(3),
  },
}))

const HexBullet = ({ heading, description, image, variant, rest }) => {
  const classes = useStyles()

  const isSvg = !!image.url

  return (
    <Box display="flex" className={classes.bulletRoot} {...rest}>
      {isSvg ? (
        <HexagonSvg {...image} variant={variant} />
      ) : (
        <Hexagon {...image} variant={variant} />
      )}
      <Box className={classes.bulletDetail}>
        <SectionDetail heading={heading} description={description} />
      </Box>
    </Box>
  )
}

export default HexBullet
