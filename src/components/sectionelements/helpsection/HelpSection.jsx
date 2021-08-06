import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import SectionHeading from '../SectionHeading'
import SectionDetail from '../SectionDetail'
import Image1 from '../../../assets/images/hexagon/Hero8.png'
import Image2 from '../../../assets/images/hexagon/Hero10.png'
import Image3 from '../../../assets/images/hexagon/Hero9.png'
import HexagonGrid from '../../hexagon/HexagonGrid'

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.background.default,
  },
  container: {
    height: '100%',
    paddingTop: '180px',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '100px',
    },
  },
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
    marginLeft: '60px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginLeft: '0',
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

const HelpSection = () => {
  const classes = useStyles()
  const gridObjectXY = [
    {
      x: 3,
      y: 1,
      image: Image1,
    },
    {
      x: 1,
      y: 2,
      image: Image2,
    },
    {
      x: 2,
      y: 2,
      image: Image3,
    },
  ]
  return (
    <section className={classes.bgColor}>
      <Container maxWidth="lg" className={classes.container}>
        <Box display="flex" className={classes.parentBox}>
          <Box className={classes.hexagonTitle}>
            <Box>
              <SectionHeading text="How we help" />
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
              <HexagonGrid gridObjectXY={gridObjectXY} />
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default HelpSection
