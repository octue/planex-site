import React from 'react'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { SectionHeading, SectionContainer } from '../../elements'
import HexBullet from '../../elements/HexBullet'

const useStyles = makeStyles((theme) => ({
  parentBox: {
    flexDirection: 'column',
  },
  headingBox: {
    marginBottom: theme.spacing(2),
  },
  bulletsBox: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  hexagonSecondSec: {
    marginLeft: '108px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0',
    },
  },
}))

const HexBullets = ({ heading, bullets, rest }) => {
  const classes = useStyles()
  return (
    <SectionContainer {...rest}>
      <Box display="flex" className={classes.parentBox}>
        <Box className={classes.headingBox}>
          <SectionHeading>{heading}</SectionHeading>
        </Box>
        <Box display="flex" className={classes.bulletsBox}>
          {bullets && bullets.map((bullet) => <HexBullet {...bullet} />)}
        </Box>
      </Box>
    </SectionContainer>
  )
}

export default HexBullets
