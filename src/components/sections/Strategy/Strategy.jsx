import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import Image from '../../../assets/images/hexagon/Hero5.png'
import { SectionHeading, SectionContainer } from '../../elements'
import HexagonGrid from '../../hexagon/HexagonGrid/HexagonGrid'

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.background.default,
  },
  container: {
    height: '100%',
    paddingTop: '235px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '188px',
    },
  },
  parentBox: {
    maxheight: '434px',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  hexagonTitle: {
    // maxWidth: '456px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  HexagonDetailBox: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      marginLeft: '0',
    },
  },
  hexagonBox: {
    marginTop: '132px',
    maxWidth: '434px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '50px',
    },
  },

  detailBox: {
    // display: 'flex',
    marginTop: '-40px',
    maxWidth: '590px',
    marginLeft: '221px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: '0.1rem',
      marginTop: '10px',
    },
  },
  descriptionTitle: {
    fontWeight: 400,
  },
  cta: {
    display: 'flex',
    paddingTop: `8px`,
    paddingBottom: `8px`,
    backgroundColor: `#D31020`,
  },
  btnBox: {
    // marginTop: '24px',
  },
  titleBox: {
    marginBottom: '32px',
  },
}))

const Strategy = (rest) => {
  const classes = useStyles()
  const gridObjectXY = [
    {
      x: 3,
      y: 1,
      gatsbyImageData: Image,
    },
    {
      x: 4,
      y: 1,
      gatsbyImageData: Image,
    },
    {
      x: 1,
      y: 2,
      gatsbyImageData: Image,
    },
    {
      x: 2,
      y: 2,
      gatsbyImageData: Image,
    },
  ]

  return (
    <SectionContainer {...rest}>
      <Box display="flex" className={classes.parentBox}>
        <Box className={classes.hexagonTitle}>
          <Box>
            <SectionHeading>Strategy</SectionHeading>
          </Box>
        </Box>
        <Box className={classes.HexagonDetailBox}>
          <Box className={classes.hexagonBox}>
            <HexagonGrid grid={gridObjectXY} />
          </Box>
          <Box className={classes.detailBox}>
            <Box display="flex" className={classes.titleBox}>
              <Typography variant="subtitle1" color="textPrimary">
                It’s time to master and maximise data. If you’re managing lots
                of scientific data and analyses, change your business model to
                offer these as services - or improve your processes to make them
                consistent, reduce risk and cost.
              </Typography>
            </Box>
            <Box display="flex">
              <Typography
                variant="body1"
                color="textSecondary"
                component="span"
                className={classes.descriptionTitle}
              >
                How to begin
              </Typography>
            </Box>
            <Box display="flex" pb={4}>
              <Typography
                variant="body1"
                color="textSecondary"
                component="span"
              >
                A small package of work to understand your commercial needs and
                outline a system to tackle them.
              </Typography>
            </Box>
            <Box display="flex" className={classes.btnBox}>
              <Button className={classes.cta} variant="outlined">
                Let's connect
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  )
}

export default Strategy
