import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { SectionHeading, SectionContainer, SectionDetail } from '../../elements'
import Image1 from '../../../assets/images/hexagon/Hero8.png'
import Image2 from '../../../assets/images/hexagon/Hero10.png'
import Image3 from '../../../assets/images/hexagon/Hero9.png'
import HexagonGrid from '../../hexagon/HexagonGrid/HexagonGrid'

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    color: theme.palette.text.primary,
    fontFamily: "'Work Sans', sans-serif",
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  boxSubtitle: {
    marginTop: '3rem',
    marginLeft: '2rem',
  },
  parentBox: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  hexagonTitle: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  hexagonBox: {
    marginTop: '8px',
  },
  detailBox: {
    marginLeft: '2rem',
    marginTop: '5.5rem',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: '0.1rem',
    },
  },
}))

const HowWeHelp = (rest) => {
  const classes = useStyles()
  const gridObjectXY = [
    {
      x: 3,
      y: 1,
      gatsbyImageData: Image1,
    },
    {
      x: 1,
      y: 2,
      gatsbyImageData: Image2,
    },
    {
      x: 2,
      y: 2,
      gatsbyImageData: Image3,
    },
  ]

  return (
    <SectionContainer {...rest}>
      <Box display="flex" className={classes.parentBox}>
        <Box className={classes.hexagonTitle}>
          <Box>
            <SectionHeading>How we help</SectionHeading>
          </Box>
          <Box className={classes.boxSubtitle}>
            <Typography variant="h3" component="h3" className={classes.title}>
              Get started with Twined
            </Typography>
          </Box>
          <Box className={classes.boxSubtitle}>
            <Typography variant="h3" component="h3" className={classes.title}>
              Go further with Octue
            </Typography>
          </Box>
          <Box className={classes.boxSubtitle}>
            <Typography variant="h3" component="h3" className={classes.title}>
              Here to help you build
            </Typography>
          </Box>
        </Box>
        <Box className={classes.detailBox}>
          <SectionDetail
            description="Access, assess and analyse data and create data services with our open-source framework and tools. What you build will be shareable and scalable."
            button="Enter the library"
          />
          <Box className={classes.hexagonBox}>
            <HexagonGrid grid={gridObjectXY} />
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  )
}

export default HowWeHelp
