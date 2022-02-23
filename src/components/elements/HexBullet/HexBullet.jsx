import React from 'react'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { SectionDetail } from '../../elements'
import Hexagon from '../../hexagon/Hexagon/Hexagon'

const useStyles = makeStyles((theme) => ({
  bulletRoot: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  bulletDetail: {
    marginLeft: theme.spacing(3),
  },
}))

const HexBullet = ({ heading, description, image, variant, rest }) => {
  const classes = useStyles()

  return (
    <Box display="flex" className={classes.bulletRoot} {...rest}>
      <Hexagon image={image} variant={variant} />
      <Box className={classes.bulletDetail}>
        <SectionDetail heading={heading} description={description} />
      </Box>
    </Box>
  )
}

export default HexBullet
